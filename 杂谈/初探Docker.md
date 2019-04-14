# Docker简单使用

## 镜像相关

* 首先我们需要获取一个镜像,可以从镜像中心仓库拉取.先查看一下有没有相关的镜像`docker search <image-name>`
* 然后就可以拉取我们想要获取的镜像`docker image pull <image-name>`
* 拉取完成后我们查看一下本地镜像`docker image ls`
* 当有的镜像不再使用之后可以删除节省空间`docker image rm <image-name>`
* 如果不知道这获取的镜像怎么使用,可以查看镜像的详细信息`docker image inspect <image-name>`
* 有时候镜像非常大,可能会需要我们根据`Dockerfile`来构建镜像`docker image build [options] PATH`路径应该是一个目录里面包含了`Dockerfile`和相应的资源,默认会在此目录下寻找`Dockerfile`,也可以指定不同位置`-f <dockerfile-path>`

## 容器相关

* 容器是由镜像创建而成的,容器是运行的实体.镜像与容器的关系类似于程序和进程的关系.
* 创建一个容器使用`docker container create --name <container-name> <image-name>`由给定的镜像创建容器,可以添加相应的参数
* 查看本地的镜像`docker container ls`只能显示运行状态的镜像.查看所有镜像可以加上`-a`参数
* 创建好一个容器就可以运行它了`docker container start <container-name>`
* 可以省略以上两步而使用`docker container run <image-name>`直接由镜像生成一个运行的容器,加上`-d`可以让容器在后台运行
* 当我们想操作容器时,可以在容器中执行相应的命令`docker container exec <container-name> command`特别的,利用这条命令进入容器`docker container exec -it <container-name> /bin/bash`
* 当我们对一个容器做了一些操作可能想将这个容器保存下来制作成我们自己的镜像`docker container commit [options] <container-name> <repository:tag>`

## 其他

* 如果我么自己制作了镜像,就可以将此镜像推送到自己的仓库中,首先`docker login`登陆自己的`dockerhub`账号,然后`docker image push NAME[:tag]`将镜像推送上去了
