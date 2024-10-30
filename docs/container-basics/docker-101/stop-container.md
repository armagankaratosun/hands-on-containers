---
sidebar_position: 4
title: Stop Your First Container
---

## Stop/Start Containers

Run the following command to stop a running container.

```bash
docker stop <container-id>
```
or 
``` bash
docker container stop <container-id>
```
**Example output:**
``` bash
armagan@ ~/python-docker-example (main?) $ docker container stop 3e9479398239
3e9479398239
```

### Checking the existing (stopped) containers

Run the `docker ps` command with `--all or -a` flag to see stopped containers 

```bash
docker ps --all
```
or 
``` bash
docker container ls --all
```

```bash
armagan@ ~/python-docker-example (main?) $ docker container ls -a
CONTAINER ID   IMAGE                COMMAND                   CREATED          STATUS                          PORTS                    NAMES
3e9479398239   my-first-image:v1    "uvicorn app:app --h…"    4 minutes ago    Exited (0) About a minute ago
```

### (Re)starting a container

* Run ``docker start`` or ``docker container start``  command to start a stopped container. 
* Run ``docker restart`` or ``docker container restart`` command to restart a running (or stopped) container.

```bash
docker start <container-id>
```
or 
``` bash
docker container start <container-id>
```
**Example output:**
``` bash
armagan@ ~/python-docker-example (main?) $ docker container restart 3e9479398239
3e9479398239

armagan@ ~/python-docker-example (main?) $ docker container ls
CONTAINER ID   IMAGE               COMMAND                  CREATED          STATUS          PORTS                    NAMES
3e9479398239   my-first-image:v1   "uvicorn app:app --h…"   19 minutes ago   Up 17 seconds   0.0.0.0:8000->8000/tcp   my-first-container
```

## Bonus Points

Try to run another container with the same image.