using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;
using RecipeOrganizer.Books;

namespace RecipeOrganizer.Blazor;

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class RecipeOrganizerBlazorMappers : MapperBase<BookDto, CreateUpdateBookDto>
{
    public override partial CreateUpdateBookDto Map(BookDto source);

    public override partial void Map(BookDto source, CreateUpdateBookDto destination);
}

