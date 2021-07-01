using Rova.Application.Common.Exceptions;
using Rova.Application.Common.Interfaces;
using Rova.Domain.Entities;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Rova.Application.Contacts.Commands.UpdateContact
{
    public class UpdateContactCommand:IRequest
    {
        public string Id { get; set; }
        public string FullName { get; set; }
        public string LastName { get; set; }
        public string Avatar { get; set; }
        public string NickName { get; set; }
        public string Company { get; set; }
        public string JobTitle { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Birthday { get; set; }
        public string Notes { get; set; }
    }
    public class UpdateContactCommandHandler : IRequestHandler<UpdateContactCommand>
    {
        private readonly IApplicationDbContext _context;

        public UpdateContactCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<Unit> Handle(UpdateContactCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Contacts.FindAsync(request.Id);

            if (entity == null)
            {
                throw new NotFoundException(nameof(Contact), request.Id);
            }

            entity.Id = request.Id;
            entity.FullName = request.FullName;
            entity.LastName = request.LastName;
            entity.Avatar = request.Avatar;
            entity.NickName = request.NickName;
            entity.Company = request.Company;
            entity.JobTitle = request.JobTitle;
            entity.Email = request.Email;
            entity.Phone = request.Phone;
            entity.Address = request.Address;
            if (request.Birthday != "") entity.Birthday = Convert.ToDateTime(request.Birthday);
            entity.Notes = request.Notes;

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }

    }
}
