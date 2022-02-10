using System.Threading.Tasks;
using Volo.Abp.ApiVersioning;
using Volo.Abp.Domain.Entities;

namespace BookStore.Books;

public class BookAppService : BookStoreAppService, IBookAppService
{
    public Task<BookDto> GetAsync()
    {
        return Task.FromResult(
            new BookDto
            {
                Title = "Mastering ABP Framework",
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
                Title = "Mastering ABP Framework V2",
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
                    Title = "Mastering ABP Framework V2",
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
                Title = "Mastering ABP Framework V2",
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
                    Title = "Mastering ABP Framework V2",
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
    private readonly IRequestedApiVersion _requestedApiVersion;

    public BookV4AppService(IRequestedApiVersion requestedApiVersion)
    {
        _requestedApiVersion = requestedApiVersion;
    }

    public Task<BookDto> GetAsync()
    {
        return Task.FromResult(
            new BookDto
            {
                Title = $"Mastering ABP Framework V{_requestedApiVersion.Current}",
                ISBN = "978-1-80107-924-2"
            }
        );
    }
}

public class BookV8AppService : BookStoreAppService, IBookV8AppService
{
    private readonly IRequestedApiVersion _requestedApiVersion;

    public BookV8AppService(IRequestedApiVersion requestedApiVersion)
    {
        _requestedApiVersion = requestedApiVersion;
    }

    public Task<BookDto> GetAsync()
    {
        return Task.FromResult(
            new BookDto
            {
                Title = $"Mastering ABP Framework V8",
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
                    Title = $"Mastering ABP Framework V8 Updated",
                    ISBN = "978-1-80107-924-2"
                }
            );
        }

        throw new EntityNotFoundException();
    }
}
