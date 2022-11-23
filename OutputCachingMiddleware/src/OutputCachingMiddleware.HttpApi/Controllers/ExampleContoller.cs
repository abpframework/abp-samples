using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using System;

namespace OutputCachingMiddleware.Controllers
{
    [Route("api/[controller]")]
    public class ExampleContoller : OutputCachingMiddlewareController
    {
        //[OutputCache(PolicyName = "Expire30")]
        [OutputCache(Duration = 10)]
        [HttpGet("example")]
        public string Get()
        {
            return DateTime.Now.ToString();
        }
    }
}
