using Volo.Abp.Application.Dtos;

namespace Acme.BookStore.AngularMaterial.Authors
{
    public class GetAuthorListDto : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}