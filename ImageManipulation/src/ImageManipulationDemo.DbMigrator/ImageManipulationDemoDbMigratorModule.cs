using ImageManipulationDemo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace ImageManipulationDemo.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(ImageManipulationDemoEntityFrameworkCoreModule),
    typeof(ImageManipulationDemoApplicationContractsModule)
    )]
public class ImageManipulationDemoDbMigratorModule : AbpModule
{
}
