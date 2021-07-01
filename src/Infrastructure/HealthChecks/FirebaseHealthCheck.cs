using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using System;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Rova.Infrastructure.HealthChecks
{
    public class FirebaseHealthCheck : IHealthCheck
    {
        private IConfiguration _configuration;

        public FirebaseHealthCheck(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default)
        {
            try
            {
                var request = new HttpRequestMessage(
                HttpMethod.Get,
                _configuration["FireBase:HealthCheckUrl"]);

                var _client = new HttpClient();
                var response = _client.SendAsync(request).Result;

                if (response.IsSuccessStatusCode)
                {
                    return Task.FromResult(HealthCheckResult.Healthy("FireBase is up and running!"));
                }
                else
                {
                    return Task.FromResult(HealthCheckResult.Unhealthy($"FireBase response code: {response.StatusCode}"));
                }
            }
            catch (Exception ex)
            {
                return Task.FromResult(HealthCheckResult.Unhealthy($"FireBase is not reachable : {ex.Message}"));
            }
        }
    }
}
