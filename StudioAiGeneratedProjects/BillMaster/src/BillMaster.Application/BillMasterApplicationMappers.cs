using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;
using BillMaster.Books;

namespace BillMaster;

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class BillMasterBookToBookDtoMapper : MapperBase<Book, BookDto>
{
    public override partial BookDto Map(Book source);

    public override partial void Map(Book source, BookDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class BillMasterCreateUpdateBookDtoToBookMapper : MapperBase<CreateUpdateBookDto, Book>
{
    public override partial Book Map(CreateUpdateBookDto source);

    public override partial void Map(CreateUpdateBookDto source, Book destination);
}
