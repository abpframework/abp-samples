using System;
using System.Collections.Generic;
using DevExpress.DataAccess.ConnectionParameters;
using DevExpress.DataAccess.Json;
using DevExpress.DataAccess.Sql;
using DevExpress.XtraReports.UI;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Acme.BookStore.Web.Pages.Reporting;

public class Designer : PageModel
{
    public ReportDesignerModel DesignerModel { get; set; }

    public void OnGet()
    {
        // Create a SQL data source.
        // MsSqlConnectionParameters parameters = new MsSqlConnectionParameters("localhost",
        //     "dbName", "userName", "password", MsSqlAuthorizationType.SqlServer);
        // SqlDataSource dataSource = new SqlDataSource(parameters);
        // SelectQuery query = SelectQueryFluentBuilder.AddTable("Products").SelectAllColumnsFromTable().Build("Products");
        // dataSource.Queries.Add(query);
        // dataSource.RebuildResultSchema();
        
        // Create a JSON data source.
        JsonDataSource jsonDataSource = new JsonDataSource();
        jsonDataSource.JsonSource = new UriJsonSource(new Uri("https://raw.githubusercontent.com/DevExpress-Examples/DataSources/master/JSON/customers.json"));
        jsonDataSource.Fill();


        DesignerModel = new ReportDesignerModel
        {
            Report = new XtraReport(),
            DataSources = new Dictionary<string, object>()
        };
        // DesignerModel.DataSources.Add("BookStoreDb", dataSource);
        DesignerModel.DataSources.Add("JsonDataSource", jsonDataSource);
    }

    public class ReportDesignerModel
    {
        public XtraReport Report { get; set; }
        public Dictionary<string, object> DataSources { get; set; }
    }
}