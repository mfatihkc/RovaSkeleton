using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Rova.Application.Users.Commands;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Rova.WebUI.Controllers
{
    
    public class UsersController : ApiController
    {
        [HttpPost]
        public async Task<ActionResult<string>> Create(CreateUserCommand command)
        {
            return await Mediator.Send(command);
        }


        [HttpPut]
        public async Task<ActionResult> Update(UpdateUserCommand command)
        {
            if (string.IsNullOrEmpty(command.UserId))
            {
                return BadRequest();
            }

            await Mediator.Send(command);

            return NoContent();
        }


    }
}
