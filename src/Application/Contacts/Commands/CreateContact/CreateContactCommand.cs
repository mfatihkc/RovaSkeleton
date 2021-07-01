using Rova.Application.Common.Interfaces;
using Rova.Application.Contacts.Queries.GetContacts;
using Rova.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Rova.Application.Contacts.Commands.CreateContact
{
    public class CreateContactCommand:IRequest<string>
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

    public class CreateContactCommandHandler : IRequestHandler<CreateContactCommand, string>
    {
        private readonly IApplicationDbContext _context;
        private readonly ICurrentUserService _currentUserService;

        public CreateContactCommandHandler(IApplicationDbContext context, ICurrentUserService currentUserService)
        {
            _context = context;
            _currentUserService = currentUserService;
        }


        public async Task<string> Handle(CreateContactCommand request,CancellationToken cancellationToken)
        {
            var entity = new Contact();
            entity.UserId = _currentUserService.UserId;
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

            _context.Contacts.Add(entity);
            await _context.SaveChangesAsync(cancellationToken);
            return entity.Id;
        }
    }
}
