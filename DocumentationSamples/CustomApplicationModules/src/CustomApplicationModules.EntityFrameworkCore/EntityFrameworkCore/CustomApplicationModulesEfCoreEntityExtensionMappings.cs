using Volo.Abp.Identity;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Threading;

namespace CustomApplicationModules.EntityFrameworkCore
{
    public static class CustomApplicationModulesEfCoreEntityExtensionMappings
    {
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

        public static void Configure()
        {
            OneTimeRunner.Run(() =>
            {
                /* You can configure entity extension properties for the
                 * entities defined in the used modules.
                 *
                 * The properties defined here becomes table fields.
                 * If you want to use the ExtraProperties dictionary of the entity
                 * instead of creating a new field, then define the property in the
                 * CustomApplicationModulesDomainObjectExtensions class.
                 *
                 * Example:
                 *
                 * ObjectExtensionManager.Instance
                 *    .MapEfCoreProperty<IdentityUser, string>(
                 *        "MyProperty",
                 *        b => b.HasMaxLength(128)
                 *    );
                 *
                 * See the documentation for more:
                 * https://abp.io/docs/latest/Customizing-Application-Modules-Extending-Entities
                 */

                ObjectExtensionManager.Instance
                    .MapEfCoreProperty<IdentityUser, string>(
                        "SecretNumber",
                        b => { b.HasMaxLength(32); }
                    );

                //Ignore this definition check for a desired property
                ObjectExtensionManager.Instance
                    .AddOrUpdateProperty<IdentityUser, string>(
                        "SocialSecurityNumber",
                        options =>
                        {
                            options.MapEfCore(b => b.HasMaxLength(32));
                            options.CheckPairDefinitionOnMapping = false;
                        }
                    );
            });
        }
    }
}
