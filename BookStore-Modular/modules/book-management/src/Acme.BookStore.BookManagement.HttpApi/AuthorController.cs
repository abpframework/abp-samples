using System;
using System.Threading.Tasks;
using Acme.BookStore.BookManagement.Authors;
using Acme.BookStore.BookManagement.Controllers;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace Acme.BookStore.BookManagement
{
    [RemoteService(Name = "Authors")]
    [Route("api/BookManagement/author")]
    public class AuthorController : BookManagementController, IAuthorAppService
    {
        private readonly IAuthorAppService _authorAppService;

        public AuthorController(IAuthorAppService authorAppService)
        {
            _authorAppService = authorAppService;
        }
        
        [HttpGet]
        [Route("{id}")]
        public Task<AuthorDto> GetAsync(Guid id)
        {
            return _authorAppService.GetAsync(id);
        }

        [HttpGet]
        public Task<PagedResultDto<AuthorDto>> GetListAsync(GetAuthorListDto input)
        {
            return _authorAppService.GetListAsync(input);
        }

        [HttpPost]
        public Task<AuthorDto> CreateAsync(CreateAuthorDto input)
        {
            return _authorAppService.CreateAsync(input);
        }

        [HttpPut]
        [Route("{id}")]
        public Task UpdateAsync(Guid id, UpdateAuthorDto input)
        {
            return _authorAppService.UpdateAsync(id, input);
        }

        [HttpDelete]
        [Route("{id}")]
        public Task DeleteAsync(Guid id)
        {
            return _authorAppService.DeleteAsync(id);
        }
    }
}