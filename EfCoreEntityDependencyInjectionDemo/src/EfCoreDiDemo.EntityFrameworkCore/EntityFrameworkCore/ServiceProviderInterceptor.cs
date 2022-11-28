using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Volo.Abp.DependencyInjection;

namespace EfCoreDiDemo.EntityFrameworkCore;

public class ServiceProviderInterceptor : IMaterializationInterceptor
{
    public object InitializedInstance(
        MaterializationInterceptionData materializationData, 
        object instance)
    {
        if (instance is IInjectServiceProvider entity)
        {
            entity.ServiceProvider = materializationData
                .Context
                .GetService<ICachedServiceProvider>();
        }

        return instance;
    }
}
