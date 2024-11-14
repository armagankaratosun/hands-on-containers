---
sidebar_position: 3
title: Your First Deployment
---

Source code: [k8s-getting-started GitHub Repository](https://github.com/armagankaratosun/k8s-getting-started)

You can copy/paste the YAML manifests from this guide, or clone the repository to edit and use the manifests directly.

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

##  Apply the Initial Deployment

To deploy, run:

```
kubectl apply -f deployment.yaml -n <your-namespace>
```

### Example Output

```
armagan@ ~ $ kubectl apply -f k8s-getting-started/Deployments/deployment.yaml -n <your-namespace>
deployment.apps/k8s-getting-started created
```

You can list the available pods 

```
armagan@ ~ $ kubectl get pods -n <your-namespace>

NAME                                   READY   STATUS    RESTARTS   AGE
k8s-getting-started-6697dbc867-9r49d   1/1     Running   0          31s
k8s-getting-started-6697dbc867-rfm25   1/1     Running   0          32s
k8s-getting-started-6697dbc867-tjr4w   1/1     Running   0          32s
k8s-getting-started-6697dbc867-w5jbb   1/1     Running   0          31s
k8s-getting-started-6697dbc867-zrp2z   1/1     Running   0          32s
```

##  Create a Service manifest

This will create a `ClusterIP` service, accessible only from within the cluster (or via `kubectl port-forward`). (Located at `Services/service-clusterip.yaml`)

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

### Example Output

```
armagan@ ~ $ kubectl apply -f k8s-getting-started/Services/service-clusterip.yaml -n <your-namespace>
service/k8s-getting-started-service created
```

To view the services:

```
NAME                          TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
k8s-getting-started-service   ClusterIP   10.67.18.167   <none>        8080/TCP   20s
kubernetes                    ClusterIP   10.67.0.1      <none>        443/TCP    13h
```

Note that this service only has a `CLUSTER-IP` and no `EXTERNAL-IP`, meaning it’s accessible only within the cluster.

##  Use `kubeclt port-forward` to Expose Service Locally

```
kubectl port-forward service/k8s-getting-started-service 8080:8080
```
### Example Output

```
armagan@ ~ $ kubectl port-forward service/k8s-getting-started-service 8080:8080

Forwarding from 127.0.0.1:8080 -> 8080
Forwarding from [::1]:8080 -> 8080
Handling connection for 8080
Handling connection for 8080
```

Now, you can access the app in your browser at [http://localhost:8080](http://localhost:8080)


![alt text](img/blue.png)
