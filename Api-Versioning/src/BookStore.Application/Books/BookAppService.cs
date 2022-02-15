using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;

namespace BookStore.Books;

public class BookAppService : BookStoreAppService, IBookAppService
{
    public Task<BookDto> GetAsync()
    {
        return Task.FromResult(
            new BookDto
            {
                Title = $"Mastering ABP Framework V{RequestedApiVersion.Current}",
                ISBN = "978-1-80107-924-2"
            }
        );
    }
}

public class BookV2AppService : BookStoreAppService, IBookV2AppService
{
    public Task<BookDto> GetAsync()
    {
        return Task.FromResult(
            new BookDto
            {
                Title = $"Mastering ABP Framework V{RequestedApiVersion.Current}",
                ISBN = "978-1-80107-924-2"
            }
        );
    }

    public Task<BookDto> GetAsync(string isbn)
    {
        if (isbn == "978-1-80107-924-2")
        {
            return Task.FromResult(
                new BookDto
                {
                    Title = $"Mastering ABP Framework V{RequestedApiVersion.Current}",
                    ISBN = "978-1-80107-924-2"
                }
            );
        }

        throw new EntityNotFoundException();
    }
}

public class BookV3AppService : BookStoreAppService, IBookV3AppService
{
    public Task<BookDto> GetAsync()
    {
        return Task.FromResult(
            new BookDto
            {
                Title = $"Mastering ABP Framework V{RequestedApiVersion.Current}",
                ISBN = "978-1-80107-924-2"
            }
        );
    }

    public Task<BookDto> GetAsync(string isbn)
    {
        if (isbn == "978-1-80107-924-2")
        {
            return Task.FromResult(
                new BookDto
                {
                    Title = $"Mastering ABP Framework V{RequestedApiVersion.Current}",
                    ISBN = "978-1-80107-924-2"
                }
            );
        }

        throw new EntityNotFoundException();
    }

    public Task DeleteAsync(string title)
    {
        if (title == "Mastering ABP Framework V3")
        {
            return Task.CompletedTask;
        }

        throw new EntityNotFoundException();
    }
}


public class BookV4AppService : BookStoreAppService, IBookV4AppService
{
    public Task<BookDto> GetAsync()
    {
        return Task.FromResult(
            new BookDto
            {
                Title = $"Mastering ABP Framework V{RequestedApiVersion.Current}",
                ISBN = "978-1-80107-924-2"
            }
        );
    }
}

public class BookV5AppService : BookStoreAppService, IBookV5AppService
{
    public Task<BookDto> GetAsync()
    {
        return Task.FromResult(
            new BookDto
            {
                Title = $"Mastering ABP Framework V{RequestedApiVersion.Current}",
                ISBN = "978-1-80107-924-2"
            }
        );
    }

    public Task<BookDto> UpdateAsync(string isbn)
    {
        if (isbn == "978-1-80107-924-2")
        {
            return Task.FromResult(
                new BookDto
                {
                    Title = $"Mastering ABP Framework V{RequestedApiVersion.Current} Updated",
                    ISBN = "978-1-80107-924-2"
                }
            );
        }

        throw new EntityNotFoundException();
    }
}
