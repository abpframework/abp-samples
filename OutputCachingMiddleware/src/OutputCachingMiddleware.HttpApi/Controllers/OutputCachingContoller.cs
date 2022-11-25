using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using System;
using System.Threading.Tasks;

namespace OutputCachingMiddleware.Controllers
{
    [Route("api/[controller]")]
    [OutputCache] //enable for the whole controller
    public class OutputCachingContoller : OutputCachingMiddlewareController
    {
        [OutputCache(Duration = 10)]
        [HttpGet("default")]
        public async Task<string> Default()
        {
            await Task.Delay(1000);
            return DateTime.UtcNow.ToString();
        }

        [OutputCache(Duration = 30, VaryByQueryKeys = new[] { "letter" })]
        [HttpGet("changecolon")]
        public async Task<string> ChangeColon(string letter)
        {
            await Task.Delay(1000);
            return DateTime.UtcNow.ToString().Replace(":", letter);
        }

        [OutputCache(NoStore = true)]
        [HttpGet("nostore")]
        public async Task<string> NoStore()
        {
            await Task.Delay(1000);
            return DateTime.UtcNow.ToString();
        }
    }
}
