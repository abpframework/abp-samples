using Volo.Abp.Modularity;

namespace EventOrganizer
{
    [DependsOn(
        typeof(EventOrganizerApplicationModule),
        typeof(EventOrganizerDomainTestModule)
        )]
    public class EventOrganizerApplicationTestModule : AbpModule
    {

    }
}