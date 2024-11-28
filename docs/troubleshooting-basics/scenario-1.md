---
sidebar_position: 1
title: "Scenario 1: Why My Containers are CrashLooping"
---

Deploy this application

```yaml
apiVersion: v1
kind: Service
metadata:
  name: k8s-getting-started-scenario-1-svc
spec:
  type: ClusterIP                        # Internal-only access within the cluster
  selector:
    app: k8s-getting-started-scenario-1  # Matches the label of the Deployment
  ports:
    - protocol: TCP
      port: 8080                         # Port exposed by the service
      targetPort: 8080                   # Port on the container that the app is running on
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: k8s-getting-started-scenario-1
  labels:
    app: k8s-getting-started-scenario-1
spec:
  replicas: 2
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 0
      maxSurge: 1
  selector:
    matchLabels:
      app: k8s-getting-started-scenario-1
  template:
    metadata:
      labels:
        app: k8s-getting-started-scenario-1
    spec:
      containers:
        - name: webserver
          image: armagankaratosun/k8s-getting-started:v5
          imagePullPolicy: Always
          ports:
            - containerPort: 8080
          livenessProbe:
            httpGet:
              path: /   
              port: 8080
            successThreshold: 1 
            failureThreshold: 3
          readinessProbe:
            httpGet:
              path: /healthz   # Readiness check on the /healthz endpoint
              port: 8080
            successThreshold: 1 
            failureThreshold: 3
```
And figure out what is wrong with it.

## Optional

Deploy Ingress to expose the service outside.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: k8s-getting-started-scenario-1-ingress
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
            name: k8s-getting-started-scenario-1-svc  # The name of the ClusterIP service for your app
            port:
              number: 8080  # Port of the service as defined in the service.yaml file
```

