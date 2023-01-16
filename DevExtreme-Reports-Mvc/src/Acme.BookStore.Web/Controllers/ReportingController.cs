using DevExpress.AspNetCore.Reporting.QueryBuilder;
using DevExpress.AspNetCore.Reporting.QueryBuilder.Native.Services;
using DevExpress.AspNetCore.Reporting.ReportDesigner;
using DevExpress.AspNetCore.Reporting.ReportDesigner.Native.Services;
using DevExpress.AspNetCore.Reporting.WebDocumentViewer;
using DevExpress.AspNetCore.Reporting.WebDocumentViewer.Native.Services;

namespace Acme.BookStore.Web.Controllers;

public class CustomWebDocumentViewerController : WebDocumentViewerController
{
    public CustomWebDocumentViewerController(IWebDocumentViewerMvcControllerService controllerService)
        : base(controllerService)
    {
    }
}

public class CustomReportDesignerController : ReportDesignerController
{
    public CustomReportDesignerController(IReportDesignerMvcControllerService controllerService)
        : base(controllerService)
    {
    }
}

public class CustomQueryBuilderController : QueryBuilderController
{
    public CustomQueryBuilderController(IQueryBuilderMvcControllerService controllerService)
        : base(controllerService)
    {
    }
}
