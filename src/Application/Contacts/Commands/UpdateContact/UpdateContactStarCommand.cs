using Rova.Application.Common.Exceptions;
using Rova.Application.Common.Interfaces;
using Rova.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Rova.Application.Contacts.Commands.UpdateContact
{
    public class UpdateContactStarCommand: IRequest
    {
        public string Id { get; set; }
    }

    public class UpdateContactStarCommandHandler : IRequestHandler<UpdateContactStarCommand>
    {
        private readonly IApplicationDbContext _context;

        public UpdateContactStarCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(UpdateContactStarCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Contacts.FindAsync(request.Id);

            if (entity == null)
            {
                throw new NotFoundException(nameof(Contact), request.Id);
            }

            entity.Star = !entity.Star;
            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
