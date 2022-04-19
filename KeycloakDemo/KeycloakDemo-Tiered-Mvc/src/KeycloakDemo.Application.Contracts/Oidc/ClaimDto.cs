using System;

namespace KeycloakDemo.Oidc;

[Serializable]
public class ClaimDto
{
    public string Type { get; set; }
    public string Value { get; set; }
}
