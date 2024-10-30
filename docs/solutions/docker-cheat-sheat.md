---
sidebar_position: 7
title: Docker Cheat Sheat
---

## Images

1. Build an Image from a Dockerfile

``` bash
docker build -t <image_name>
```
2. Build an Image from a Dockerfile without the cache
``` bash
docker build -t <image_name> . –no-cache
```
3. List local images

```bash
docker images
```
4. Delete an Image
```bash
docker rmi <image_name>
```
5. Remove all unused images

```bash
docker image prune
```
## Containers
1. Create and run a container from an image, with a custom name:
``` bash
docker run --name <container_name> <image_name>
```
2. Run a container with and publish a container’s port(s) to the host.
```bash
docker run -p <host_port>:<container_port> <image_name>
```
3. Run a container in the background
```bash
docker run -d <image_name>
```
4. Start or stop an existing container:
```bash
docker start|stop <container_name> (or <container-id>)
```
5. Remove a stopped container:
```bash
docker rm <container_name>
```
6. Open a shell inside a running container:
```bash
docker exec -it <container_name> sh
```
7. Fetch and follow the logs of a container:
```bash
docker logs -f <container_name>
```
8. To inspect a running container:
```bash
docker inspect <container_name> (or <container_id>)
```
9. To list currently running containers:
```bash
docker ps
```
10. List all docker containers (running and stopped):
```bash
docker ps --all
```
11. View resource usage stats
```bash
docker container stats
``` 

# Reference
https://docs.docker.com/get-started/docker_cheatsheet.pdf