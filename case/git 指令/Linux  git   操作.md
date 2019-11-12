mkdir    创建目录

pwd     显示当前目录

git  init    安装git

​	而图片、视频这些二进制文件，虽然也能由版本控制系统管理，但没法跟踪文件的变化，只能把二 进制文件每次改动串起来，也就是只知道图片从100KB改成了120KB，但到底改了啥，版本控制系统不 知道，也没法知道。( word是二进制格式,不算是纯文本文件 ) 

git  status    文件提交状态

git add demo.txt    提交给系统

git commit   {-m  " 提交说明"  }    提交给仓库

git  diff   对比    变了的所有文件     

git diff    readme.txt     对比  变了的单个文件

git log    历史的所有的更改

q   退出

git  diff    历史版本的commit  ID       对比历史版本

git  log  --pretty(美化)=oneline （一行）           只显示 一行    历史版本的commit  ID   

 git reflog

git reset     回滚指令

git restore --staged  readme.txt       挪出暂缓区

git  -- checkout  --readme.txt     将挪出暂缓区的文件    撤销修改

git  rm  file   删除文件



 ssh-keygen -t rsa -C "youremail@example.com"   创建本地秘钥

git push -u origin master   把本地的文件推送到GitHub上

git pull origin "分支名"     把GitHub上的文件拉到本地

​	和本地进行合并 然后在提交

git remote  rm origin      解除绑定

git clone   + 要下载的文件  地址           下载别人的项目源码

