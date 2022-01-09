using BookStore.EntityFrameworkCore;
using Volo.Abp.AspNetCore.Components;
using Volo.Abp.Modularity;

namespace BookStore.Blazor.Tests;

[DependsOn(
    typeof(AbpAspNetCoreComponentsModule),
    typeof(BookStoreEntityFrameworkCoreTestModule)
)]
public class BookStoreBlazorTestModule : AbpModule
{

}
