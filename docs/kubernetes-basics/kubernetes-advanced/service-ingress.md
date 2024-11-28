---
sidebar_position: 3
title: Exposing Services via Ingress
---
Source code: [k8s-getting-started GitHub Repository](https://github.com/armagankaratosun/k8s-getting-started)

You can copy/paste the YAML manifests from this guide, or clone the repository to edit and use the manifests directly.

## Deploy the application (if you dont already)

Below are the YAML manifests for a Kubernetes Deployment using a demo container image. (Located at `Deployments/deployment.yaml`)

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: k8s-getting-started
  labels:
    app: k8s-getting-started
spec:
  replicas: 5
  strategy:
    type: Recreate # Specifies the strategy type as "Recreate", meaning that pods will be updated all at once
  selector:
    matchLabels:
      app: k8s-getting-started
  template:
    metadata:
      labels:
        app: k8s-getting-started
    spec:
      containers:
        - name: k8s-getting-started
          image: armagankaratosun/k8s-getting-started:v1
          ports:
            - containerPort: 8080
```

Apply the Initial Deployment
To deploy, run:

`kubectl apply -f deployment.yaml -n <your-namespace>`

### Example Output

```bash
armagan@ ~ $ kubectl apply -f k8s-getting-started/Deployments/deployment.yaml -n <your-namespace>
deployment.apps/k8s-getting-started created
```

You can list the available pods

```bash
armagan@ ~ $ kubectl get pods -n <your-namespace>

NAME                                   READY   STATUS    RESTARTS   AGE
k8s-getting-started-6697dbc867-9r49d   1/1     Running   0          31s
k8s-getting-started-6697dbc867-rfm25   1/1     Running   0          32s
k8s-getting-started-6697dbc867-tjr4w   1/1     Running   0          32s
k8s-getting-started-6697dbc867-w5jbb   1/1     Running   0          31s
k8s-getting-started-6697dbc867-zrp2z   1/1     Running   0          32s
```

## Create a ClusterIP Service 

```yaml
apiVersion: v1
kind: Service
metadata:
  name: k8s-getting-started-service
spec:
  selector:
    app: k8s-getting-started
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 8080
  type: ClusterIP
```

## Create an Ingress to Reverse Proxy your ClusterIP service

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: k8s-getting-started-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /  # Ensures paths are properly routed to the service
spec:
  rules:
  - host: "<yourname>.<yourdomain>.com"  # Replace <yourname>.<yourdomain>.com with your specific domain
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: k8s-getting-started-service  # The name of the ClusterIP service for your app
            port:
              number: 8080  # Port of the service as defined in the service.yaml file
```