using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace MatBlazorSample.Books
{
    public interface IBookAppService : IApplicationService 
    {
        Task<List<BookDto>> GetListAsync();
        
        Task<BookDto> GetAsync(Guid id);

        Task<BookDto> CreateAsync(CreateUpdateBookDto input);

        Task<BookDto> UpdateAsync(Guid id, CreateUpdateBookDto input);
        
        Task DeleteAsync(Guid id);
    }
}