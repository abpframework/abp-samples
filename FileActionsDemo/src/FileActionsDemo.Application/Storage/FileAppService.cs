using System.Threading.Tasks;
using FileActionsDemo.Storage.Dto;
using Volo.Abp.Application.Services;
using Volo.Abp.BlobStoring;

namespace FileActionsDemo.Storage
{
    public class FileAppService : ApplicationService, IFileAppService
    {
        private readonly IBlobContainer<MyFileContainer> _fileContainer;

        public FileAppService(IBlobContainer<MyFileContainer> _fileContainer)
        {
            this._fileContainer = _fileContainer;
        }
        public async Task SaveBlobAsync(SaveBlobInputDto input)
        {
            await _fileContainer.SaveAsync(input.Name, input.Content, overrideExisting: true);
        }

        public async Task<BlobDto> GetBlobAsync(GetBlobRequestDto input)
        {
            var blob = await _fileContainer.GetAllBytesAsync(input.Name);
            
            return new BlobDto
            {
                Name = input.Name,
                Content = blob
            };
        }
    }
}