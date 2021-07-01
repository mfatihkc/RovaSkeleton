using AutoMapper;
using AutoMapper.QueryableExtensions;
using Rova.Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Rova.Application.Contacts.Queries.GetContacts
{
    public class GetContactsQuery : IRequest<IEnumerable<ContactDto>>
    {
    }

    public class GetContactsQueryHandler : IRequestHandler<GetContactsQuery, IEnumerable<ContactDto>>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;
        private readonly ICurrentUserService _currentUserService;
        public GetContactsQueryHandler(IApplicationDbContext context, IMapper mapper, ICurrentUserService crrentUserService)
        {
            _context = context;
            _mapper = mapper;
            _currentUserService = crrentUserService;
        }

        public async Task<IEnumerable<ContactDto>> Handle(GetContactsQuery request, CancellationToken cancellationToken)
        {
            return await _context.Contacts
                    .ProjectTo<ContactDto>(_mapper.ConfigurationProvider)
                    .Where(c=>c.UserId==_currentUserService.UserId)
                    .OrderBy(c => c.FullName)
                    .ToListAsync(cancellationToken);        
        }
    }
}
