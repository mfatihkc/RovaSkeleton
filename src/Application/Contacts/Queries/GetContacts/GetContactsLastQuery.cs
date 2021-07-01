using AutoMapper;
using AutoMapper.QueryableExtensions;
using Rova.Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Rova.Application.Contacts.Queries.GetContacts
{
    public class GetContactsLastQuery: IRequest<IEnumerable<ContactDto>>
    {

    }
    public class GetContactsLastQueryHandler : IRequestHandler<GetContactsLastQuery, IEnumerable<ContactDto>>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;
        private readonly ICurrentUserService _currentUserService;
        public GetContactsLastQueryHandler(IApplicationDbContext context, IMapper mapper, ICurrentUserService crrentUserService)
        {
            _context = context;
            _mapper = mapper;
            _currentUserService = crrentUserService;
        }

        public async Task<IEnumerable<ContactDto>> Handle(GetContactsLastQuery request, CancellationToken cancellationToken)
        {
            return await _context.Contacts
                    .ProjectTo<ContactDto>(_mapper.ConfigurationProvider)
                    .Where(c => c.UserId == _currentUserService.UserId && c.Created > DateTime.Now.AddMonths(-1))
                    .OrderByDescending(c => c.Created)
                    .ToListAsync(cancellationToken);
        }
    }
}
