using Rova.Domain.Common;
using System;
using System.Collections.Generic;

namespace Rova.Domain.Entities
{
    public partial class Schedule:AuditableEntity
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public DateTime? StartTime { get; set; }
        public DateTime? EndTime { get; set; }
        public string Subject { get; set; }
        public string Location { get; set; }
        public string Description { get; set; }
        public bool? IsAllDay { get; set; }
        public string StartTimezone { get; set; }
        public string EndTimezone { get; set; }
        public string RecurrenceRule { get; set; }
        public int RecurrenceId { get; set; }
        public string RecurrenceException { get; set; }
        public string EventType { get; set; }

        public virtual User User { get; set; }
    }
}
