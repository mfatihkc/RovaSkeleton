using Rova.Application.Common.Interfaces;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;

namespace Rova.WebUI.Services
{
    public class CurrentUserService : ICurrentUserService
    {
        public string UserId { get; }
        public string UserName { get; }
        public CurrentUserService(IHttpContextAccessor httpContextAccessor)
        {
            UserId = httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.NameIdentifier);
            UserName = httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.Email);
        }

        
    }
}
