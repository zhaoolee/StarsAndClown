> 通过you-get成功下载最新的 史莱姆第14话，B站会员专属视频和相关弹幕：
> ![](https://upload-images.jianshu.io/upload_images/3203841-4c60baaed9f667de.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> ![](https://upload-images.jianshu.io/upload_images/3203841-c5621a4596a24303.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
---
> you-get是一个优秀的开源下项目，优点是免费而且功能强大，开放源代码，无功能限制， 以下是具体操作步骤~

## 安装firefox
[下载地址](https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN&attribution_code=c291cmNlPXd3dy5nb29nbGUuY29tJm1lZGl1bT1yZWZlcnJhbCZjYW1wYWlnbj0obm90IHNldCkmY29udGVudD0obm90IHNldCk.&attribution_sig=5d58068ab4ba5299f75ac9c252cf1dc4d489fe60ad5cb511a02222e81f68e2a5)
> ![](https://upload-images.jianshu.io/upload_images/3203841-98dc65dd161b799a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 选择默认安装位置
> ![](https://upload-images.jianshu.io/upload_images/3203841-b9b79f0c8e67f875.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 完成安装
> ![](https://upload-images.jianshu.io/upload_images/3203841-a8293a64aa1e20f5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 获取firefox的cookies.sqlite的位置
```
C:\Users\alanli\AppData\Roaming\Mozilla\Firefox\Profiles\dln2mhmn.default\cookies.sqlite
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-2446552cdf4d1914.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 安装python3
[下载地址](https://www.python.org/ftp/python/3.7.2/python-3.7.2.exe)
> ![](https://upload-images.jianshu.io/upload_images/3203841-13e05ad85f06c4ff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 右键， 以管理员身份安装Python
> ![](https://upload-images.jianshu.io/upload_images/3203841-8a5bc4261893e00f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 勾选将Python添加到系统变量，默认方式安装Python
> ![](https://upload-images.jianshu.io/upload_images/3203841-406d9cf5adf50bb8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 安装成功， 关闭窗口
> ![](https://upload-images.jianshu.io/upload_images/3203841-85d91f6b778ffdc3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 按下快捷键 `Window+R`，输入cmd, 确定， 打开控制台
> ![](https://upload-images.jianshu.io/upload_images/3203841-f48484bf32e3bf6a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 在控制台输入`pip3 -V`, 回车，如果能看到输出的版本号， 则安装成功
> ![](https://upload-images.jianshu.io/upload_images/3203841-35eb86d5a4a3edde.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 安装you-get
-  在控制台输入`pip3 install you-get`
```
pip3 install you-get
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-8e237ccc433c87ea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 先下载一个非b站会员即可观看的视频
```
you-get https://www.bilibili.com/bangumi/play/ep250472
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-d61c4811a0f7aeeb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 下载完成
> ![](https://upload-images.jianshu.io/upload_images/3203841-31f7f13baf24c1a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> ![](https://upload-images.jianshu.io/upload_images/3203841-34000ee0ad3fb3c0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 下载一个B站会员专享视频

> 视频网站对会员专享视频做了限制， 所以必须先登录，登录后火狐浏览器会自动把会员的cookies写入我们前面提到的`C:\Users\alanli\AppData\Roaming\Mozilla\Firefox\Profiles\dln2mhmn.default\cookies.sqlite`文件

> 当我们下载视频时，就可以直接使用`C:\Users\alanli\AppData\Roaming\Mozilla\Firefox\Profiles\dln2mhmn.default\cookies.sqlite`作为会员令牌，这样就可以自由下载B站会员专享视频了

> ![](https://upload-images.jianshu.io/upload_images/3203841-d107f65f4cd4b14b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 在控制台输入以下命令
```
you-get -c C:\Users\alanli\AppData\Roaming\Mozilla\Firefox\Profiles\dln2mhmn.default\cookies.sqlite https://www.bilibili.com/bangumi/play/ep250473
```
> 与上一个命令相比， 只是加了一个参数 `-c`, `-c`是cookies的缩写， `-c`后面追加了`cookies.sqlite`的绝对路径
- B站会员视频下载完成
> ![](https://upload-images.jianshu.io/upload_images/3203841-836fd40ff0919fca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> ![](https://upload-images.jianshu.io/upload_images/3203841-ec40593fd7fc17a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 试一下腾讯vip
```
you-get -c C:\Users\alanli\AppData\Roaming\Mozilla\Firefox\Profiles\dln2mhmn.default\cookies.sqlite https://v.qq.com/x/cover/p0pcfbdk318ry3m/o0632m7gvb7.html
```
>![](https://upload-images.jianshu.io/upload_images/3203841-da54fa23895c99fb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> ![](https://upload-images.jianshu.io/upload_images/3203841-f93b196e0f56c9fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> ![](https://upload-images.jianshu.io/upload_images/3203841-6dd78073324f2685.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 播放弹幕文件(2019年1月10号更新)
- 虽然我们下载了xml的弹幕文件, 但大多数播放器是不支持直接播放xml文件的, 所以我们需要将xml格式的弹幕文件转换为ass格式,使用在线转换工具:https://tiansh.github.io/us-danmaku/bilibili/
> ![](https://upload-images.jianshu.io/upload_images/3203841-81f1039cb77f6da0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> ![](https://upload-images.jianshu.io/upload_images/3203841-c3ef999801f0660f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> ![](https://upload-images.jianshu.io/upload_images/3203841-577a554dcb4c008a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



## 小结：
- you-get是一个很好用的工具, 对于大多数人，命令行用起来有点不顺手，由于用的人很少， 所以没有被封堵限制

- you-get是开源软件， github地址https://github.com/soimort/you-get， 里面有支持的网站列表
> ![](https://upload-images.jianshu.io/upload_images/3203841-db6071084b14f461.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- you-get 是一个通用的下载工具，不仅可以通过url下载视频， 还可以通过url下载图片，音乐等静态文件， 另外you-get可以使用关键词下载google最相关的视频，但国内用不了google，所以这个功能也就废了。。。

小技巧：其实Windows对you-get的支持并不太好，如果视频在windows下载失败，可以换用Linux或Mac试一下，相信you-get不会让你失望~

写这篇文章也是不容易，路由器断网一次，简书服务崩溃一次，还好没丢失太多的文字和图片的记录，安慰自己“好文多磨”吧！ 如果感觉学到了东西，记得点个赞哦 ~ 


---

#### 本仓库Github链接: [https://github.com/soimort/you-get](https://github.com/soimort/you-get)

---

## 写在最后(我需要你的支持)
- 本文属于**Github星聚弃疗榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/StarsAndClown](https://github.com/zhaoolee/StarsAndClown)

- **Github星聚弃疗榜**, 为Github优秀创意项目写一封推荐信，让Github优秀项目造福人类~, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- StarsAndClown, Write a letter of recommendation for Github's outstanding creative projects, and let Github's outstanding projects benefit mankind~, If you like this project, I hope you can add a star 🌟 to this project.






