using Rova.Application.Common.Exceptions;
using Rova.Application.Common.Interfaces;
using Rova.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Rova.Application.Users.Commands
{
    public class UpdateUserCommand:IRequest
    {
        public string UserId { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }
        public string LastName { get; set; }
        public string Role { get; set; }
    }

    public class UpdateUserCommandHandler : IRequestHandler<UpdateUserCommand>
    {

        private readonly IApplicationDbContext _context;
        private readonly ICurrentUserService _currentUserService;
        private readonly IIdentityService _identityService;

        public UpdateUserCommandHandler(
            IApplicationDbContext context,
            ICurrentUserService currentUserService,
            IIdentityService identityService)
        {
            _context = context;
            _currentUserService = currentUserService;
            _identityService = identityService;
        }
        public async Task<Unit> Handle(UpdateUserCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Users.FindAsync(request.UserId);
            
            if (entity == null)
            {
                throw new NotFoundException(nameof(User), request.UserId);
            }

            if (!string.IsNullOrEmpty(request.Email)) entity.Email = request.Email;
            if (!string.IsNullOrEmpty(request.FullName)) entity.FullName = request.FullName;
            if (!string.IsNullOrEmpty(request.LastName)) entity.LastName = request.LastName;
            if (!string.IsNullOrEmpty(request.Role)) entity.Role = request.Role;
            entity.ExpiryDate = DateTime.Now.AddMonths(12);


            await _context.SaveChangesAsync(cancellationToken);
            return Unit.Value;
        }
    }
}
