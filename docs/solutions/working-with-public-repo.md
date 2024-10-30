---
sidebar_position: 3
title: Working with Public Repositories
---
## Bonus Points

> Try running the container without pulling the image. Explain what happened.

```bash
armagan@ ~ $ docker run --name my-nginx -p 8080:80 -d nginx:stable
Unable to find image 'nginx:stable' locally
stable: Pulling from library/nginx
83d624c4be2d: Pull complete
ea60018ffd54: Pull complete
7d4c78f22018: Pull complete
da2f69cd8dd8: Pull complete
b11973a2db69: Pull complete
9973146658bc: Pull complete
31b8854dcb2c: Pull complete
Digest: sha256:defdd267daef9a70ce322c3e6d8da716a4fd23e85b2fea311af076f1129186c2
Status: Downloaded newer image for nginx:stable
0581e4b8c0e1734a8dd7f7d249106cd80594acb5c8d555f99700531a71ca915c
```
1. If the image is not available locally, running the `docker run` command will automatically search DockerHub for it. If the image is found, Docker will pull it and then run the container. 

2. During this process, you'll see `Pull complete` messages for each layer as it downloads (if the image was already available locally, these layers would be cached). 

3. The final message displayed will be the container id, indicating that the container has started successfully.

```bash
armagan@ ~ $ docker ps
CONTAINER ID   IMAGE               COMMAND                  CREATED          STATUS          PORTS                    NAMES
0581e4b8c0e1   nginx:stable        "/docker-entrypoint.…"   10 minutes ago   Up 10 minutes   0.0.0.0:8080->80/tcp     my-nginx
```

> Try pulling the same image from Amazon ECR Public Gallery.

```bash
armagan@ ~ $ docker run --name my-nginx -p 8080:80 -d public.ecr.aws/nginx/nginx:stable
```