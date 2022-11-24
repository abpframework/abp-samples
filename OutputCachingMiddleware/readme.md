#Output Caching Middleware 
Output caching is a new middleware that comes with .net 7. It stores `HTTP` responses instead of calling every request. In this post, we will demonstrate its capability, how to use it with ABP-based solutions and compare it with its alternatives.

Let's create an ABP app(default) solution template and show some implementation
> abp new OutputCachingMiddleware -t app

Firstly let's make the caching configuration on the module file
```csharp
public class OutputCachingMiddlewareWebModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        //The other configurations
        context.Services.AddOutputCache();
        //The other configurations
    }

    public override void OnApplicationInitialization(ApplicationInitializationContext context)
    {
        var app = context.GetApplicationBuilder();

        //The other configurations
        app.UseOutputCache();
        //The other configurations
    }
}
```

> Note: `UseOutputCache` must be called after `UseCors` and `UseRouting` and before `UseEndpoints` 

Now, we can create a controller under `OutputCachingMiddleware.HttpApi` named `OutputCachingContoller`
```csharp
[Route("api/[controller]")]
public class OutputCachingContoller : OutputCachingMiddlewareController
{
    [OutputCache(Duration = 10)]
    [HttpGet("default")]
    public async Task<string> Default()
    {
        await Task.Delay(1000);
        return DateTime.UtcNow.ToString();
    }
}
```

![default ](./images/default.gif)

>Note: After .net6 you can see the above code in minimal API but it's used with as the above for apps with controllers.

## Specify the cache key
You can store by default as doing the above, but also you can store according to sending parameters. `VaryByQueryKeys` provides this feature to use as an attribute. Also, there are `VaryByHeaderNames` and `VaryByRouteValueNames`

Let's continue under the same controller and create a new action to demonstrate it.
```csharp
[OutputCache(Duration = 30, VaryByQueryKeys = new[] { "letter" })]
[HttpGet("changecolon")]
public async Task<string> ChangeColon(string letter)
{
    await Task.Delay(1000);
    return DateTime.UtcNow.ToString().Replace(":", letter);
}
```
![var by query keys](./images/change%20colon.gif)

## Disable cache
To disable changing, you may not write the attribute, however, if you use `[Output]` for the whole controller that's why you must use this way. 

Let's see on the code
```csharp
[OutputCache] //enables the whole controller
public class OutputCachingContoller : OutputCachingMiddlewareController
{
    [OutputCache(NoStore = true)]//disable just this action
    [HttpGet("nostore")]
    public async Task<string> NoStore()
    {
        await Task.Delay(1000);
        return DateTime.UtcNow.ToString();
    }
}
```
![no store](./images/nostore.gif)

## Some default policies
* HTTP 200 responses (the successful responses) are cached and the others aren't.
* HTTP GET or HEAD requests are cached the other HTTP methods aren't.
* Responses that set cookies aren't cached.
* Responses to authenticated requests aren't cached.

Even so these policies you can override the below.
```csharp
public override void ConfigureServices(ServiceConfigurationContext context)
{
    builder.Services.AddOutputCache(options =>
    {
        options.AddBasePolicy(builder => builder.Cache());
    });

    context.Services.AddOutputCache(); // or you can make default 
}
```

## The Differences between response caching
It's differs from [response caching](https://learn.microsoft.com/en-us/aspnet/core/performance/caching/overview?view=aspnetcore-7.0#response-caching) with the following features

* The output cache behaviour is configurable on the server, the response cache uses the browsers' cache.
* The output cache entries can be programmatically invalidated, the response cache doesn't support that.
* The output cache gets just the successful responses but the response cache stores even if the response is bad.
* The output cache storage medium is extensible.