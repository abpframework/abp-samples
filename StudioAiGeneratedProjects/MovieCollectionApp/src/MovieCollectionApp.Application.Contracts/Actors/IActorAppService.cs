using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace MovieCollectionApp.Actors;

public interface IActorAppService :
    ICrudAppService<
        ActorDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateUpdateActorDto>
{
}
