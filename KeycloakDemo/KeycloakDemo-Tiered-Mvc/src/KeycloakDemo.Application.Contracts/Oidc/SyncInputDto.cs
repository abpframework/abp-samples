using System;
using System.Collections.Generic;

namespace KeycloakDemo.Oidc;

[Serializable]
public class SyncInputDto
{
    public List<ClaimDto> Claims { get; set; }
}
