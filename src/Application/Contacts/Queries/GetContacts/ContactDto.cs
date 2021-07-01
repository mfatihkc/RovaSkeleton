using Rova.Application.Common.Mappings;
using Rova.Domain.Entities;
using System;

namespace Rova.Application.Contacts.Queries.GetContacts
{
    public class ContactDto : IMapFrom<Contact>
    {
        public string Id { get; set; }
        public string UserId { get; set; }
        public string FullName { get; set; }
        public string LastName { get; set; }
        public string Avatar { get; set; }
        public string NickName { get; set; }
        public string Company { get; set; }
        public string JobTitle { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public DateTime? Birthday { get; set; }
        public string Notes { get; set; }
        public bool Star { get; set; }
        public DateTime? Created { get; set; }
    }
}
