using Rova.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Rova.Infrastructure.Persistence.Configurations
{
    public class ContactConfiguration : IEntityTypeConfiguration<Contact>
    {
        public void Configure(EntityTypeBuilder<Contact> entity)
        {
            entity.HasKey(e => e.Id)
                    .IsClustered(false);

            entity.HasIndex(e => e.UserId)
                .IsClustered();

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.Property(e => e.UserId).ValueGeneratedNever();

            entity.Property(e => e.Address).HasMaxLength(500);

            entity.Property(e => e.Avatar).HasMaxLength(250);

            entity.Property(e => e.Birthday).HasColumnType("datetime");

            entity.Property(e => e.Company).HasMaxLength(150);

            entity.Property(e => e.Email).HasMaxLength(50);

            entity.Property(e => e.JobTitle).HasMaxLength(50);

            entity.Property(e => e.LastName).HasMaxLength(150);

            entity.Property(e => e.FullName).HasMaxLength(150);

            entity.Property(e => e.NickName).HasMaxLength(50);

            entity.Property(e => e.Notes).HasMaxLength(500);

            entity.Property(e => e.Phone).HasMaxLength(50);
        }
    }
}
