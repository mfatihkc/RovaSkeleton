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
    public class CreateScheduleCommand: IRequest<int>
    {
        public ScheduleEvent schedule { get; set; }
    }

    public class CreateScheduleCommandHandler : IRequestHandler<CreateScheduleCommand, int>
    {
        private readonly IApplicationDbContext _context;
        private readonly ICurrentUserService _currentUserService;

        public CreateScheduleCommandHandler(IApplicationDbContext context, ICurrentUserService currentUserService)
        {
            _context = context;
            _currentUserService = currentUserService;
        }

        public async Task<int> Handle(CreateScheduleCommand request, CancellationToken cancellationToken)
        {
            var entity = new Schedule()
            {
                UserId=_currentUserService.UserId,
                Subject=request.schedule.Subject,
                StartTime=request.schedule.StartTime,
                EndTime=request.schedule.EndTime,
                Location=request.schedule.Location,
                Description=request.schedule.Description,
                IsAllDay=request.schedule.IsAllDay,
                StartTimezone=request.schedule.StartTimezone,
                EndTimezone=request.schedule.EndTimezone,
                RecurrenceRule=request.schedule.RecurrenceRule,
                RecurrenceId=request.schedule.RecurrenceId,
                RecurrenceException=request.schedule.RecurrenceException,
                EventType = request.schedule.EventType
            };

            _context.Schedules.Add(entity);
            await _context.SaveChangesAsync(cancellationToken);

            return request.schedule.Id;

        }
    }
    
}
