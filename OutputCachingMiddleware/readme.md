#Output Caching Middleware 
Output caching is a new middleware comes with .net 7. It stores `HTTP` responses intead of calling every request. It's differs from [response caching](https://learn.microsoft.com/en-us/aspnet/core/performance/caching/overview?view=aspnetcore-7.0#response-caching) with the following features: configurable on the server, can be invalidated, storage is extensible. In this post, we will demonstrate its capability, how to use with ABP-based solution and compare with its alternatives.

Let's create ABP app(default) solution template and show some implementation
> abp new OutputCachingMiddleware -t app

