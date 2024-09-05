using System;
using Acme.DemoCenterApp.Customers;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace Acme.DemoCenterApp.EntityFrameworkCore;

public class EfCoreCustomerRepository : EfCoreRepository<DemoCenterAppDbContext, Customer, Guid>, ICustomerRepository
{
    public EfCoreCustomerRepository(IDbContextProvider<DemoCenterAppDbContext> dbContextProvider) : base(dbContextProvider) {}
}