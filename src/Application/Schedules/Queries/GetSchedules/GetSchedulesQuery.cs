using Rova.Application.Common.Interfaces;
using Rova.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Rova.Application.Schedules.Queries.GetSchedules;
using AutoMapper;
using AutoMapper.QueryableExtensions;

namespace Rova.Application.Schedules.Queries
{
    public class GetSchedulesQuery: IRequest<List<ScheduleDto>>
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }

    public class GetSchedulesQueryHandler : IRequestHandler<GetSchedulesQuery, List<ScheduleDto>>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;
        private readonly ICurrentUserService _currentUserService;

        public GetSchedulesQueryHandler(IApplicationDbContext context, IMapper mapper, ICurrentUserService currentUserService)
        {
            _context = context;
            _mapper = mapper;
            _currentUserService = currentUserService;
        }
        public async Task<List<ScheduleDto>> Handle(GetSchedulesQuery request, CancellationToken cancellationToken)
        {
            return await _context.Schedules
                    .ProjectTo<ScheduleDto>(_mapper.ConfigurationProvider)
                    .Where(s => s.UserId == _currentUserService.UserId &&
                    s.StartTime > request.StartDate &&
                    s.EndTime < request.EndDate)
                    .ToListAsync(cancellationToken);
        }
    }
}
