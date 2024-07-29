openssl pkcs12 -export \
  -in ~/.acme.sh/getabp.net_ecc/getabp.net.cer \
  -inkey ~/.acme.sh//getabp.net_ecc/getabp.net.key \
  -out getabp.net.pfx \
  -passout pass:
