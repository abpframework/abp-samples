using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using System.Threading.Tasks;

namespace OutputCachingMiddleware.Controllers
{
    [Route("api/[controller]")]
    public class ExampleContoller : OutputCachingMiddlewareController
    {
        //[OutputCache(PolicyName = "Expire30")]
        [OutputCache]
        [HttpGet("example")]
        public async Task<string> Get()
        {
            await Task.Delay(1000);
            return "Hello World";
        }
    }
}
