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
    public class DeleteScheduleCommand: IRequest
    {
        public int Id { get; set; }
    }

    public class DeleteScheduleCommandHandler : IRequestHandler<DeleteScheduleCommand>
    {
        private readonly IApplicationDbContext _context;

        public DeleteScheduleCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<Unit> Handle(DeleteScheduleCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Schedules.FindAsync(request.Id);
            if(entity == null)
            {
                throw new NotFoundException(nameof(Schedule), request.Id);
            }
            _context.Schedules.Remove(entity);
            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
