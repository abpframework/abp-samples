* Install the `cert-manager` on petclinic cluster. See [Cert-Manager info](https://cert-manager.io/docs/).

  * Create the namespace for ingress-basic

  ```bash
    kubectl create namespace ingress-basic
  ```

  * Add the Jetstack Helm repository.

  ```bash
  helm repo add jetstack https://charts.jetstack.io
  ```

  * Update your local Helm chart repository.

  ```bash
  helm repo update
  ```

  * Install the `Custom Resource Definition` resources separately

  ```bash
  kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.7.1/cert-manager.crds.yaml
  ```

  * Install the cert-manager Helm chart

  ```bash
  helm install \
  cert-manager jetstack/cert-manager \
  --namespace ingress-basic \
  --version v1.7.1
  ```

  * Verify that the cert-manager is deployed correctly.

  ```bash
  kubectl get pods --namespace ingress-basic -o wide
  ```

* Create `ClusterIssuer` with name of `cluster-issuer.yml` for the production certificate through `Let's Encrypt ACME` (Automated Certificate Management Environment) with following content and save it under `azure/k8s` folder. *Note that certificate will only be created after annotating and updating the `Ingress` resource.*

```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt
spec:
  acme:
    # The ACME server URL
    server: https://acme-v02.api.letsencrypt.org/directory
    # Email address used for ACME registration
    email: info@volosoft.com
    # Name of a secret used to store the ACME account private key
    privateKeySecretRef:
      name: letsencrypt
    # Enable the HTTP-01 challenge provider
    solvers:
    - http01:
        ingress:
          class: nginx
```

* Check if `ClusterIssuer` resource is created.

```bash
kubectl apply -f etc/azure/cluster-issuer.yaml
kubectl get clusterissuers letsencrypt -n ingress-basic -o wide
```

