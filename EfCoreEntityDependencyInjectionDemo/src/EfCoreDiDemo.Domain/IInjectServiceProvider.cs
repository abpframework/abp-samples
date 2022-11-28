using Volo.Abp.DependencyInjection;

namespace EfCoreDiDemo;

public interface IInjectServiceProvider
{
     ICachedServiceProvider ServiceProvider { get; set; }
}