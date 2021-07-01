using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;


namespace Rova.Infrastructure.HealthChecks
{
    public class DataStoreApiHealthCheck : IHealthCheck
    {
        private HttpClient _client;
        private IConfiguration _configuration;

        public DataStoreApiHealthCheck(IHttpClientFactory httpClientFactory, IConfiguration configuration)
        {
            _client = httpClientFactory.CreateClient();
            _configuration = configuration;
        }

        public Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default)
        {
            try
            {
                var request = new HttpRequestMessage(
                HttpMethod.Get,
                _configuration["DataStoreApi:HealthCheckUrl"]);

                var response = _client.SendAsync(request).Result;

                if (response.IsSuccessStatusCode)
                {
                    return Task.FromResult(HealthCheckResult.Healthy("DataStoreApi is up and running!"));
                }
                else
                {
                    return Task.FromResult(HealthCheckResult.Unhealthy($"DataStoreApi response code: {response.StatusCode}"));
                }
            }
            catch (Exception ex)
            {
                return Task.FromResult(HealthCheckResult.Unhealthy($"DataStoreApi is not reachable : {ex.Message}"));
            }
        }
    }
}
