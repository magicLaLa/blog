---
sidebarDepth: 3
---
# 关于git的总结

## git操作

### 合并某个分支上的文件到应一个分支、回退到某个版本和 远程服务器上面回退到某个版本

1. git 合并某个分支上的文件到另一个分支上

        git checkout branch <path>
2. git 本地回退到某个版本

        git reset --hard 23bc94cf7e3c74c33dd4575dfbf72d6647333795
3. git 远程服务器上面回退到某个版本

        可以 先把本地回退到某个版本
            例如：git reset --hard 23bc94cf7e3c74c33dd4575dfbf72d6647333795
        然后再 强推到远程上面
            git push -f

### git设置、PowerShell 插件 posh-git 安装、可视化界面的项目版本控制软件，适用于git项目管理

* Git 设置

        # 设置提交时的用户信息
        git config --global user.name "用户名"
        git config --global user.email "邮箱"

        # 禁用git自动LF转CRLF
        git config --global core.autocrlf false

        # 生成密钥（默认文件名id_rsa）
        # -t 密钥类型
        # -C 注释
        ssh-keygen -t rsa -C "邮箱"

* PowerShell 插件 posh-git 安装

        VSCode 默认使用PowerShell，启动powershell，分别执行下面3个命令（提示都输入Yes）

        # 1.设置权限
        Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Confirm

        # 2.使用PowerShellGet安装
        PowerShellGet\Install-Module posh-git -Scope CurrentUser

        # 3.全局导入posh-git
        Add-PoshGitToProfile -AllHosts

* SourceTree拥有可视化界面的项目版本控制软件，适用于git项目管理

  基本使用: <https://www.cnblogs.com/tian-xie/p/6264104.html>

## git的报错信息

### 在 git commit 或者 git add 的时候报 Git: fatal: Unable to create 'f:/Vue-learning/.git/index.lock': File exists. 这个错误

* git 遇到这个错误时，需要把 当前项目下 .git -> index.lock 这个文件删除即可

![Alt text](/1323758-20180206172305857-1172749425.png)

### git merge 冲突，提示You have not concluded your merge (MERGE_HEAD exists)

        You have not concluded your merge (MERGE_HEAD exists).
        Please, commit your changes before you can merge.

        可以先撤销合并(git的版本不同撤销命令也不同)

        git merge --abort [Since git version 1.7.4]
        git reset --merge [prior git versions]