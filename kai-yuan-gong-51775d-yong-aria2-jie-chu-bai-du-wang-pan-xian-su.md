Aria2下载百度网盘的资源
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/9e7dc2f30f24494b85323ea0f19f0f65.png)
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/98ca3c68aba34bdfb53c4b6e2d6ee31f.png)

## 获取aria2
```
https://github.com/aria2/aria2/releases/download/release-1.34.0/aria2-1.34.0-win-64bit-build1.zip
```
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/e03f79da6b9e4574ad05bcff33e7ea4d.png)

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

> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/0e594ac96d884e79b3f17b47b36647c9.png)


- 在aria2内新建文件夹`download`
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/9db2121be2b84633abf5b2124ea62884.png)

- 在aria2内新建文件`aria2c.session`
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/8c66fd663ef9415fb508d568a69d83d6.png)


## 将文件夹aria2放入c盘 根目录
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/670385eaa41d4dd6a8f1dbdee5676cbe.png)

## 现在aria2已经安装成功了, 如果我们需要下载史莱姆的图片,则输入以下命令
```
C:\aria2\aria2c.exe http://i0.hdslb.com/bfs/bangumi/a4c0e0ccc44fe3949a734f546cf5bb07da925bad.png
```
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/575de9f06a0b43eb8c53d8d3997b4c64.png)

----
> aria2与我们平常用的迅雷不同, aria2没有图形化的界面, 下载任务完成后, 就自动退出了
> 如果你想让aria2拥有图形化界面, 就必须让aria2一直保持开启的状态

## 让aria2保持开启的状态
```
C:\aria2\aria2c.exe --conf-path=C:\aria2\aria2c.conf
```
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/9e1e2395ab5c47b79ed26a002db4fb96.png)

## 为aria2安装图形化界面(安装chrome插件)
```
https://chrome.google.com/webstore/detail/yaaw-for-chrome/dennnbdlpgjgbcjfgaohdahloollfgoc
```
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/6c17409024e1414ba950eb4063dd0f5a.png)

- 开启插件
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/d07ae34925144969b136334e70e95c73.png)
- 设置插件

> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/ae214824997b4acf93b0da33677b7dcd.png)
> http://localhost:6800/jsonrpc

> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/737852a690d848baaa39395f8019ba4d.png)




- 开始下载
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/933364bd6a5f472eb3848a0073f94066.png)
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/64584a72bc7a41b2b80cc8aef541d06c.png)

- 下载完成
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/7e56868fff464ba1822a820f95b583f7.png)
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/9938abd852864b05afbbc0b7ddd087ba.png)


## 下载百度盘的资源


- 获取分析百度资源链接的插件：
```
https://github.com/acgotaku/BaiduExporter
```
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/d9264a09540441f0b8131e3757eff3f8.png)

> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/cc68a7f0e5fa40e09550d55d161d1573.png)

- 改后缀名
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/accb99ea2f9c44b28ac28367b0e83391.png)
> 新版的chrome不允许开启外部导入的后缀为crx的插件,但允许导入 后缀为zip的插件

- 导入插件
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/e09de476298e44028e7bee5685e0a08f.png)

> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/5bfc5f9d46b04db8ac58180c957ffccc.png)

> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/9d7400b5fb4c42b2bcb6ea339141d797.png)

> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/6644b74af3e645f89c8115885e6b8710.png)

- 打开东京食尸鬼第四季资源链接:https://pan.baidu.com/s/1WoatWgHlboQoMdsy_tyLwA  密码:7sht
- 先登录
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/61514967de3f4e65ad1326c329384d53.png)
- 获取资源
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/3b676230284f4fa78e8fc0e661e9881a.png)
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/0f6514d771fd471484ccd2f54ebc95ef.png)
- 查看下载
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/6315c485c17849429568f9f0838e9eea.png)

> 至此已经破解了百度网盘的限速
---
## 让UI界面更好看一些
- 扁平风网页UI：http://ariang.mayswind.net/latest
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/9a2f5a522c0b470f96b0c7ac07add6e5.png)
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/119566115a3348dcbfdf6c923cbb7afe.png)
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/21536cd43b68400a99847fc8d7a60859.png)
- 迅雷风网页UI: https://wapznw.gitee.io/aria2desktop/
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/6d0859568e554d70b62cdbbdd372f474.png)



- 下载资源

> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/e58b9c101c934625a7733dc6ae14e879.png)

> 至此, 你已经可以获取了三套不同的UI, 但不要把开启的命令行窗口关掉, 因为命令行窗口才是本体

> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/ad59c6a0191c4fe0bf038ccee29b2dde.png)

----

如果你对aria2非常满意, 可以设置aria2随系统启动

- 创建文件HideRun.vbs, 在其中写入以下语句
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/98cfe09efece4dada82b29bec154ddf9.png)

```
CreateObject("WScript.Shell").Run "C:\aria2\aria2c.exe --conf-path=C:\aria2\aria2c.conf",0
```

- 将文件`HideRun.vbs`拖拽到`C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp`文件夹中

```
C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp
```
- 重启电脑, 重启完成后, 打开网页http://ariang.mayswind.net/latest 查看下载进度
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/49243b4dfc5940f298a6dc0e960558d9.png)

文中所使用的软件包,我已经整理好了, 可以关注公众号`jikeweikan`, 回复`下载神器`领取
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/63e9352cf52443a4bc531a56c9a43e8c.png)



---

#### 本仓库Github链接: [https://github.com/aria2/aria2](https://github.com/aria2/aria2)

---

## 写在最后(我需要你的支持)
- 本文属于**Github星聚弃疗榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/StarsAndClown](https://github.com/zhaoolee/StarsAndClown)

- **Github星聚弃疗榜**, 为Github优秀创意项目写一封推荐信，让Github优秀项目造福人类~, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- StarsAndClown, Write a letter of recommendation for Github's outstanding creative projects, and let Github's outstanding projects benefit mankind~, If you like this project, I hope you can add a star 🌟 to this project.



