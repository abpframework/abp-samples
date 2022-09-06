# Source: https://stackoverflow.com/a/62060315
# Generate self-signed certificate to be used by IdentityServer.
# When using localhost - API cannot see the IdentityServer from within the docker-compose'd network.
# You have to run this script as Administrator (open Powershell by right click -> Run as Administrator).

$rootCN = "eShopOnAbp"
$authserverCNs = "app-authserver", "localhost"
$publicWebCNs = "app-public-web", "localhost"
$administrationServiceCNs = "administration-service", "localhost"
$identityServiceCNs = "identity-service", "localhost"
$catalogServiceCNs = "catalog-service", "localhost"
$basketServiceCNs = "basket-service", "localhost"
$orderingServiceCNs = "ordering-service", "localhost"
$paymentServiceCNs = "payment-service", "localhost"

$alreadyExistingCertsRoot = Get-ChildItem -Path Cert:\LocalMachine\My -Recurse | Where-Object {$_.Subject -eq "CN=$rootCN"}

if ($alreadyExistingCertsRoot.Count -eq 1) {
    Write-Output "Skipping creating Root CA certificate as it already exists."
    $rootCA = [Microsoft.CertificateServices.Commands.Certificate] $alreadyExistingCertsRoot[0]
} else {
    $rootCA = New-SelfSignedCertificate -Subject $rootCN -KeyUsageProperty Sign -KeyUsage CertSign -CertStoreLocation Cert:\LocalMachine\My
}

$authserverCert = New-SelfSignedCertificate -DnsName $authserverCNs -Signer $rootCN -CertStoreLocation Cert:\LocalMachine\My
# $publicWebCert = New-SelfSignedCertificate -DnsName $publicWebCNs -Signer $rootCN -CertStoreLocation Cert:\LocalMachine\My
# $administrationServiceCert = New-SelfSignedCertificate -DnsName $administrationServiceCNs -Signer $rootCN -CertStoreLocation Cert:\LocalMachine\My
# $identityServiceCert = New-SelfSignedCertificate -DnsName $identityServiceCNs -Signer $rootCN -CertStoreLocation Cert:\LocalMachine\My
# $catalogServiceCert = New-SelfSignedCertificate -DnsName $catalogServiceCNs -Signer $rootCN -CertStoreLocation Cert:\LocalMachine\My
# $basketServiceCert = New-SelfSignedCertificate -DnsName $basketServiceCNs -Signer $rootCN -CertStoreLocation Cert:\LocalMachine\My
# $orderingServiceCert = New-SelfSignedCertificate -DnsName $orderingServiceCNs -Signer $rootCN -CertStoreLocation Cert:\LocalMachine\My
# $paymentServiceCert = New-SelfSignedCertificate -DnsName $paymentServiceCNs -Signer $rootCN -CertStoreLocation Cert:\LocalMachine\My

$password = ConvertTo-SecureString -String "8b6039b6-c67a-448b-977b-0ce6d3fcfd49" -Force -AsPlainText

Export-PfxCertificate -Cert $rootCA -FilePath eShopOnAbp-root-cert.pfx -Password $password | Out-Null
Export-PfxCertificate -Cert $authserverCert -FilePath app-authserver-cert.pfx -Password $password | Out-Null
# Export-PfxCertificate -Cert $publicWebCert -FilePath app-public-cert.pfx -Password $password | Out-Null
# Export-PfxCertificate -Cert $administrationServiceCert -FilePath administration-service-cert.pfx -Password $password | Out-Null
# Export-PfxCertificate -Cert $identityServiceCert -FilePath identity-service-cert.pfx -Password $password | Out-Null
# Export-PfxCertificate -Cert $catalogServiceCert -FilePath catalog-service-cert.pfx -Password $password | Out-Null
# Export-PfxCertificate -Cert $basketServiceCert -FilePath basket-service-cert.pfx -Password $password | Out-Null
# Export-PfxCertificate -Cert $orderingServiceCert -FilePath ordering-service-cert.pfx -Password $password | Out-Null
# Export-PfxCertificate -Cert $paymentServiceCert -FilePath payment-service-cert.pfx -Password $password | Out-Null

# Export .cer to be converted to .crt to be trusted within the Docker container.
Export-Certificate -Cert $rootCA -FilePath eShopOnAbp-root-cert.cer -Type CERT | Out-Null

# Trust it on your host machine.
$store = New-Object System.Security.Cryptography.X509Certificates.X509Store "Root","LocalMachine"
$store.Open("ReadWrite")

$rootCertAlreadyTrusted = ($store.Certificates | Where-Object {$_.Subject -eq "CN=$rootCN"} | Measure-Object).Count -eq 1

if ($rootCertAlreadyTrusted -eq $false) {
    Write-Output "Adding the root CA certificate to the trust store."
    $store.Add($rootCA)
}

$store.Close()