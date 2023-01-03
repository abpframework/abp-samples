using Volo.Abp.Features;
using Volo.Abp.Localization;
using Volo.Abp.Validation.StringValues;

namespace Acme.BookStore;

public class BookStoreFeatureDefinitionProvider : FeatureDefinitionProvider
{
    public override void Define(IFeatureDefinitionContext context)
    {
        var bookStoreGroup = context.AddGroup("BookStore");

        bookStoreGroup.AddFeature(
            "BookStore.StockManagement",
            defaultValue: "false",
            valueType: new ToggleStringValueType());
    }
}