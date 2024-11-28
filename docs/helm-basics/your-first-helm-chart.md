---
sidebar_position: 4
title: Create Your First Helm Chart
---
## Create a New Helm Chart

To create a new Helm chart, use the `helm create` command, which sets up a new chart directory with all the necessary files and directories for a basic chart.

```bash 
armagan@ ~ $ helm create k8s-getting-started-chart
Creating k8s-getting-started-chart
```
This command creates a directory called `k8s-getting-started-chart` with the following structure:

```bash
/k8s-getting-started-chart/
|-- charts/
|-- templates/
|   |-- deployment.yaml
|   |-- service.yaml
|   |-- ingress.yaml
|   |-- _helpers.tpl
|-- Chart.yaml
|-- values.yaml
```
* **Chart.yaml:** Contains metadata about your chart such as name, version, and description.
* **values.yaml:** Stores default values for templates, which you can override during deployment.
* **templates/:** This directory contains the templates that generate Kubernetes manifest files when the chart is deployed.
* **charts/:** Used for storing charts upon which this chart depends.

## Customize Your Chart

Edit the files within the `k8s-getting-started-chart/templates/` directory to define the resources you need for your application. The `deployment.yaml`, `service.yaml`, and other files are Kubernetes manifests templated out with Helm's templating language. 

You can use the [k8s-getting-started GitHub Repository](https://github.com/armagankaratosun/k8s-getting-started) yaml manifests for the `deployment.yaml`, `service.yaml` and `ingress.yaml` examples to create your first chart.

##  Configure Chart Metadata

Edit the Chart.yaml file and edit the details to fit your chart:

```yaml
apiVersion: v2 # always v2 for Helm 3
name: k8s-getting-started-chart
description: My first Helm chart for Kubernetes
version: 0.1.0
appVersion: "1.0"
```
##  Package Your Chart

Once your chart is configured and ready, you can package it for distribution:

```yaml
helm package mychart
```
This command creates a `.tgz` package of your chart that you can deploy to a Helm repository or install directly.

##  Install Your Chart

To install your chart onto a Kubernetes cluster:

```bash
helm install k8s-getting-started-chart ./k8s-getting-started-chart -f values.yaml
```
This command creates a release named `k8s-getting-started-chart` using your new chart. 
