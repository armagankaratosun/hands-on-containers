---
sidebar_position: 2
title: Cheat Sheet
---
## Metrics

To view resource usage metrics for nodes or pods:

```bash
kubectl top [node-name | pod-name]
```
## Logs

Retrieve logs from a specific pod:

```bash
kubectl logs [pod-name]
```
### Options for logs

**Follow Logs:** Stream logs from a pod in real-time.
```bash
kubectl logs -f [pod-name]
```
**Tail Logs:** View the last 'n' lines of logs from a pod.

```bash
kubectl logs --tail=20 [pod-name]
```
**Specific Container:** If a pod contains more than one container, specify which container's logs to retrieve.

```bash
kubectl logs [pod-name] -c [container-name]
```
## Troubleshooting

Describe a pod in detail. Useful for diagnosing issues:

```bash
kubectl describe pod [pod-name] (-o wide | -o yaml)
```

List a specific pod with extended information:

```bash
kubectl get pod [pod-name] -o wide
```
List a deployment with extended information:

```bash
kubectl get deployment [deployment-name] -o wide
```
View events in a specific namespace:
```bash
kubectl get events -n [namespace]
```

## Debugging

Open an interactive shell to a running container:

```bash
kubectl exec [pod-name] -it -- sh
```
Create a temporary copy of a pod and open an interactive shell to help with debugging (including tools):

```bash
kubectl debug [pod-name] -it --copy-to=debug-pod --container=myapp --image=busybox -- sh
```


