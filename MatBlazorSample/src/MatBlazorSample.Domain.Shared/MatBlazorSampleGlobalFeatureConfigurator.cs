using Volo.Abp.Threading;

namespace MatBlazorSample
{
    public static class MatBlazorSampleGlobalFeatureConfigurator
    {
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

        public static void Configure()
        {
            OneTimeRunner.Run(() =>
            {
                /* You can configure (enable/disable) global features of the used modules here.
                 *
                 * YOU CAN SAFELY DELETE THIS CLASS AND REMOVE ITS USAGES IF YOU DON'T NEED TO IT!
                 *
                 * Please refer to the documentation to lear more about the Global Features System:
                 * https://abp.io/docs/latest/Global-Features
                 */
            });
        }
    }
}
