Aria2下载百度网盘的资源
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/97b93c854c9d82b43d50a280d745decf.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/ddf5d738c11c09e7e5e83c65dc046122.png)

## 获取aria2
```
https://github.com/aria2/aria2/releases/download/release-1.34.0/aria2-1.34.0-win-64bit-build1.zip
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/ff9d6af937c24f3468756201d63e2651.png)

-  新建一个名为aria2的文件夹,将解压获得的aria2.exe加入aria2文件夹, 在文件夹aria2内新建配置文件aria2c.txt, 输入以下内容

```
#用户名
#rpc-user=zhaoolee
#密码
#rpc-passwd=zhaooleepw
#上面的认证方式不建议使用,建议使用下面的token方式
#设置加密的密钥
#rpc-secret=token
#允许rpc
enable-rpc=true
#允许所有来源, web界面跨域权限需要
rpc-allow-origin-all=true
#允许外部访问，false的话只监听本地端口
rpc-listen-all=true
#RPC端口, 仅当默认端口被占用时修改
#rpc-listen-port=6800
#最大同时下载数(任务数), 路由建议值: 3
max-concurrent-downloads=5
#断点续传
continue=true
#同服务器连接数
max-connection-per-server=5
#最小文件分片大小, 下载线程数上限取决于能分出多少片, 对于小文件重要
min-split-size=10M
#单文件最大线程数, 路由建议值: 5
split=10
#下载速度限制
max-overall-download-limit=0
#单文件速度限制
max-download-limit=0
#上传速度限制
max-overall-upload-limit=0
#单文件速度限制
max-upload-limit=0
#断开速度过慢的连接
#lowest-speed-limit=0
#验证用，需要1.16.1之后的release版本
#referer=*
#文件保存路径为aria2内的download文件夹
dir=C:\aria2\download
#文件缓存, 使用内置的文件缓存, 如果你不相信Linux内核文件缓存和磁盘内置缓存时使用, 需要1.16及以上版本
#disk-cache=0
#另一种Linux文件缓存方式, 使用前确保您使用的内核支持此选项, 需要1.15及以上版本(?)
#enable-mmap=true
#文件预分配, 能有效降低文件碎片, 提高磁盘性能. 缺点是预分配时间较长
#所需时间 none < falloc ? trunc << prealloc, falloc和trunc需要文件系统和内核支持
file-allocation=prealloc

## 进度保存相关 ##

# 从会话文件中读取下载任务
input-file=C:\aria2\aria2c.session
# 在Aria2退出时保存`错误/未完成`的下载任务到会话文件
save-session=C:\aria2\aria2c.session
# 定时保存会话, 0为退出时才保存, 需1.16.1以上版本, 默认:0
save-session-interval=6
force-save=true
```

- 保存`aria2c.txt`, 然后将`aria2c.txt`重命名为`aria2c.conf`

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/0cb415588b15f22c605ca827f84a1b9e.png)


- 在aria2内新建文件夹`download`
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/a211d2ef3c5e623b84a8f884946321df.png)

- 在aria2内新建文件`aria2c.session`
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/ee93cf0187383116779b2893c695f6bb.png)


## 将文件夹aria2放入c盘 根目录
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/a5a0456ba83aaec14df9a59e3f2d8294.png)

## 现在aria2已经安装成功了, 如果我们需要下载史莱姆的图片,则输入以下命令
```
C:\aria2\aria2c.exe http://i0.hdslb.com/bfs/bangumi/a4c0e0ccc44fe3949a734f546cf5bb07da925bad.png
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/d7ae3094f36471a9dc6dad446af014c3.png)

----
> aria2与我们平常用的迅雷不同, aria2没有图形化的界面, 下载任务完成后, 就自动退出了
> 如果你想让aria2拥有图形化界面, 就必须让aria2一直保持开启的状态

## 让aria2保持开启的状态
```
C:\aria2\aria2c.exe --conf-path=C:\aria2\aria2c.conf
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/9d5b149535dd810acaaa36c1a46f2603.png)

## 为aria2安装图形化界面(安装chrome插件)
```
https://chrome.google.com/webstore/detail/yaaw-for-chrome/dennnbdlpgjgbcjfgaohdahloollfgoc
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/2b976048c879c78f187b431f24e3dd4d.png)

- 开启插件
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/ba4dbf58f5112200fee1ed82e0b8f0c4.png)
- 设置插件

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/e1d0175103e984ddb64aa1b5ca9d9edf.png)
> http://localhost:6800/jsonrpc

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/58e45d2e000f9d0555a06dc30770fea4.png)




- 开始下载
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/c533281831a747f80a391f88b46cdfc5.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/28241383bc5ece64f85b28e1505dd170.png)

- 下载完成
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/897e253f60aed0c4e46178b3afc350c6.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/66d94f90e8b61e9bb437e92025bde5f3.png)


## 下载百度盘的资源


- 获取分析百度资源链接的插件：
```
https://github.com/acgotaku/BaiduExporter
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/c7616f2fcc54228927bcea43e5c24bc1.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/692e7ce11eefce59fd5cd5feb62ac74d.png)

- 改后缀名
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/211f0a5f132bef624f2c199329c4fa9a.png)
> 新版的chrome不允许开启外部导入的后缀为crx的插件,但允许导入 后缀为zip的插件

- 导入插件
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/ece4d2e4d824474e2ac3a86f08cc1b76.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/e215d8744014785b644a2d569088638a.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/f05dc11bdbe51769b29784a3644583b2.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/24a8c33992bbbfcded01b1368ab3b1a1.png)

- 打开东京食尸鬼第四季资源链接:https://pan.baidu.com/s/1WoatWgHlboQoMdsy_tyLwA  密码:7sht
- 先登录
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/940f86c6216dd35cbc35e0b84912fc2e.png)
- 获取资源
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/278aab36fbcf8228cfc344c5ca0d9b08.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/22d1eb6a65d99177fdd6a79dafcfc317.png)
- 查看下载
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/466207a51e04a8434624e1a1348d22b9.png)

> 至此已经破解了百度网盘的限速
---
## 让UI界面更好看一些
- 扁平风网页UI：http://ariang.mayswind.net/latest
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/de6fc0b1a940ed3a27dd783297acd4f0.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/86c5df0da52017308aa9a4dfa7a0be59.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/b852895a7ff041d7da64dd8409de7ab3.png)
- 迅雷风网页UI: https://wapznw.gitee.io/aria2desktop/
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/ce5e2bf3c4e3921c61f1dd9f08e4bc01.png)



- 下载资源

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/5cf31b9dd5373d9b87cc21d02ba15d51.png)

> 至此, 你已经可以获取了三套不同的UI, 但不要把开启的命令行窗口关掉, 因为命令行窗口才是本体

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/58b22411dc5b40c9114c28261926ef17.png)

----

如果你对aria2非常满意, 可以设置aria2随系统启动

- 创建文件HideRun.vbs, 在其中写入以下语句
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/4ff0d42a78dffaec15fd75a4a4d1a4d3.png)

```
CreateObject("WScript.Shell").Run "C:\aria2\aria2c.exe --conf-path=C:\aria2\aria2c.conf",0
```

- 将文件`HideRun.vbs`拖拽到`C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp`文件夹中

```
C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp
```
- 重启电脑, 重启完成后, 打开网页http://ariang.mayswind.net/latest 查看下载进度
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/29a0bd3a9a16692afb6b9fa96f402271.png)

文中所使用的软件包,我已经整理好了, 可以关注公众号`jikeweikan`, 回复`下载神器`领取
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/d402b1883754d4cf77e570f644e531ef.png)



---

#### 本仓库Github链接: [https://github.com/aria2/aria2](https://github.com/aria2/aria2)

---

## 写在最后(我需要你的支持)
- 本文属于**Github星聚弃疗榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/StarsAndClown](https://github.com/zhaoolee/StarsAndClown)

- **Github星聚弃疗榜**, 为Github优秀创意项目写一封推荐信，让Github优秀项目造福人类~, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- StarsAndClown, Write a letter of recommendation for Github's outstanding creative projects, and let Github's outstanding projects benefit mankind~, If you like this project, I hope you can add a star 🌟 to this project.



