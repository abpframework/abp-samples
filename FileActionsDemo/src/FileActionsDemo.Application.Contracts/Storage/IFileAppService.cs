using System.Threading.Tasks;
using FileActionsDemo.Storage.Dto;
using Volo.Abp.Application.Services;

namespace FileActionsDemo.Storage
{
    public interface IFileAppService : IApplicationService
    {
        Task SaveBlobAsync(SaveBlobInputDto input);

        Task<BlobDto> GetBlobAsync(GetBlobRequestDto input);
    }
}