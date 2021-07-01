using Rova.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Rova.Infrastructure.Persistence.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {


        public void Configure(EntityTypeBuilder<User> entity)
        {
            entity.HasKey(e => e.UserId);

            entity.Property(e => e.UserId).HasMaxLength(200);

            entity.Property(e => e.FullName).HasMaxLength(150);

            entity.Property(e => e.LastName).HasMaxLength(150);

            entity.Property(e => e.Email).HasMaxLength(150);

            entity.Property(e => e.ExpiryDate).HasColumnType("datetime");

            entity.Property(e => e.Role)
                .HasMaxLength(50)
                .HasDefaultValueSql("(N'Free')");
        }


        
    }
}
