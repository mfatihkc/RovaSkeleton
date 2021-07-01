using Rova.Application.Common.Exceptions;
using Rova.Application.Common.Interfaces;
using Rova.Domain.Entities;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Rova.Application.Contacts.Commands.DeleteContact
{
    public class DeleteContactCommand:IRequest
    {
        public string Id { get; set; }
    }
    public class DeleteContactCommandHandler : IRequestHandler<DeleteContactCommand>
    {
        private readonly IApplicationDbContext _context;

        public DeleteContactCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(DeleteContactCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Contacts.FindAsync(request.Id);
            if (entity==null)
            {
                throw new NotFoundException(nameof(Contact), request.Id);
            }

            _context.Contacts.Remove(entity);
            await _context.SaveChangesAsync(cancellationToken);
            return Unit.Value;
        }

    }
}
