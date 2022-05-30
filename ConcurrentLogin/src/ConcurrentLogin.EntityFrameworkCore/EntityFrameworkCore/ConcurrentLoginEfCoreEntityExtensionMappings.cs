using System;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Threading;

namespace ConcurrentLogin.EntityFrameworkCore;

public static class ConcurrentLoginEfCoreEntityExtensionMappings
{
    private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

    public static void Configure()
    {
        ConcurrentLoginGlobalFeatureConfigurator.Configure();
        ConcurrentLoginModuleExtensionConfigurator.Configure();

        OneTimeRunner.Run(() =>
        {
            ObjectExtensionManager.Instance
                .MapEfCoreProperty<IdentityUser, string>(
                    ConcurrentLoginConsts.ConcurrentLoginToken,
                    (entityBuilder, propertyBuilder) =>
                    {
                        propertyBuilder.HasMaxLength(128);
                        propertyBuilder.HasDefaultValue(Guid.NewGuid().ToString("N"));
                    }
                );
        });
    }
}
