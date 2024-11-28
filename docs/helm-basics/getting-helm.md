---
sidebar_position: 1
title: Installing Helm on Windows, macOS, and Linux
---
Helm is a package manager for Kubernetes that allows you to manage Kubernetes applications. The `helm` command-line tool allows you to install/uninstall, upgrade and rollback even the most complex Kubernetes applications.

## Installation on Windows

### Chocolatey

For those using Chocolatey, it’s straightforward to install Helm:

```powershell
choco install kubernetes-helm
```

### From Script

Windows users can install via the script using Windows Subsystem for Linux (WSL) or a similar bash emulation environment:

```bash
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

## Installation on macOS

### Homebrew

Installing Helm on macOS is easiest with Homebrew:

```bash
brew install helm
```

### From Script

You can also use the official script:

```bash
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

## Installation on Linux

### From Script

You can also use the official script:

```bash
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

### Debian-like

```bash
curl -fsSL https://baltocdn.com/helm/signing.asc | sudo apt-key add -
sudo apt-get install apt-transport-https --yes
echo "deb https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt-get update
sudo apt-get install helm
```

### RHEL-like

```bash
sudo yum install helm
```
## Verifying the Installation

To verify that Helm is installed correctly, run:

```bash
armagan@ ~ $ helm version
version.BuildInfo{Version:"v3.15.2", GitCommit:"1a500d5625419a524fdae4b33de351cc4f58ec35", GitTreeState:"clean", GoVersion:"go1.22.4"}
```

