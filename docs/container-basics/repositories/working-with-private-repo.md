---
sidebar_position: 4
title: Working with Private Repositories
---

## Logging into the Private Repository

Before pulling or pushing any images, you must log in to your private container image registry:

```bash
docker login --username <username> my-registry.example.com
```
:::warning
You will be prompted to enter your password. If your registry is using the default port, there’s no need to specify it. However, if it’s running on a non-standard port, you’ll need to include it in the URL (e.g., my-registry.example.com:5000). 

Note that your credentials will be stored in plain text on the operating system.
:::

## Pushing an Image to Private Repository

### Tag your local image with Registry URL and Repository

Before pushing the image, you need to tag it with the private registry URL and repository path. This step associates the image with the correct location in your private registry.

The general syntax for tagging is:

```bash
docker tag IMAGE[:TAG] [REGISTRY_URL]/[REPOSITORY]/IMAGE[:TAG]
```

For example;

```bash
docker tag my-first-image:v1 my-registry.example.com/hands-on-containers/my-first-image-<username>:v1
```
**Here’s what each part means:**

* `my-first-image:v1` The name and tag of your local image.
* `my-registry.example.com` The URL of your private registry.
* `hands-on-containers` The repository or project path in the registry.
* `my-first-image-<username>:v1` The name and tag of the image as it will appear in the private registry.

### Push an Image from the Private Repository

After tagging, use the docker push command to upload the image to your private repository:

```bash
docker push my-registry.example.com/hands-on-containers/my-first-image-username:v1
```
This command pushes the tagged image to the specified private repository URL.

**During this process**

Docker checks each layer in the image. If the layer already exists in the registry, Docker skips uploading it to save time and bandwidth.
If the push is successful, your image will be available in the private registry and accessible by others with appropriate permissions.

```bash
armagan@ ~/python-docker-example (main?) $ docker push my-registry.example.com/hands-on-containers/my-first-image-armagan:v1
The push refers to repository [my-registry.example.com/hands-on-containers/my-first-image-armagan]
616ccb485ce0: Pushed
b46ab70d5c29: Pushed
3b445027aaaa: Pushing [==================================>                ]  42.93MB/62.97MB
493616396902: Pushed
04604e14d645: Pushed
5215ed437036: Pushed
a91c4344dec4: Pushing [====================>                              ]  28.34MB/69.84MB
4a5f18b2b537: Pushing [==================================================>]  18.81MB
a2b8ce9d73a5: Pushing [==>                                                ]  22.95MB/560MB
59c47e88439d: Pushing [=======>                                           ]  26.27MB/183.3MB
afc6ebde4174: Waiting
5968baa45665: Waiting
```

## Deploy an Image from the Private Repository

### Pulling the Image from Private Repository

To pull the image `my-first-image-<username>:v1` from the private repository, specify the full URL as follows:

``` bash
docker pull my-registry.example.com/hands-on-containers/my-first-image-<username>:v1
```
### Running the Image from Private Repository

To run the image that you pulled from the private repository, again specify the full URL as follows:

``` bash
docker run --name my-first-container -d -p 8000:8000 my-registry.example.com/hands-on-containers/my-first-image-<username>:v1
```