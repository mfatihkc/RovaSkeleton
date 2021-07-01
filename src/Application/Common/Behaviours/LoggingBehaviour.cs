using Rova.Application.Common.Interfaces;
using MediatR.Pipeline;
using Microsoft.Extensions.Logging;
using System.Threading;
using System.Threading.Tasks;
using Audit.Core;

namespace Rova.Application.Common.Behaviours
{
    public class LoggingBehaviour<TRequest> : IRequestPreProcessor<TRequest>
    {
        private readonly ILogger _logger;
        private readonly ICurrentUserService _currentUserService;
        private readonly IIdentityService _identityService;

        public LoggingBehaviour(ILogger<TRequest> logger, ICurrentUserService currentUserService, IIdentityService identityService)
        {
            _logger = logger;
            _currentUserService = currentUserService;
            _identityService = identityService;
        }

        public async Task Process(TRequest request, CancellationToken cancellationToken)
        {
            var requestName = typeof(TRequest).Name;
            var userId = _currentUserService.UserId ?? string.Empty;
            string userName = _currentUserService.UserName ?? string.Empty;
            string userFullName = string.Empty;

            if (!string.IsNullOrEmpty(userId))
            {
                userFullName = await _identityService.GetUserFullNameAsync(userId);
            }

            Configuration.AddCustomAction(ActionType.OnScopeCreated, scope =>
            {
                scope.Event.Environment.UserName = userName;
            });

            using (AuditScope.Create(requestName, () => request))
            {
                _logger.LogInformation("Rova Request: {Name} {@UserId} {@UserName} {@Request}",
                requestName, userId, userName, userFullName, request);
            }
            
        }
    }
}
