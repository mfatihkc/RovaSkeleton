using Rova.Application.Common.Interfaces;
using Rova.Domain.Entities;
using Rova.Infrastructure.Identity;
using Rova.Infrastructure.Persistence;
using Rova.Infrastructure.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Generic;
using System.Security.Claims;
using Audit.SqlServer.Providers;
using Audit.Core.Providers;
using Rova.Infrastructure.HealthChecks;
using System;
using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace Rova.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            //Database connection
            if (configuration.GetValue<string>("DBProvider") == "MySql")
            {
                services.AddDbContext<ApplicationDbContext>(options =>
                    options.UseMySQL(
                        configuration.GetConnectionString("MySql"),
                        b => b.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName)));

                services.AddHealthChecks()
                      .AddMySql(configuration.GetConnectionString("MySql"), name: "MySql Provider");
            }
            else
            {
                services.AddDbContext<ApplicationDbContext>(options =>
                    options.UseSqlServer(
                        configuration.GetConnectionString("MsSql"),
                        b => b.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName)));

                services.AddHealthChecks()
                        .AddSqlServer(configuration.GetConnectionString("MsSql"), name: "SQL Provider");
            }

            // Add Interface way
            services.AddScoped<IApplicationDbContext>(provider => provider.GetService<ApplicationDbContext>());
            services.AddTransient<IDateTime, DateTimeService>();
            services.AddTransient<IIdentityService, IdentityService>();


            // Health Check
            services.AddHttpClient("datastore.api", c =>
            {
                c.BaseAddress = new Uri(configuration.GetValue<string>("DataStoreApi:BaseUrl"));
            });

            services.AddHealthChecks()
                    .AddCheck<DataStoreApiHealthCheck>("DataStore API");
            services.AddHealthChecks()
                    .AddCheck<FirebaseHealthCheck>("Firebase Auth and Func API");

            // Authentication
            ConfigureAuthentication(services, configuration);         

            //Autherization
            services.AddAuthorization(options =>
            {
                options.AddPolicy("ShouldBeAdmin", policy =>
                      policy.RequireClaim("admin"));
                options.AddPolicy("ShouldBeFree", policy =>
                      policy.RequireClaim("free"));
                options.AddPolicy("ShouldBeGold", policy =>
                      policy.RequireClaim("gold"));
                options.AddPolicy("ShouldBePlatinum", policy =>
                      policy.RequireClaim("platinum"));
            });

            //Audit
            ConfigureAudit(services, configuration);

            return services;
        }


        private static void ConfigureAuthentication(IServiceCollection serviceCollection, IConfiguration configuration)
        {
            serviceCollection
                .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.Authority = configuration["Authentication:JwtBearer:Authority"];
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidIssuer = configuration["Authentication:JwtBearer:TokenValidation:Issuer"],
                        ValidateAudience = true,
                        ValidAudience = configuration["Authentication:JwtBearer:TokenValidation:Audience"],
                        ValidateLifetime = true
                    };
                });
        }

        private static void ConfigureAudit(IServiceCollection serviceCollection, IConfiguration configuration)
        {
            if (configuration.GetValue<string>("AuditProvider") == "MsSql")
            {
                Audit.Core.Configuration.DataProvider = new SqlDataProvider()
                {
                    ConnectionString = configuration.GetConnectionString("MsSqlAudits"),
                    Schema = "dbo",
                    TableName = "Event",
                    IdColumnName = "EventId",
                    JsonColumnName = "Data",
                    LastUpdatedDateColumnName = "LastUpdatedDate"
                };
            }
            else
            {
                Audit.Core.Configuration.DataProvider = new FileDataProvider()
                {
                    DirectoryPath = configuration.GetValue<string>("AuditPath"),
                    FilenamePrefix = "Rova_Audit_"
                };
            }
        }
    }
}
