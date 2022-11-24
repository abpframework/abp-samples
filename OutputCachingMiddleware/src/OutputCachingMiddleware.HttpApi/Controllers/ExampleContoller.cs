using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using System;
using System.Threading.Tasks;

namespace OutputCachingMiddleware.Controllers
{
    [Route("api/[controller]")]
    public class ExampleContoller : OutputCachingMiddlewareController
    {
        [OutputCache(Duration = 5)]
        [HttpGet("example")]
        public async Task<string> Get()
        {
            await Task.Delay(1000);
            return DateTime.UtcNow.ToString();
        }
    }
}
