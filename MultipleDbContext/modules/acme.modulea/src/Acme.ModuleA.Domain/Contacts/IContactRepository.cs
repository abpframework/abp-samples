using System;
using Volo.Abp.Domain.Repositories;

namespace Acme.ModuleA.Contacts;

public interface IContactRepository : IRepository<Contact, Guid>
{
    
}