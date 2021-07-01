using Rova.Application.Common.Models;
using Rova.Domain.Entities;
using System.Threading;
using System.Threading.Tasks;

namespace Rova.Application.Common.Interfaces
{
    public interface IIdentityService
    {
        User GetUser(string userId);
        Task<User> GetUserAsync(string userId);
        Task<string> GetUserFullNameAsync(string userId);
        Task<string> GetUserRoleAsync(string userId);

    }
}
