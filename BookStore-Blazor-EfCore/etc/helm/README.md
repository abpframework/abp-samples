# Local Kubernetes Guide

This guide explains how to deploy your microservice template into your local Kubernetes cluster.

## Pre-requirements

* [Docker for Desktop](https://www.docker.com/products/docker-desktop/) with Kubernetes enabled
* [Helm](https://helm.sh/docs/intro/install/) for running helm charts
* Install NGINX ingress using helm:
```powershell
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm upgrade --install --version=4.0.19 ingress-nginx ingress-nginx/ingress-nginx
```
## Configuring HTTPS for Local K8s

You can run the solution on staging environment in your local Kubernetes cluster with HTTPS. There are various ways to create a self-signed certificate.

### Installing mkcert
This guide will be using `mkcert` for creating self-signed certificates. Follow the [installation guide](https://github.com/FiloSottile/mkcert#installation) to install mkcert.

### Creating mkcert Root CA
Use the command to create root (local) certificate authority for your certificates:
```powershell
mkcert -install
```

> **Note:** All the certificates created by mkcert certificate creation will be trusted by the local machine
### Run mkcert

Use the `create-tls-secrets.ps1` PowerShell script to create self-signed certificates for your domains and the tls secret for Kubernetes.

## Building Images

Run `build-all-images.ps1` to build all Docker images for the solution. Do this whenever you change the solution code. If you only change a single project, you can use `build-image.ps1` to build only that image, for a faster build. See `build-all-images.ps1` file's content to learn how to use `build-image.ps1` for a single project.

> Note that you can also use ABP Studio to build one or all the images.

## Install Charts

Run `install.ps1` to install or upgrade the helm charts to the Kubernetes cluster.

> Note that you can also use ABP Studio to install/uninstall charts.

## Add Entries to the Hosts File

Ensure that the following entries are added to the `C:\Windows\System32\drivers\etc\hosts` file:

```
127.0.0.1 bookstore-local-web
127.0.0.1 bookstore-local-webgateway
127.0.0.1 bookstore-local-authserver
```

> Note that ABP Studio automatically adds these entries to your `hosts` file when you *Connect* to your Kubernetes cluster using ABP Studio's Kubernetes integration.

## Browse

Now, you can browse the URL: `https://bookstore-local-web`

## Uninstall Charts

Run `uninstall.ps1` to uninstall the helm charts from the Kubernetes cluster.

