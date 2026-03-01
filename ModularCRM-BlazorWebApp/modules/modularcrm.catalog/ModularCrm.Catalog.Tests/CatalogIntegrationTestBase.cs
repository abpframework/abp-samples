using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Shouldly;
using Volo.Abp.AspNetCore.TestBase;
using Volo.Abp.Uow;

namespace ModularCrm.Catalog.Tests;

/* Inherit your integration test classes from this class */
public abstract class CatalogIntegrationTestBase : AbpWebApplicationFactoryIntegratedTest<TestProgram>
{
    protected virtual async Task<T> GetResponseAsObjectAsync<T>(
        string url,
        HttpStatusCode expectedStatusCode = HttpStatusCode.OK)
    {
        var strResponse = await GetResponseAsStringAsync(url, expectedStatusCode);
        return JsonSerializer.Deserialize<T>(strResponse, new JsonSerializerOptions(JsonSerializerDefaults.Web))!;
    }

    protected virtual async Task<string> GetResponseAsStringAsync(
        string url,
        HttpStatusCode expectedStatusCode = HttpStatusCode.OK)
    {
        var response = await GetResponseAsync(url, expectedStatusCode);
        return await response.Content.ReadAsStringAsync();
    }

    protected virtual async Task<HttpResponseMessage> GetResponseAsync(
        string url,
        HttpStatusCode expectedStatusCode = HttpStatusCode.OK)
    {
        var response = await Client.GetAsync(url);
        response.StatusCode.ShouldBe(expectedStatusCode);
        return response;
    }
    
    protected virtual Task WithUnitOfWorkAsync(Func<Task> func)
    {
        return WithUnitOfWorkAsync(new AbpUnitOfWorkOptions(), func);
    }

    protected virtual async Task WithUnitOfWorkAsync(AbpUnitOfWorkOptions options, Func<Task> action)
    {
        using (var scope = ServiceProvider.CreateScope())
        {
            var uowManager = scope.ServiceProvider.GetRequiredService<IUnitOfWorkManager>();

            using (var uow = uowManager.Begin(options))
            {
                await action();
                await uow.CompleteAsync();
            }
        }
    }

    protected virtual Task<TResult> WithUnitOfWorkAsync<TResult>(Func<Task<TResult>> func)
    {
        return WithUnitOfWorkAsync(new AbpUnitOfWorkOptions(), func);
    }

    protected virtual async Task<TResult> WithUnitOfWorkAsync<TResult>(AbpUnitOfWorkOptions options, Func<Task<TResult>> func)
    {
        using (var scope = ServiceProvider.CreateScope())
        {
            var uowManager = scope.ServiceProvider.GetRequiredService<IUnitOfWorkManager>();

            using (var uow = uowManager.Begin(options))
            {
                var result = await func();
                await uow.CompleteAsync();
                return result;
            }
        }
    }
    
    private static string GetContentRootFolder()
    {
        var assemblyDirectoryPath = Path.GetDirectoryName(typeof(CatalogModule).Assembly.Location);
        if (assemblyDirectoryPath == null)
        {
            throw new Exception($"Could not find location of {typeof(CatalogModule).Assembly.FullName} assembly!");
        }

        return assemblyDirectoryPath;
    }
}
