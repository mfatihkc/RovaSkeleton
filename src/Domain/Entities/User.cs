using Rova.Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Rova.Domain.Entities
{
    public class User:AuditableEntity
    {
        public string UserId { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }
        public string LastName { get; set; }
        public string Role { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public virtual ICollection<Contact> Contacts { get; set; }
        public virtual ICollection<Schedule> Schedules { get; set; }

    }
}
