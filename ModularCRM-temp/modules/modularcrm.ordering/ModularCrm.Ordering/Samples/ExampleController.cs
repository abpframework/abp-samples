using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;

namespace ModularCrm.Ordering.Samples;

[Area(OrderingRemoteServiceConsts.ModuleName)]
[RemoteService(Name = OrderingRemoteServiceConsts.RemoteServiceName)]
[Route("api/ordering/example")]
public class ExampleController : AbpController, ISampleAppService
{
    private readonly ISampleAppService _sampleAppService;

    public ExampleController(ISampleAppService sampleAppService)
    {
        _sampleAppService = sampleAppService;
    }

    [HttpGet]
    public async Task<SampleDto> GetAsync()
    {
        return await _sampleAppService.GetAsync();
    }

    [HttpGet]
    [Route("authorized")]
    [Authorize]
    public async Task<SampleDto> GetAuthorizedAsync()
    {
        return await _sampleAppService.GetAsync();
    }
}
