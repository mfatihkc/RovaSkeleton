using Rova.Application.Common.Exceptions;
using Rova.Application.Common.Interfaces;
using Rova.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Rova.Application.Schedules.Commands
{
    public class UpdateScheduleCommand: IRequest
    {
        public ScheduleEvent schedule { get; set; }
    }

    public class UpdateScheduleCommandHandler : IRequestHandler<UpdateScheduleCommand>
    {
        private readonly IApplicationDbContext _context;

        public UpdateScheduleCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<Unit> Handle(UpdateScheduleCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Schedules.FindAsync(request.schedule.Id);
            if(entity == null)
            {
                throw new NotFoundException(nameof(Schedule), request.schedule.Id);
            }

            entity.Subject = request.schedule.Subject;
            entity.StartTime = request.schedule.StartTime;
            entity.EndTime = request.schedule.EndTime;
            entity.Location = request.schedule.Location;
            entity.Description = request.schedule.Description;
            entity.IsAllDay = request.schedule.IsAllDay;
            entity.StartTimezone = request.schedule.StartTimezone;
            entity.EndTimezone = request.schedule.EndTimezone;
            entity.RecurrenceRule = request.schedule.EndTimezone;
            entity.RecurrenceId = request.schedule.RecurrenceId;
            entity.RecurrenceException = request.schedule.RecurrenceException;
            entity.EventType = request.schedule.EventType;

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;

        }
    }
}
