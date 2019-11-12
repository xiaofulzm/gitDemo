git   branch dev    创建分支

git branch      查看当前有几个分支

git   checkout      切换分支

git checkout  -b  dev       联合指令    创建并切换

git  merge dev     在当前分支上 把Dev分支的内容  覆盖过来

git branch  -d  dev    删除分支

 git merge --no-ff -m "merge with no-ff" dev        准备合并 dev 分支，请注意--no-ff 参数，表示禁用 Fast forward 

 git log --graph                      合并后，我们用 git log --graph 看看分支历史：

git stash   暂存

git stash list   当前的列表   存储着某一次的状态

git stash appy     恢复

​	注意: 恢复工作现场时 要对 stash的内容进行删除 一是用 git stash apply 恢复，但是恢复后，stash内容并不删除，你需要用 git stash drop 来 删除；

git branch  -D  dev     强制删除

git  remote  -v     查看远程库信息

git   tag  v1.1    添加版本号

git tag v0.9 b7d5d8ec // git tag 版本号 需要打标签的那个commit的版本号

 git tag // 该指令可以查看当前的标签列表

 git show v0.9 // 查看特定版本的提交信息

 git tag -a v0.1 -m "version 0.1 初始版" 01ec74f751     还可以创建带有说明的标签，用-a 指定标签名，-m 指定说明文字
git tag -d v0.  删除 版本号



