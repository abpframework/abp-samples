using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ModularCrm.Catalog;
using Volo.Abp;
using Volo.Abp.Application.Services;

namespace ModularCrm.Products.Integration;

[IntegrationService]
public interface IProductIntegrationService : IApplicationService
{
    Task<List<ProductDto>> GetProductsByIdsAsync(List<Guid> ids);
}