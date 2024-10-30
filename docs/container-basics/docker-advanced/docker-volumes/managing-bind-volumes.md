---
sidebar_position: 1
title: Managing Bind Mounts
---

## Bind mounts

`Bind mounts` are the simplest form of Docker volumes, but they offer fewer features compared to Docker-managed volumes. With a bind mount, a file or directory on the host machine is mounted into a container using an absolute path from the host.

<div style={{textAlign: 'left'}}>
![Docker Named Volume](img/docker_volume.png)
</div>

**Source**: [Docker Volume Documentation](https://docs.docker.com/engine/storage/bind-mounts)

In contrast, `named volumes` are created as needed in Docker's storage directory or on a remote storage server (e.g., when using volume drivers). Additionally, bind mounts cannot be managed through the Docker CLI.

### Create mount path

First, create a directory on your host machine that will be mounted into the container:

``` bash
mkdir -p /tmp/my-first-container-with-volume
```
### Create dummy data

Now, create a sample file inside the mount path to verify it can be accessed from the container:

```bash
echo "Hello from the host" > /tmp/my-first-container-with-volume/hello.txt

```

### Bind path to container

Run the container and bind the host directory to a directory in the container:

```bash
 docker run -d \
  -it \
  --name my-first-container-with-volume \
  --mount type=bind,source="/tmp/my-first-container-with-volume",target=/app/data \
  my-first-image:v1
  ```
:::warning
There are diffrences between `-v` and `--mount` behavior and [the details are further explained in the Docker documentation](https://docs.docker.com/engine/storage/bind-mounts/#choose-the--v-or---mount-flag).
:::
#### What just happened?

* `--mount type=bind` Defines the mount type.
* `source="/tmp/my-first-container-with-volume",target=/app/data` Binds the host directory `/tmp/my-first-container-with-volume` to the `/app/data` directory inside the container.

### Check Data inside the container

To confirm that the bind mount is working, execute a shell inside the container and view the data:
``` bash
docker exec -it my-first-container-with-volume bash
```
Once inside the container, list the contents of the /app/data directory:
```
ls /app/data
cat /app/data/hello.txt
```
You should see hello.txt and its contents (Hello from the host), confirming the host directory is successfully mounted.

```bash
app@3deeb1c8f37f:/app$ ls /app/data/
hello.txt
app@3deeb1c8f37f:/app$ cat /app/data/hello.txt
Hello from the host
```
Run `CTRL+D` to exit from container shell.

### Using `docker inspect` verify the bind path
You can use `docker inspect` to verify that the bind mount is configured correctly:
```bash
docker inspect my-first-container-with-volume --format='{{json .Mounts}}'
```
This command will display detailed information about the mounts used by the container, including the source and target paths.
``` json
[
   {
      "Type":"bind",
      "Source":"/tmp/my-first-container-with-volume",
      "Destination":"/app/data",
      "Mode":"",
      "RW":true,
      "Propagation":"rprivate"
   }
]
```