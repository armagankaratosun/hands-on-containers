---
sidebar_position: 2
title: Run Your First Image Locally
---

## Bonus Points

> Try to run another container with the same image.

If you try to re-run the same `docker run` command:

```bash
docker run --name my-first-container -dp 8000:8000 my-first-image:v1
```
You will see this error:

```bash
docker: Error response from daemon: Conflict. The container name "/my-first-container" is already in use by container "3e9479398239abd0ae6646df45641c075b67dd45f2339bf64c8f8e2eded340d1". You have to remove (or rename) that container to be able to reuse that name.
```

This means that you cannot have two containers with the same name. The first idea would be to change the name of the container.

```bash
docker run --name my-second-container -dp 8000:8000 my-first-image:v1
```

But then,  you will have another error saying:

```
docker: Error response from daemon: driver failed programming external connectivity on endpoint my-second-container (58966a15270aa9fe07b9f8f470dba70c92bcd319eccc73e8ffb428da9e93b3a3): Bind for 0.0.0.0:8000 failed: port is already allocated.
```

Since we are mapping the container's 8000 port to the host machine's port 8000 with `-p 8000:8000`, we cannot map yet another container to the same port. Therefore, you should map another port from the host machine.

```bash
docker run --name my-second-container -dp 9000:8000 my-first-image:v1
```

and the new container will be accessible by visiting [http://localhost:9000](http://localhost:9000) on your browser.