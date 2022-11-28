using System.Threading.Tasks;
using EfCoreJSONColumnDemo.Persons;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace EfCoreJSONColumnDemo;

public class EfCoreJSONColumnDemoTestDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    private readonly IPersonRepository _personRepository;
    
    public EfCoreJSONColumnDemoTestDataSeedContributor(IPersonRepository personRepository)
    {
        _personRepository = personRepository;
    }
    public async Task SeedAsync(DataSeedContext context)
    {
        await _personRepository.InsertAsync(new Person
        {
            Name = "John",
            ContactDetails = new ContactDetails
            {
                Address = new Address("123 Main Street", "New York", "10001", "USA"),
                Phone = "555-555-5555"
            }
        });
        
        await _personRepository.InsertAsync(new Person
        {
            Name = "Jane",
            ContactDetails = new ContactDetails
            {
                Address = new Address("678 Elm Street", "Los Angeles", "90001", "USA"),
                Phone = "444-444-4444"
            }
        });
        
    }
}
