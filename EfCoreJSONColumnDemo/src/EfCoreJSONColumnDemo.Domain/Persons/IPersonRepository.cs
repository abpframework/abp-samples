using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace EfCoreJSONColumnDemo.Persons;

public interface IPersonRepository : IRepository<Person,int>
{
    Task<Address> GetAddressAsync(int id);
    Task<List<Address>> GetAddressesAsync();
    
    Task<ContactDetails> GetContactDetailsAsync(int id);
    Task<List<ContactDetails>> GetContactDetailsAsync();
    
    Task<string> GetPhoneAsync(int id);
    Task<List<string>> GetPhonesAsync();
    Task DoSomethingAsync();
}