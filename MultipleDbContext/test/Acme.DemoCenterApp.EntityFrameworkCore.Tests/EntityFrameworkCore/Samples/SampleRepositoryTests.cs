using System;
using System.Linq;
using System.Threading.Tasks;
using Acme.DemoCenterApp.Customers;
using Acme.ModuleA.Contacts;
using Microsoft.EntityFrameworkCore;
using Shouldly;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;
using Xunit;

namespace Acme.DemoCenterApp.EntityFrameworkCore.Samples;

/* This is just an example test class.
 * Normally, you don't test ABP framework code
 * Only test your custom repository methods.
 */
[Collection(DemoCenterAppTestConsts.CollectionDefinitionName)]
public class SampleRepositoryTests : DemoCenterAppEntityFrameworkCoreTestBase
{
    private readonly ICustomerRepository _customerRepository;
    private readonly IContactRepository _contactRepository;

    public SampleRepositoryTests()
    {
        _customerRepository = GetRequiredService<ICustomerRepository>();
        _contactRepository = GetRequiredService<IContactRepository>();
    }

    [Fact]
    public async Task Should_Join_Different_DbContexts()
    {
        await WithUnitOfWorkAsync(async ()=>
        {
            //Sample seed
            for (var i = 1; i <= 5; i++)
            {
                await _customerRepository.InsertAsync(new Customer($"Code-{i}"));
                await _contactRepository.InsertAsync(new Contact($"Code-{i}"));
            }
        });

        await WithUnitOfWorkAsync(async () =>
        {
            var customerQueryable = await _customerRepository.GetQueryableAsync();
            var contactQueryable = await _contactRepository.GetQueryableAsync();

            var query = from customer in customerQueryable
                join contact in contactQueryable on customer.Code equals contact.Code into contacts
                from contact in contacts.DefaultIfEmpty()
                select contact;

            var result = await query.FirstOrDefaultAsync();
        });
    }
}
