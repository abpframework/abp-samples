using EventOrganizer.MongoDB;
using Xunit;

namespace EventOrganizer
{
    [CollectionDefinition(EventOrganizerTestConsts.CollectionDefinitionName)]
    public class EventOrganizerDomainCollection : EventOrganizerMongoDbCollectionFixtureBase
    {

    }
}
