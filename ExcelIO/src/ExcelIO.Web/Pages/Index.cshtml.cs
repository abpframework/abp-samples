using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using ClosedXML.Excel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Identity;

namespace ExcelIO.Web.Pages
{
    public class IndexModel : ExcelIOPageModel
    {
        private readonly IIdentityUserAppService _identityUserAppService;

        public IndexModel(IIdentityUserAppService identityUserAppService)
        {
            _identityUserAppService = identityUserAppService;
        }

        public async Task<IActionResult> OnPostExportAsync()
        {
            var users = await _identityUserAppService.GetListAsync(new GetIdentityUsersInput()
            {
                MaxResultCount = 100
            });

            var memoryStream = new MemoryStream();

            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("Users Sheet");

                worksheet.Column(1).Width = 30;
                worksheet.Column(2).Width = 30;
                worksheet.Column(3).Width = 30;

                var username = worksheet.Cell(1, 1);
                var email = worksheet.Cell(1, 2);
                var time = worksheet.Cell(1, 3);

                username.Value = "User name";
                username.Style.Font.Bold = true;
                email.Value = "Email address";
                email.Style.Font.Bold = true;
                time.Value = "Last Modification Time";
                time.Style.Font.Bold = true;

                for (var i = 0; i < users.Items.Count; i++)
                {
                    var user = users.Items[i];

                    worksheet.Cell(i + 2, 1).Value = user.UserName;
                    worksheet.Cell(i + 2, 2).Value = user.Email;

                    worksheet.Cell(i + 2, 3).Value = user.LastModificationTime;
                    worksheet.Cell(i + 2, 3).DataType = XLDataType.DateTime;
                    worksheet.Cell(i + 2, 3).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Left;
                }
                workbook.SaveAs(memoryStream);
            }

            memoryStream.Position = 0;
            return File(memoryStream, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        }

        public List<IdentityUserDto> Users = new List<IdentityUserDto>();

        public Task<IActionResult> OnPostImportAsync(IFormFile excel)
        {
            if (excel == null)
            {
                return Task.FromResult<IActionResult>(Page());
            }

            using (var workbook = new XLWorkbook(excel.OpenReadStream()))
            {
                var worksheet = workbook.Worksheet("Users Sheet");

                var count = 0;
                foreach (var row in worksheet.Rows())
                {
                    count += 1;
                    if (count > 1) //skip the first row.
                    {
                        Users.Add(new IdentityUserDto()
                        {
                            UserName = row.Cell(1).Value.ToString(),
                            Email = row.Cell(2).Value.ToString(),
                            LastModificationTime = row.Cell(3).Value.To<DateTime>()
                        });
                    }
                }

                return Task.FromResult<IActionResult>(Page());
            }
        }
    }
}
