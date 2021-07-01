using Rova.Application.Common.Mappings;
using Rova.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace Rova.Application.Schedules.Queries.GetSchedules
{
    public class ScheduleDto : IMapFrom<Schedule>
    {
        [JsonPropertyName("Id")]
        public int Id { get; set; }

        [JsonPropertyName("UserId")]
        public string UserId { get; set; }

        [JsonPropertyName("StartTime")]
        public DateTime? StartTime { get; set; }

        [JsonPropertyName("EndTime")]
        public DateTime? EndTime { get; set; }

        [JsonPropertyName("Subject")]
        public string Subject { get; set; }

        [JsonPropertyName("Location")]
        public string Location { get; set; }

        [JsonPropertyName("Description")]
        public string Description { get; set; }

        [JsonPropertyName("IsAllDay")]
        public bool? IsAllDay { get; set; }

        [JsonPropertyName("StartTimezone")]
        public string StartTimezone { get; set; }

        [JsonPropertyName("EndTimezone")]
        public string EndTimezone { get; set; }

        [JsonPropertyName("RecurrenceRule")]
        public string RecurrenceRule { get; set; }

        [JsonPropertyName("RecurrenceId")]
        public int RecurrenceId { get; set; }

        [JsonPropertyName("RecurrenceException")]
        public string RecurrenceException { get; set; }
        

        [JsonPropertyName("EventType")]
        public string EventType { get; set; }
    }
}
