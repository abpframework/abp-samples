using System;
using Volo.Abp.Domain.Repositories;

namespace Acme.DemoCenterApp.Customers;

public interface ICustomerRepository: IRepository<Customer, Guid>
{

}