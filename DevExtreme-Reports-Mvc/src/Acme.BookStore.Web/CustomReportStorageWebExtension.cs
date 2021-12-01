using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using DevExpress.XtraReports.UI;
using Microsoft.AspNetCore.Hosting;

namespace Acme.BookStore.Web;

public class CustomReportStorageWebExtension : DevExpress.XtraReports.Web.Extensions.ReportStorageWebExtension
{
    readonly string ReportDirectory;
    const string FileExtension = ".repx";

    public CustomReportStorageWebExtension(IWebHostEnvironment env)
    {
        ReportDirectory = Path.Combine(env.ContentRootPath, "Reports");
        if (!Directory.Exists(ReportDirectory))
        {
            Directory.CreateDirectory(ReportDirectory);
        }
    }

    public override bool CanSetData(string url)
    {
        // Determines whether or not it is possible to store a report by a given URL. 
        // For instance, make the CanSetData method return false for reports that should be read-only in your storage. 
        // This method is called only for valid URLs (i.e., if the IsValidUrl method returned true) before the SetData method is called.

        return true;
    }

    public override bool IsValidUrl(string url)
    {
        // Determines whether or not the URL passed to the current Report Storage is valid. 
        // For instance, implement your own logic to prohibit URLs that contain white spaces or some other special characters. 
        // This method is called before the CanSetData and GetData methods.

        return true;
    }

    public override byte[] GetData(string url)
    {
        // Returns report layout data stored in a Report Storage using the specified URL. 
        // This method is called only for valid URLs after the IsValidUrl method is called.
        try
        {
            if (Directory.EnumerateFiles(ReportDirectory).Select(Path.GetFileNameWithoutExtension).Contains(url))
            {
                return File.ReadAllBytes(Path.Combine(ReportDirectory, url + FileExtension));
            }

            if (ReportsFactory.Reports.ContainsKey(url))
            {
                using (MemoryStream ms = new MemoryStream())
                {
                    ReportsFactory.Reports[url]().SaveLayoutToXml(ms);
                    return ms.ToArray();
                }
            }

            throw new DevExpress.XtraReports.Web.ClientControls.FaultException(
                string.Format("Could not find report '{0}'.", url));
        }
        catch (Exception)
        {
            throw new DevExpress.XtraReports.Web.ClientControls.FaultException(
                string.Format("Could not find report '{0}'.", url));
        }
    }

    public override Dictionary<string, string> GetUrls()
    {
        // Returns a dictionary of the existing report URLs and display names. 
        // This method is called when running the Report Designer, 
        // before the Open Report and Save Report dialogs are shown and after a new report is saved to a storage.

        return Directory.GetFiles(ReportDirectory, "*" + FileExtension)
            .Select(Path.GetFileNameWithoutExtension)
            .Concat(ReportsFactory.Reports.Select(x => x.Key))
            .ToDictionary<string, string>(x => x);
    }

    public override void SetData(XtraReport report, string url)
    {
        // Stores the specified report to a Report Storage using the specified URL. 
        // This method is called only after the IsValidUrl and CanSetData methods are called.
        report.SaveLayoutToXml(Path.Combine(ReportDirectory, url + FileExtension));
    }

    public override string SetNewData(XtraReport report, string defaultUrl)
    {
        // Stores the specified report using a new URL. 
        // The IsValidUrl and CanSetData methods are never called before this method. 
        // You can validate and correct the specified URL directly in the SetNewData method implementation 
        // and return the resulting URL used to save a report in your storage.
        SetData(report, defaultUrl);
        return defaultUrl;
    }
}

public class ReportsFactory
{
    public static Dictionary<string, Func<XtraReport>> Reports { get; set; }
}