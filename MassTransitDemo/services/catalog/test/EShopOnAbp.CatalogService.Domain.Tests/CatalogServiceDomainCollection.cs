using EShopOnAbp.CatalogService.MongoDB;
using Xunit;

namespace EShopOnAbp.CatalogService;

[CollectionDefinition(CatalogServiceTestConsts.CollectionDefinitionName)]
public class CatalogServiceDomainCollection : CatalogServiceMongoDbCollectionFixtureBase
{

}