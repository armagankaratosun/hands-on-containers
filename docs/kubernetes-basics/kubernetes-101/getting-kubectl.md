---
sidebar_position: 1
title: Getting kubectl
---

# Installing `kubectl` on Windows, macOS, and Linux

The `kubectl` command-line tool allows you to interact with Kubernetes clusters. Follow the instructions below to install `kubectl` for your operating system. 

For complete and up-to-date instructions, you can also refer to the official Kubernetes documentation: [Install and Set Up kubectl](https://kubernetes.io/docs/tasks/tools/).


## Installation on Windows

#### Download the kubectl binary:

Download the latest kubectl binary from the [Kubernetes release page](https://kubernetes.io/releases/download/#binaries):

#### Add the binary to your PATH:

Open System Properties > Environment Variables > Path and add the directory where kubectl was downloaded.

#### Verify Installation:

```powershell
kubectl version --client
```

## Installation on Linux

#### Download the kubectl binary:

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
```
#### Make the binary executable:

```bash
chmod +x kubectl
```

#### Move it to your PATH:

```bash
sudo mv kubectl /usr/local/bin/
```

#### Verify Installation:

```bash
kubectl version --client
```

## Installation on macOS

#### Download the kubectl binary:

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"
```
#### Make the binary executable:

```bash
chmod +x kubectl
```

#### Move it to your PATH:

```bash
sudo mv kubectl /usr/local/bin/
```

#### Verify Installation:

```bash
kubectl version --client
```

