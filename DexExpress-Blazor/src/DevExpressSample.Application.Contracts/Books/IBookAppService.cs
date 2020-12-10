using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace DevExpressSample.Books
{
    public interface IBookAppService : IApplicationService 
    {
        Task<List<BookDto>> GetListAsync();
        
        Task<BookDto> GetAsync(Guid id);

        Task<BookDto> CreateAsync(CreateUpdateBook input);

        Task<BookDto> UpdateAsync(Guid id, CreateUpdateBook input);
        
        Task DeleteAsync(Guid id);
    }
}