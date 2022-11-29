using System.Linq;
using System.Threading.Tasks;
using EfCoreJSONColumnDemo.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Shouldly;
using Volo.Abp.Domain.Repositories;
using Xunit;

namespace EfCoreJSONColumnDemo.Persons;

public class Person_Test : EfCoreJSONColumnDemoEntityFrameworkCoreTestBase
{
    private readonly IPersonRepository _personRepository;

    public Person_Test()
    {
        _personRepository = GetRequiredService<IPersonRepository>();
    }

    [Fact]
    public async Task Should_Create_Person()
    {
        var person = await _personRepository.InsertAsync(
            new Person
            {
                Name = "John",
                ContactDetails = new ContactDetails
                {
                    Address = new Address("Street 1", "City 1", "564555", "Country 1"),
                    Phone = "123456789",
                }
            }, true
        );

        person.ShouldNotBeNull();
        person.Id.ShouldNotBe(0);
        person.Name.ShouldBe("John");
        person.ContactDetails.ShouldNotBeNull();
        person.ContactDetails.Address.ShouldNotBeNull();
        person.ContactDetails.Address.Street.ShouldBe("Street 1");
        person.ContactDetails.Address.City.ShouldBe("City 1");
        person.ContactDetails.Address.Postcode.ShouldBe("564555");
        person.ContactDetails.Address.Country.ShouldBe("Country 1");
        person.ContactDetails.Phone.ShouldBe("123456789");
    }

    [Fact]
    public async Task Should_Querying_JSON_Columns()
    {
        var person = await _personRepository.GetAsync(x => x.Name == "Jane");
        person.ShouldNotBeNull();
        
        person = await _personRepository.GetAsync(x =>
            x.ContactDetails.Address.Country == "USA" && x.ContactDetails.Address.City == "New York" &&
            x.ContactDetails.Address.Street == "123 Main Street");
        person.ShouldNotBeNull();
    }

    [Fact]
    public async Task Should_Get_Owned_Properties()
    {
        var contacts = await _personRepository.GetContactDetailsAsync();
        contacts.ShouldNotBeNull();
        contacts.Count.ShouldBe(2);


        var addresses = await _personRepository.GetAddressesAsync();
        addresses.ShouldNotBeNull();
        addresses.Count.ShouldBe(2);

        var address = addresses.FirstOrDefault(x =>
            x.Country == "USA" && x.City == "New York" && x.Street == "123 Main Street");
        address.ShouldNotBeNull();
    }

    [Fact]
    public async Task Should_Update_Person()
    {
        var persons = await _personRepository.GetListAsync();
        var person = await _personRepository.GetAsync(x => x.Name == "John");
        person.Name = "John Doe";
        person.ContactDetails = new ContactDetails
        {
            Address = new Address("Street 2", "City 2", "564555", "Country 2"),
            Phone = "987654321"
        };
        person = await _personRepository.UpdateAsync(person, true);

        person.Name.ShouldBe("John Doe");
        person.ContactDetails.ShouldNotBeNull();
        person.ContactDetails.Address.ShouldNotBeNull();
        person.ContactDetails.Address.Street.ShouldBe("Street 2");
        person.ContactDetails.Address.City.ShouldBe("City 2");
        person.ContactDetails.Address.Postcode.ShouldBe("564555");
        person.ContactDetails.Address.Country.ShouldBe("Country 2");
        person.ContactDetails.Phone.ShouldBe("987654321");
    }
}