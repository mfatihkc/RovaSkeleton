using Rova.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Rova.Infrastructure.Persistence.Configurations
{
    public class ScheduleConfiguration : IEntityTypeConfiguration<Schedule>
    {


        public void Configure(EntityTypeBuilder<Schedule> entity)
        {
            entity.HasKey(e => e.Id)
                .IsClustered(false);

            entity.HasIndex(e => e.UserId)
                .HasName("IX_Schedules")
                .IsClustered();

            entity.Property(e => e.Id).HasMaxLength(200);

            entity.Property(e => e.Description).HasMaxLength(500);

            entity.Property(e => e.EndTime).HasColumnType("datetime");

            entity.Property(e => e.EndTimezone).HasMaxLength(50);

            entity.Property(e => e.Location).HasMaxLength(50);

            entity.Property(e => e.RecurrenceException).HasMaxLength(500);

            entity.Property(e => e.RecurrenceId).HasMaxLength(200);

            entity.Property(e => e.RecurrenceRule).HasMaxLength(200);

            entity.Property(e => e.StartTime).HasColumnType("datetime");

            entity.Property(e => e.StartTimezone).HasMaxLength(50);

            entity.Property(e => e.Subject).HasMaxLength(50);

            entity.Property(e => e.UserId).HasMaxLength(200);

            entity.HasOne(d => d.User)
                .WithMany(p => p.Schedules)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_Schedules_Users");
        }



    }
}
