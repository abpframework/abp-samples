using Acme.BookStore.Books;
using Blazorise;
using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp;

namespace Acme.BookStore.Blazor.Pages;

public partial class EditBook
{
    protected CreateUpdateBookDto EditingEntity = new();
    protected Validations EditValidationsRef;
    IReadOnlyList<AuthorLookupDto> authorList = Array.Empty<AuthorLookupDto>();

    [Parameter]
    public string Id { get; set; }

    public Guid EditingEntityId { get; set; }

    protected override async Task OnInitializedAsync()
    {
        await base.OnInitializedAsync();

        // Blazor can't parse Guid as route constraint currently.
        // See https://github.com/dotnet/aspnetcore/issues/19008
        EditingEntityId = Guid.Parse(Id);

        authorList = (await AppService.GetAuthorLookupAsync()).Items;

        if (!authorList.Any())
        {
            throw new UserFriendlyException(message: L["AnAuthorIsRequiredForCreatingBook"]);
        }

        var entityDto = await AppService.GetAsync(EditingEntityId);

        EditingEntity = ObjectMapper.Map<BookDto,CreateUpdateBookDto>(entityDto);

        if (EditValidationsRef != null)
        {
            await EditValidationsRef.ClearAll();
        }
    }

    protected virtual async Task UpdateEntityAsync()
    {
        try
        {
            var validate = true;
            if (EditValidationsRef != null)
            {
                validate = await EditValidationsRef.ValidateAll();
            }
            if (validate)
            {
                await AppService.UpdateAsync(EditingEntityId, EditingEntity);

                NavigationManager.NavigateTo("books");
            }
        }
        catch (Exception ex)
        {
            await HandleErrorAsync(ex);
        }
    }
}
