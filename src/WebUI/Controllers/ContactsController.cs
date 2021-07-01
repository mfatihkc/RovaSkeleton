using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Rova.Application.Contacts.Commands.CreateContact;
using Rova.Application.Contacts.Commands.DeleteContact;
using Rova.Application.Contacts.Commands.UpdateContact;
using Rova.Application.Contacts.Queries.GetContacts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Rova.WebUI.Controllers
{
    [Authorize]
    public class ContactsController : ApiController
    {
        [HttpGet]
        public async Task<IEnumerable<ContactDto>> Get()
        {
            return await Mediator.Send(new GetContactsQuery());
        }


        [HttpPost]
        public async Task<ActionResult<string>> Create(CreateContactCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut]
        public async Task<ActionResult> Update(UpdateContactCommand command)
        {
            if (string.IsNullOrEmpty(command.Id))
            {
                return BadRequest();
            }

            await Mediator.Send(command);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            await Mediator.Send(new DeleteContactCommand { Id = id });

            return NoContent();
        }

        [HttpPost]
        [Route("Star")]
        public async Task<ActionResult> Star(UpdateContactStarCommand command)
        {
            if (string.IsNullOrEmpty(command.Id))
            {
                return BadRequest();
            }

            await Mediator.Send(command);

            return NoContent();
        }
    }
}
