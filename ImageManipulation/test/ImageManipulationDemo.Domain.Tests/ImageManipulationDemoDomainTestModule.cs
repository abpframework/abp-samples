using ImageManipulationDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace ImageManipulationDemo;

[DependsOn(
    typeof(ImageManipulationDemoEntityFrameworkCoreTestModule)
    )]
public class ImageManipulationDemoDomainTestModule : AbpModule
{

}
