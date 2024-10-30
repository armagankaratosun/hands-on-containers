---
sidebar_position: 2
title: Your First Dockerfile and Image
---
## Step-by-step Guide


### Clone the Repository
   Use the command below to clone an example application repository to your local environment:

```bash
git clone https://github.com/estebanx64/python-docker-example
```

### Your First Dockerfile
Navigate to the repository directory and create your Dockerfile to containerize the application:
 
```bash
 nano Dockerfile
```
#### Tips

1) Start with the `FROM` instruction to define the base image. Since this is a python application, look for a base image (from [Docker Hub](https://hub.docker.com/)) that has python in it.
2) Docker CLI has a command `docker search` to search images from Docker Hub.
3) Don't forget to copy the source code and install the requirements.
4) The `EXPOSE` instruction informs Docker that the container listens on the specified port at runtime.
5) Bonus points for running the app without the `root` user.

Use the [Dockerfile Commands Explained](quick-recap#dockerfile-commands-explained) section to figure out how you can write your own `Dockerfile`.

### Build the Docker Image

Build your Docker image with the following command:

```
docker build -t my-first-image:v1 .
```

**Example output**

```bash
armagan@ ~/python-docker-example (main?) $ docker build -t my-first-image:v1 .
[+] Building 45.5s (11/11) FINISHED                                                                       docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                      0.0s
 => => transferring dockerfile: 525B                                                                                      0.0s
 => [internal] load .dockerignore                                                                                         0.0s
 => => transferring context: 2B                                                                                           0.0s
 => => sha256:b52e97a85736bc3a6bfb081ec3f2a5b828233120b2138080af1761e504b06529 9.72kB / 9.72kB                            0.0s
 => => sha256:4a8c358388c0950410845ee83a2738094505c8ce199c9b0f2d25eccaa283082c 6.20kB / 6.20kB                            0.0s
...
 => [internal] load build context                                                                                         0.0s
 => => transferring context: 31.68kB                                                                                      0.0s
...
 => exporting to image                                                                                                    0.1s
 => => exporting layers                                                                                                   0.1s
 => => writing image sha256:cf4db668dc69fc5509224c1bab13458d05dbdf6520331ca0cbaf48f6e0b3c761                              0.0s
 => => naming to docker.io/library/my-first-image:v1                                                                      0.0s
```

### What just happened?
Docker has created a new container image from the files in the current directory. This image is named and tagged `my-first-image:v1`. Each instruction in the Dockerfile has been converted into a read-only layer, which is cached for faster builds in the future.

* `-t (Tag):` The `-t` flag allows you to name and tag your Docker image. In this case, `my-first-image` is the name, and `v1` is the tag. The full name `my-first-image:v1` makes it easy to reference this image later. Tags help differentiate versions or variations of the same image, which is useful when you’re updating or managing multiple versions.

* `. (Dot):` The `.` specifies the build context, which is the directory Docker will use to find the Dockerfile and any files referenced within it. The dot here refers to the current directory.

:::warning
Docker will use the contents of this directory as the context to build the image, so make sure that all necessary files (including the Dockerfile) are in and all unrelated files are out from this directory.
:::

## Verify that you have created the image

Verify the Image Creation Check if your Docker image was created successfully:

```bash
docker image ls
```
You should see `my-first-image:v1` listed in the output.

**Example output:**
```bash
armagan@ ~/python-docker-example (main?) $ docker image ls
REPOSITORY                                       TAG       IMAGE ID       CREATED          SIZE
my-first-image                                   v1        ce2ef73c1e8a   16 minutes ago   1.08GB
```
## Bonus Points

1. Run `docker history my-first-image:v1` 
2. Run `docker inspect my-first-image:v1` 

and try to understand what happened.

