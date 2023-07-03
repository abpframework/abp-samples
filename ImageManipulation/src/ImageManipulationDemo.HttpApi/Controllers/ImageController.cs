using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp.BlobStoring;
using Volo.Abp.Imaging;

namespace ImageManipulationDemo.Controllers
{
    [Controller]
    [Route("api/image")]
    public class ImageController : ImageManipulationDemoController
    {
        private readonly IBlobContainer<ImageManipulationContainer> _blobContainer;

        public ImageController(IBlobContainer<ImageManipulationContainer> blobContainer)
        {
            _blobContainer = blobContainer;
        }

        [HttpPost("upload")]
        [CompressImage]
        [ResizeImage(width: 100, height: 100)]
        public async Task<IActionResult> UploadAsync(IFormFile file)
        {
            var fileBytes = await file.GetAllBytesAsync();
            var blobName = file.FileName;

            await _blobContainer.SaveAsync(blobName, fileBytes);

            return Ok();
        }

        [HttpGet("")]
        public async Task<byte[]> GetImageAsync(string fileName)
        {
            return await _blobContainer.GetAllBytesAsync(fileName);
        }
    }
}
