using Rova.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Rova.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<Contact> Contacts { get; set; }
        DbSet<User> Users { get; set; }
        DbSet<Schedule> Schedules { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
