using Acme.BookStore.Books;
using Blazorise;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp;

namespace Acme.BookStore.Blazor.Pages;

public partial class CreateBook
{
    protected Validations CreateValidationsRef;
    protected CreateUpdateBookDto NewEntity = new();
    IReadOnlyList<AuthorLookupDto> authorList = Array.Empty<AuthorLookupDto>();

    protected override async Task OnInitializedAsync()
    {
        await base.OnInitializedAsync();
        authorList = (await AppService.GetAuthorLookupAsync()).Items;

        if (!authorList.Any())
        {
            throw new UserFriendlyException(message: L["AnAuthorIsRequiredForCreatingBook"]);
        }

        NewEntity.AuthorId = authorList.First().Id;

        if (CreateValidationsRef != null)
        {
            await CreateValidationsRef.ClearAll();
        }
    }

    protected virtual async Task CreateEntityAsync()
    {
        try
        {
            var validate = true;
            if (CreateValidationsRef != null)
            {
                validate = await CreateValidationsRef.ValidateAll();
            }
            if (validate)
            {
                await AppService.CreateAsync(NewEntity);
                NavigationManager.NavigateTo("books");
            }
        }
        catch (Exception ex)
        {
            await HandleErrorAsync(ex);
        }
    }
}
