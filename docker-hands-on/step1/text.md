# Creating a Dockerfile
A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. 
Using docker build users can create an automated build that executes several command-line instructions in succession

## What you'll learn on this scenario

* Understand the purpose and structure of a Dockerfile.
* Learn how to write Dockerfile instructions to build a Container image.
* Build a Container image and verify its creation.


## Dockerfile Commands Explained


* `FROM`: Starts the Dockerfile and sets the base image for subsequent instructions. Each FROM instruction begins a new stage of build and can start with a clean slate.

* `WORKDIR`: Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, and ADD instructions that follow. This command does not add a layer.

* `COPY`: Copies files and directories to the filesystem of the container at the specified path. This command adds a new layer.

* `RUN`: Executes commands on top of the current image as a new layer and commits the results. This command adds a new layer.

* `EXPOSE`: Indicates the ports on which a container listens for connections. This instruction does not add a layer.

* `ENV`: Sets environment variables. This command can add a layer as it often used in conjunction with RUN for subsequent instructions to use these environment settings.

* `CMD`: Specifies the default command to run when the container starts. This command does not add a layer as it is used to set executable commands and parameters that will be executed in the running container.