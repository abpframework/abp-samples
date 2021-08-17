using System.IO;
using System.Threading.Tasks;
using FileActionsDemo.Models;
using FileActionsDemo.Storage;
using FileActionsDemo.Storage.Dto;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Http;

namespace FileActionsDemo.Controllers
{
    public class FileController : AbpController
    {
        private readonly IFileAppService _fileAppService;

        public FileController(IFileAppService fileAppService)
        {
            _fileAppService = fileAppService;
        }
        
        [HttpGet]
        [Route("download/{fileName}")]
        public async Task<IActionResult> DownloadAsync(string fileName)
        {
            var fileDto = await _fileAppService.GetBlobAsync(new GetBlobRequestDto{ Name = fileName });

            return File(fileDto.Content, MimeTypes.Application.OctetStream, fileDto.Name);
        }
    }
}