> 通过you-get成功下载最新的 史莱姆第14话，B站会员专属视频和相关弹幕：
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/a5519e75cd4c4cdbb6874e646fc8b34d.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/572b778ef2b24fc29edcdd06c082d1ae.png)
---
> you-get是一个优秀的开源下项目，优点是免费而且功能强大，开放源代码，无功能限制， 以下是具体操作步骤~

## 安装firefox
[下载地址](https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN&attribution_code=c291cmNlPXd3dy5nb29nbGUuY29tJm1lZGl1bT1yZWZlcnJhbCZjYW1wYWlnbj0obm90IHNldCkmY29udGVudD0obm90IHNldCk.&attribution_sig=5d58068ab4ba5299f75ac9c252cf1dc4d489fe60ad5cb511a02222e81f68e2a5)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/2b8d52f0e6a04554b823d4cb29b7aa73.png)
- 选择默认安装位置
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/fd16ea5bea2246beaa44908d7f922014.png)
- 完成安装
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/55dfaedc12f54fb3a02e91816ee8a723.png)
- 获取firefox的cookies.sqlite的位置
```
C:\Users\alanli\AppData\Roaming\Mozilla\Firefox\Profiles\dln2mhmn.default\cookies.sqlite
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/cf2f9131edd4429192d6b3f5a8c94caf.png)

## 安装python3
[下载地址](https://www.python.org/ftp/python/3.7.2/python-3.7.2.exe)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/ade2648e786a4043a52eb533a6f1888b.png)
- 右键， 以管理员身份安装Python
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/eb9588ed02834fb093fee47837940478.png)
- 勾选将Python添加到系统变量，默认方式安装Python
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/d94094fb71b34d0abe43650ba2a69d5c.png)
- 安装成功， 关闭窗口
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/0487d0e3dbef4c78ad6b8e59fe193302.png)
- 按下快捷键 `Window+R`，输入cmd, 确定， 打开控制台
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/5cccf13d07f64e0380b95b7cd71a9b68.png)
- 在控制台输入`pip3 -V`, 回车，如果能看到输出的版本号， 则安装成功
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/9e92a99407594964b4fc94b015d68566.png)

## 安装you-get
-  在控制台输入`pip3 install you-get`
```
pip3 install you-get
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/a2871b2ef9684b2cb56a20e1560aa183.png)

- 先下载一个非b站会员即可观看的视频
```
you-get https://www.bilibili.com/bangumi/play/ep250472
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/9ac8a40b5a1b4a7e96eef79d2f43e5e2.png)
- 下载完成
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/ff02c76cb7cf4d748d135626a1207995.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/c9c787980416479084902047b40ab72b.png)
- 下载一个B站会员专享视频

> 视频网站对会员专享视频做了限制， 所以必须先登录，登录后火狐浏览器会自动把会员的cookies写入我们前面提到的`C:\Users\alanli\AppData\Roaming\Mozilla\Firefox\Profiles\dln2mhmn.default\cookies.sqlite`文件

> 当我们下载视频时，就可以直接使用`C:\Users\alanli\AppData\Roaming\Mozilla\Firefox\Profiles\dln2mhmn.default\cookies.sqlite`作为会员令牌，这样就可以自由下载B站会员专享视频了

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/396b58f5174e4c49803da7c93770de81.png)
- 在控制台输入以下命令
```
you-get -c C:\Users\alanli\AppData\Roaming\Mozilla\Firefox\Profiles\dln2mhmn.default\cookies.sqlite https://www.bilibili.com/bangumi/play/ep250473
```
> 与上一个命令相比， 只是加了一个参数 `-c`, `-c`是cookies的缩写， `-c`后面追加了`cookies.sqlite`的绝对路径
- B站会员视频下载完成
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/6e250d6a0cc54419826c377c0baf2544.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/25a8f2a770f6428d9d729c20bd0fca54.png)

## 试一下腾讯vip
```
you-get -c C:\Users\alanli\AppData\Roaming\Mozilla\Firefox\Profiles\dln2mhmn.default\cookies.sqlite https://v.qq.com/x/cover/p0pcfbdk318ry3m/o0632m7gvb7.html
```
>![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/3d94bf4095d246d0aae32cad616196cd.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/eb870060e0304c39b4cd7de0d49830c2.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/6666e9d022ac4fc49d4c98e92f1ebf9c.png)


## 播放弹幕文件(2019年1月10号更新)
- 虽然我们下载了xml的弹幕文件, 但大多数播放器是不支持直接播放xml文件的, 所以我们需要将xml格式的弹幕文件转换为ass格式,使用在线转换工具:https://tiansh.github.io/us-danmaku/bilibili/
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/1eddef95f9fd4697b0492201bb66c97b.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/771a24187fd74204968a5729a26a4c16.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/85fcc48685b5456f8def1fa7cfac1862.png)



## 小结：
- you-get是一个很好用的工具, 对于大多数人，命令行用起来有点不顺手，由于用的人很少， 所以没有被封堵限制

- you-get是开源软件， github地址https://github.com/soimort/you-get， 里面有支持的网站列表
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/5de914e1735a46469bf193b6a0b44574.png)

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






