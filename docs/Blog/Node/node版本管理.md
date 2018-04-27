# node版本管理

## nvm 和 n

>nvm

  Node版本管理器--nvm，可以运行在多种操作系统上。nvm for windows 是使用go语言编写的软件,可以在 windows 系统上使用
  <https://github.com/coreybutler/nvm-windows>

>n

  这意味着，我们在使用 n 管理 node 版本前，首先需要一个 node 环境。我们或者用 Homebrew 来安装一个 node，或者从官网下载 pkg 来安装，总之我们得先自己装一个 node —— n 本身是没法给你装的。

  然后我们可以使用 n 来安装不同版本的 node。

  在安装的时候，n 会先将指定版本的 node 存储下来，然后将其复制到我们熟知的路径 /usr/local/bin，非常简单明了。当然由于 n 会操作到非用户目录，所以需要加 sudo 来执行命令。

  所以这样看来，n 在其实现上是一个非常易理解的方案

  因为我的电脑是 windows 系统，所以使用的是 nvm for windows

## nvm for windows

* 下载地址： <https://github.com/coreybutler/nvm-windows/releases>

![Alt text](/nvmPic.png)

* nvm-noinstall.zip： 这个是绿色免安装版本，但是使用之前需要配置
* nvm-setup.zip：这是一个安装包，下载之后点击安装，无需配置就可以使用，方便
* Source code(zip)：zip压缩的源码
* Sourc code(tar.gz)：tar.gz的源码，一般用于*nix系统

  我这里是下载的 nvm-setup.zip

### 安装和升级

#### 安装之前的操作