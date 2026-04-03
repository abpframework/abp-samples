using BillMaster.Books;
using Xunit;

namespace BillMaster.EntityFrameworkCore.Applications.Books;

[Collection(BillMasterTestConsts.CollectionDefinitionName)]
public class EfCoreBookAppService_Tests : BookAppService_Tests<BillMasterEntityFrameworkCoreTestModule>
{

}