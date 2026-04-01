using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;
using BillMaster.Books;

namespace BillMaster.Blazor;

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class BillMasterBlazorMappers : MapperBase<BookDto, CreateUpdateBookDto>
{
    public override partial CreateUpdateBookDto Map(BookDto source);

    public override partial void Map(BookDto source, CreateUpdateBookDto destination);
}

