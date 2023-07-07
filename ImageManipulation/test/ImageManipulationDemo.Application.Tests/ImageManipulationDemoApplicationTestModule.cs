using Volo.Abp.Modularity;

namespace ImageManipulationDemo;

[DependsOn(
    typeof(ImageManipulationDemoApplicationModule),
    typeof(ImageManipulationDemoDomainTestModule)
    )]
public class ImageManipulationDemoApplicationTestModule : AbpModule
{

}
