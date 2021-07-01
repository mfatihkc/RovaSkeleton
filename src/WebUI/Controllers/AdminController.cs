using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Rova.Application.Users.Commands;

namespace Rova.WebUI.Controllers
{
    [Authorize(Policy = "ShouldBeAdmin")]
    public class AdminController : ApiController
    {
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
