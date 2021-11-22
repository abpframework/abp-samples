using Volo.Abp.Application.Dtos;

namespace Acme.BookStore.BookManagement.Authors
{
    public class GetAuthorListDto : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}