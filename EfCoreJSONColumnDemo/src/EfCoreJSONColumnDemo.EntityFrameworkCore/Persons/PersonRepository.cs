using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EfCoreJSONColumnDemo.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace EfCoreJSONColumnDemo.Persons;

public class PersonRepository : EfCoreRepository<EfCoreJSONColumnDemoDbContext,Person,int> , IPersonRepository
{
    public PersonRepository(IDbContextProvider<EfCoreJSONColumnDemoDbContext> dbContextProvider) : base(dbContextProvider)
    {
    }

    public async Task<Address> GetAddressAsync(int id)
    {
        return await (await GetDbContextAsync()).Persons
            .Where(x => x.Id == id)
            .AsNoTracking()
            .Select(x => x.ContactDetails.Address)
            .FirstOrDefaultAsync();
    }

    public async Task<List<Address>> GetAddressesAsync()
    {
        return await (await GetDbContextAsync()).Persons
            .AsNoTracking()
            .Select(x => x.ContactDetails.Address)
            .ToListAsync();
    }

    public async Task<ContactDetails> GetContactDetailsAsync(int id)
    {
        return await (await GetDbContextAsync()).Persons
            .Where(x => x.Id == id)
            .AsNoTracking()
            .Select(x => x.ContactDetails)
            .FirstOrDefaultAsync();
    }

    public async Task<List<ContactDetails>> GetContactDetailsAsync()
    {
        return await (await GetDbContextAsync()).Persons
            .AsNoTracking()
            .Select(x => x.ContactDetails)
            .ToListAsync();
    }

    public async Task<string> GetPhoneAsync(int id)
    {
        return await (await GetDbContextAsync()).Persons
            .Where(x => x.Id == id)
            .AsNoTracking()
            .Select(x => x.ContactDetails.Phone)
            .FirstOrDefaultAsync();
    }

    public async Task<List<string>> GetPhonesAsync()
    {
        return await (await GetDbContextAsync()).Persons
            .AsNoTracking()
            .Select(x => x.ContactDetails.Phone)
            .ToListAsync();
    }
    
    public async Task DoSomethingAsync()
    {
        Person person;
        if (await GetCountAsync() == 0)
        {
            person = new Person
            {
                Name = "John",
                ContactDetails = new ContactDetails
                {
                    Phone = "123456789",
                    Address = new Address( "Street", "City", "PostCode", "Country")
                }
            };
            await InsertAsync(person, true);
        }
        person = await (await GetDbContextAsync()).Persons.FirstOrDefaultAsync();
        person.ContactDetails.Phone = "987654321";
        
        await (await GetDbContextAsync()).SaveChangesAsync();
        
        // or
        
        person.ContactDetails.Address = new Address("Street2", "City2", "PostCode2", "Country2");
        await UpdateAsync(person, true);
        
    }
}