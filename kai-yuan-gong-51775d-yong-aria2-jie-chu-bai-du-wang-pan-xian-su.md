Aria2下载百度网盘的资源
> ![](https://upload-images.jianshu.io/upload_images/3203841-e973a2d6a0fbf54b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> ![](https://upload-images.jianshu.io/upload_images/3203841-c211ded52b83490e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 获取aria2
```
https://github.com/aria2/aria2/releases/download/release-1.34.0/aria2-1.34.0-win-64bit-build1.zip
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-91b764498ef7f524.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

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

> ![](https://upload-images.jianshu.io/upload_images/3203841-0f3025b474017d29.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


- 在aria2内新建文件夹`download`
> ![](https://upload-images.jianshu.io/upload_images/3203841-76fc8c3645fc47b9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 在aria2内新建文件`aria2c.session`
> ![](https://upload-images.jianshu.io/upload_images/3203841-a770a3524661dea3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 将文件夹aria2放入c盘 根目录
> ![](https://upload-images.jianshu.io/upload_images/3203841-7407f1c0bd893967.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 现在aria2已经安装成功了, 如果我们需要下载史莱姆的图片,则输入以下命令
```
C:\aria2\aria2c.exe http://i0.hdslb.com/bfs/bangumi/a4c0e0ccc44fe3949a734f546cf5bb07da925bad.png
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-bcaba678c1fe479e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

----
> aria2与我们平常用的迅雷不同, aria2没有图形化的界面, 下载任务完成后, 就自动退出了
> 如果你想让aria2拥有图形化界面, 就必须让aria2一直保持开启的状态

## 让aria2保持开启的状态
```
C:\aria2\aria2c.exe --conf-path=C:\aria2\aria2c.conf
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-3f7b6bbaa1df4685.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 为aria2安装图形化界面(安装chrome插件)
```
https://chrome.google.com/webstore/detail/yaaw-for-chrome/dennnbdlpgjgbcjfgaohdahloollfgoc
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-1cd9973136b8af22.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 开启插件
> ![](https://upload-images.jianshu.io/upload_images/3203841-923cec348265b40b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 设置插件

> ![](https://upload-images.jianshu.io/upload_images/3203841-a244fae2b69e66c5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> http://localhost:6800/jsonrpc

> ![](https://upload-images.jianshu.io/upload_images/3203841-0105254fe57da52e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




- 开始下载
> ![](https://upload-images.jianshu.io/upload_images/3203841-35eff76c9b9dfcd4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> ![](https://upload-images.jianshu.io/upload_images/3203841-dec786cd8074cd26.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 下载完成
> ![](https://upload-images.jianshu.io/upload_images/3203841-66ebcb3aa18b4084.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> ![](https://upload-images.jianshu.io/upload_images/3203841-cf2a22cdf954b297.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 下载百度盘的资源


- 获取分析百度资源链接的插件：
```
https://github.com/acgotaku/BaiduExporter
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-efbe0e4d7f243cda.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> ![](https://upload-images.jianshu.io/upload_images/3203841-71bbbf3f9719d986.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 改后缀名
> ![](https://upload-images.jianshu.io/upload_images/3203841-1d8ec4eda5d04569.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> 新版的chrome不允许开启外部导入的后缀为crx的插件,但允许导入 后缀为zip的插件

- 导入插件
> ![](https://upload-images.jianshu.io/upload_images/3203841-5463399ae3b704fa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> ![](https://upload-images.jianshu.io/upload_images/3203841-90b2a88955895b0f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> ![](https://upload-images.jianshu.io/upload_images/3203841-60b6c329d9b53b18.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> ![](https://upload-images.jianshu.io/upload_images/3203841-99c40d76a14a5110.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 打开东京食尸鬼第四季资源链接:https://pan.baidu.com/s/1WoatWgHlboQoMdsy_tyLwA  密码:7sht
- 先登录
> ![](https://upload-images.jianshu.io/upload_images/3203841-179b7db8683526f4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 获取资源
> ![](https://upload-images.jianshu.io/upload_images/3203841-21acea02edb3f8f8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> ![](https://upload-images.jianshu.io/upload_images/3203841-4e0ebf9dca24158f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 查看下载
> ![](https://upload-images.jianshu.io/upload_images/3203841-8752a850df2d4d8d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 至此已经破解了百度网盘的限速
---
## 让UI界面更好看一些
- 扁平风网页UI：http://ariang.mayswind.net/latest
> ![](https://upload-images.jianshu.io/upload_images/3203841-98d302cdd7792285.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> ![](https://upload-images.jianshu.io/upload_images/3203841-af015b59db180186.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> ![](https://upload-images.jianshu.io/upload_images/3203841-36e2ba5a9f385d92.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 迅雷风网页UI: https://wapznw.gitee.io/aria2desktop/
> ![](https://upload-images.jianshu.io/upload_images/3203841-294db0d385195767.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



- 下载资源

> ![](https://upload-images.jianshu.io/upload_images/3203841-5977b0be82b5bc07.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 至此, 你已经可以获取了三套不同的UI, 但不要把开启的命令行窗口关掉, 因为命令行窗口才是本体

> ![](https://upload-images.jianshu.io/upload_images/3203841-3b1dafb1805c3905.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

----

如果你对aria2非常满意, 可以设置aria2随系统启动

- 创建文件HideRun.vbs, 在其中写入以下语句
> ![](https://upload-images.jianshu.io/upload_images/3203841-21f4dcdfcbf66381.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
CreateObject("WScript.Shell").Run "C:\aria2\aria2c.exe --conf-path=C:\aria2\aria2c.conf",0
```

- 将文件`HideRun.vbs`拖拽到`C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp`文件夹中

```
C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp
```
- 重启电脑, 重启完成后, 打开网页http://ariang.mayswind.net/latest 查看下载进度
> ![](https://upload-images.jianshu.io/upload_images/3203841-809c4619241b58bd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

文中所使用的软件包,我已经整理好了, 可以关注公众号`jikeweikan`, 回复`下载神器`领取
> ![](https://upload-images.jianshu.io/upload_images/3203841-03f07c93a06b23ac.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



---

#### 本仓库Github链接: [https://github.com/aria2/aria2](https://github.com/aria2/aria2)

---

## 写在最后(我需要你的支持)
- 本文属于**Github星聚弃疗榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/StarsAndClown](https://github.com/zhaoolee/StarsAndClown)

- **Github星聚弃疗榜**, 为Github优秀创意项目写一封推荐信，让Github优秀项目造福人类~, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- StarsAndClown, Write a letter of recommendation for Github's outstanding creative projects, and let Github's outstanding projects benefit mankind~, If you like this project, I hope you can add a star 🌟 to this project.



