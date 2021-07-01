using Rova.Application.Common.Interfaces;
using Rova.Application.Common.Models;
using Rova.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Rova.Infrastructure.Identity
{
    public class IdentityService : IIdentityService
    {
        private readonly IApplicationDbContext _context;

        public IdentityService(IApplicationDbContext context)
        {
            _context = context;
        }

        public User GetUser(string userId)
        {
            var user = _context.Users.Find(userId);

            return user;
        }
        public async Task<User> GetUserAsync(string userId)
        {
            var user = await _context.Users.FindAsync(userId);

            return user;
        }
        

        public async Task<string> GetUserFullNameAsync(string userId)
        {
            var user = await _context.Users.FindAsync(userId);
            if (user == null) return "NoneUser";
            return string.Concat(user.FullName," ",user.LastName);
        }

        public async Task<string> GetUserRoleAsync(string userId)
        {
            var user = await _context.Users.FindAsync(userId);
            return user.Role;
        }

    }
}
