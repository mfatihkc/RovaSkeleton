using Rova.Application.Common.Interfaces;
using System;

namespace Rova.Infrastructure.Services
{
    public class DateTimeService : IDateTime
    {
        public DateTime Now => DateTime.Now;
    }
}
