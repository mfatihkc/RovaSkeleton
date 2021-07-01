using Rova.Application.Common.Interfaces;
using Rova.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Rova.Application.Users.Commands
{
    public class CreateUserCommand:IRequest<string>
    {
        public string UserId { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }
        public string LastName { get; set; }
    }

    public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, string>
    {
        private readonly IApplicationDbContext _context;

        public CreateUserCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<string> Handle(CreateUserCommand request, CancellationToken cancellationToken)
        {
            var entity = new User();
            entity.UserId = request.UserId;
            entity.FullName = request.FullName;
            entity.LastName = request.LastName;
            entity.Email = request.Email;
            entity.Role = "free";
            entity.ExpiryDate = DateTime.Now.AddMonths(3);

            _context.Users.Add(entity);
            await _context.SaveChangesAsync(cancellationToken);
            return entity.UserId;

        }
    }
}
