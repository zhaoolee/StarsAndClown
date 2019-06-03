Aria2下载百度网盘的资源
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/bcc0daec42284d008579689029351e8c.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/a8d20dce1d32444ebdecc112b970db37.png)

## 获取aria2
```
https://github.com/aria2/aria2/releases/download/release-1.34.0/aria2-1.34.0-win-64bit-build1.zip
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/28dd5ca9f1d94dc7990484f7276815d5.png)

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

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/b166f99a425040d68da11afbdf3a11b3.png)


- 在aria2内新建文件夹`download`
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/702ce93a4db6419cb03c0f40de04d342.png)

- 在aria2内新建文件`aria2c.session`
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/3380c249a4844859a91b5fea840fadab.png)


## 将文件夹aria2放入c盘 根目录
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/763015bc78d4417388a306edb99f3768.png)

## 现在aria2已经安装成功了, 如果我们需要下载史莱姆的图片,则输入以下命令
```
C:\aria2\aria2c.exe http://i0.hdslb.com/bfs/bangumi/a4c0e0ccc44fe3949a734f546cf5bb07da925bad.png
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/0bfddff405dc49f880ec854936034aaa.png)

----
> aria2与我们平常用的迅雷不同, aria2没有图形化的界面, 下载任务完成后, 就自动退出了
> 如果你想让aria2拥有图形化界面, 就必须让aria2一直保持开启的状态

## 让aria2保持开启的状态
```
C:\aria2\aria2c.exe --conf-path=C:\aria2\aria2c.conf
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/db39c869414e4c639b79e04906e3c9c0.png)

## 为aria2安装图形化界面(安装chrome插件)
```
https://chrome.google.com/webstore/detail/yaaw-for-chrome/dennnbdlpgjgbcjfgaohdahloollfgoc
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/86a7aa88ad3247889a0d77339a34bd34.png)

- 开启插件
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/0fc1c88d9ddc4e6b83ea54b8d79a2bd0.png)
- 设置插件

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/07fac8fcf69a4e5bb7e6dc0a9b879b92.png)
> http://localhost:6800/jsonrpc

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/de3849e44a6d463aa753d7d502792799.png)




- 开始下载
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/966c324f7b114dbbb1b5b5be565b6c7f.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/8a98d27e95d6459b9106a53384eca7a0.png)

- 下载完成
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/3f2df7fb96174035b0cef389384743f2.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/ee593f6a77df40fa9164e4efb748f1ba.png)


## 下载百度盘的资源


- 获取分析百度资源链接的插件：
```
https://github.com/acgotaku/BaiduExporter
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/fff400a8fbaf410cacff9bc66e169944.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/245a9881b1044ee0b2747b7cd2835cc7.png)

- 改后缀名
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/b590fdcbd1114006abf64097003a09a2.png)
> 新版的chrome不允许开启外部导入的后缀为crx的插件,但允许导入 后缀为zip的插件

- 导入插件
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/d658009bb659477fbfdc8becfe1cf535.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/4c48adc1fef34eafbfd988e528fe209e.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/9ede0f1ea7ed4c20b747500db4297d38.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/da051305cdec4734a4eed9a6eb08e45e.png)

- 打开东京食尸鬼第四季资源链接:https://pan.baidu.com/s/1WoatWgHlboQoMdsy_tyLwA  密码:7sht
- 先登录
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/ad3f72d72f514ff5bd488d29bbc6a255.png)
- 获取资源
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/852f4af28895412daec217e7decd8994.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/4d65667226cb48e08595ee80838e44f4.png)
- 查看下载
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/045340dc07d64231959bad29ad05cfe7.png)

> 至此已经破解了百度网盘的限速
---
## 让UI界面更好看一些
- 扁平风网页UI：http://ariang.mayswind.net/latest
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/07afb4a369db4d969f08e23acea10a08.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/a3509293c2a949bf98b21de9d20233e4.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/d04e99ac32894b92953d39037437c73b.png)
- 迅雷风网页UI: https://wapznw.gitee.io/aria2desktop/
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/0a0a0bd43b46420187664a0ca7505a24.png)



- 下载资源

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/3ee19aea172a4f8ebb337ca8e3d01ca6.png)

> 至此, 你已经可以获取了三套不同的UI, 但不要把开启的命令行窗口关掉, 因为命令行窗口才是本体

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/e177cdc47d3847f6b5f3c987a68aa68a.png)

----

如果你对aria2非常满意, 可以设置aria2随系统启动

- 创建文件HideRun.vbs, 在其中写入以下语句
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/4ef6b1c20f6246cab12ce3ccef84ccbe.png)

```
CreateObject("WScript.Shell").Run "C:\aria2\aria2c.exe --conf-path=C:\aria2\aria2c.conf",0
```

- 将文件`HideRun.vbs`拖拽到`C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp`文件夹中

```
C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp
```
- 重启电脑, 重启完成后, 打开网页http://ariang.mayswind.net/latest 查看下载进度
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/52e3dbe096e24602b1f36192c2e3d2c2.png)

文中所使用的软件包,我已经整理好了, 可以关注公众号`jikeweikan`, 回复`下载神器`领取
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/d729e359952940a68198e7db3ca0aa96.png)



---

#### 本仓库Github链接: [https://github.com/aria2/aria2](https://github.com/aria2/aria2)

---

## 写在最后(我需要你的支持)
- 本文属于**Github星聚弃疗榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/StarsAndClown](https://github.com/zhaoolee/StarsAndClown)

- **Github星聚弃疗榜**, 为Github优秀创意项目写一封推荐信，让Github优秀项目造福人类~, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- StarsAndClown, Write a letter of recommendation for Github's outstanding creative projects, and let Github's outstanding projects benefit mankind~, If you like this project, I hope you can add a star 🌟 to this project.



