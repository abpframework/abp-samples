### Generate Self-Signed Certificate Using OpenSSL

```
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout eshop-dk.key -out eshop-dk.crt -subj `"/CN=$certSubj`" -addext `"subjectAltName=DNS:localhost,DNS:host.docker.internal,DNS:app-authserver`"
openssl pkcs12 -export -in eshop-dk.crt -inkey eshop-dk.key -out eshop-dk.pfx -passout pass:8b6039b6-c67a-448b-977b-0ce6d3fcfd49
```

### How to run?

* Add entries to the hosts file (in Windows: `C:\Windows\System32\drivers\etc\hosts`):

````powershell
127.0.0.1 app-authserver
````