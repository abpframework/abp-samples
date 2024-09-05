using Acme.ModuleA.Contacts;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace Acme.ModuleA.EntityFrameworkCore;

[ConnectionStringName(ModuleADbProperties.ConnectionStringName)]
public interface IModuleADbContext : IEfCoreDbContext
{
     DbSet<Contact> Contacts { get; }
}
