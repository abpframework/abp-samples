using EventOrganizer.MongoDB;
using Volo.Abp.Modularity;

namespace EventOrganizer
{
    [DependsOn(
        typeof(EventOrganizerMongoDbTestModule)
        )]
    public class EventOrganizerDomainTestModule : AbpModule
    {

    }
}