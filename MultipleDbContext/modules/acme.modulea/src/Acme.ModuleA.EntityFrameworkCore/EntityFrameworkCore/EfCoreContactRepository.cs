using System;
using Acme.ModuleA.Contacts;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace Acme.ModuleA.EntityFrameworkCore;

public class EfCoreContactRepository : EfCoreRepository<IModuleADbContext, Contact, Guid>, IContactRepository
{
    public EfCoreContactRepository(IDbContextProvider<IModuleADbContext> dbContextProvider) : base(dbContextProvider) {}
}