using Microsoft.AspNetCore.Authorization;
using OpenIddictDemo.Permissions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Clients;

namespace OpenIddictDemo
{
    [Authorize(OpenIddictDemoPermissions.TestClient)]
    public class DemoAppService : OpenIddictDemoAppService, IDemoAppService
    {
        protected ICurrentClient CurrentClient { get; }

        public DemoAppService(ICurrentClient currentClient)
        {
            CurrentClient = currentClient;
        }

        public virtual async Task<DemoDto> GetAsync()
        {
            await Task.CompletedTask;

            return new DemoDto()
            {
                ClientId = CurrentClient.Id
            };
        }
    }
}
