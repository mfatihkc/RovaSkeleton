using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Rova.Application.Schedules.Commands;
using Rova.Application.Schedules.Queries;
using Rova.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Rova.Infrastructure.Persistence;
using Rova.Application.Schedules.Queries.GetSchedules;
using Microsoft.AspNetCore.Authorization;

namespace Rova.WebUI.Controllers
{
    
    [Authorize(Policy = "ShouldBePlatinum")]
    public class SchedulesController : ApiController
    {
        public class Params
        {
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
        }

        [HttpPost]
        [Route("LoadData")]
        public async Task<List<ScheduleDto>> LoadData([FromBody] Params param)
        {
            return await Mediator.Send(new GetSchedulesQuery()
            {
                StartDate = param.StartDate,
                EndDate = param.EndDate
            });
        }

      

        [HttpPost]
        [Route("UpdateData")]
        public async Task<List<ScheduleDto>> UpdateData([FromBody] EditParams param)
        {
            Params p = new Params();
            
            if (param.action == "insert" || (param.action == "batch" && param.added.Count > 0))
            {
                var value = (param.action == "insert") ? param.value : param.added[0];

                p.StartDate = value.StartTime = value.StartTime.AddHours(3);
                p.EndDate = value.EndTime = value.EndTime.AddHours(3);

                CreateScheduleCommand command = new CreateScheduleCommand()
                {
                    schedule = value
                };

               await Mediator.Send(command);
            }
            else if (param.action == "update" || (param.action == "batch" && param.changed.Count > 0))
            {
                var value = (param.action == "update") ? param.value : param.changed[0];

                p.StartDate = value.StartTime = value.StartTime.AddHours(3);
                p.EndDate = value.EndTime = value.EndTime.AddHours(3);

                UpdateScheduleCommand command = new UpdateScheduleCommand()
                {
                    schedule = value
                };

                await Mediator.Send(command);
            }
            else if (param.action == "remove" || (param.action == "batch" && param.deleted.Count > 0))
            {
                var value = (param.action == "remove") ? param.value : param.changed[0];

                p.StartDate = value.StartTime = value.StartTime.AddHours(3);
                p.EndDate = value.EndTime = value.EndTime.AddHours(3);

                if (param.action == "remove")
                {
                    DeleteScheduleCommand command = new DeleteScheduleCommand() { Id = Convert.ToInt32(param.key) };
                    await Mediator.Send(command);
                }
                else
                {
                    foreach (var apps in param.deleted)
                    {
                        DeleteScheduleCommand command = new DeleteScheduleCommand() { Id = Convert.ToInt32(param.key) };
                        await Mediator.Send(command);
                    }
                }
            }


            //After Updating Data, Refresh Data calles
            return await LoadData(p);
        }



    }
}
