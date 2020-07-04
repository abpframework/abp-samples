using Microsoft.AspNetCore.Mvc;
using Acme.BookStore.Models.Test;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace Acme.BookStore.Controllers
{
    [Route("api/test")]
    public class TestController : BookStoreController
    {
        private readonly IBookAppService _bookAppService;

        public TestController(IBookAppService bookAppService)
        {
            _bookAppService = bookAppService;
        }

        [HttpGet]
        [Route("")]
        public async Task<List<TestModel>> GetAsync()
        {
            return new List<TestModel>
            {
                new TestModel {Name = "John", BirthDate = new DateTime(1942, 11, 18)},
                new TestModel {Name = "Adams", BirthDate = new DateTime(1997, 05, 24)}
            };
        }

        [HttpGet]
        [Route("books")]
        public async Task<PagedResultDto<BookDto>> GetBooksAsync()
        {
            return await _bookAppService.GetListAsync(new PagedAndSortedResultRequestDto());
        }
    }
}
