> 通过you-get成功下载最新的 史莱姆第14话，B站会员专属视频和相关弹幕：
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/9db54d9d7b1844556f60bada067e16b2.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/b8e284a3866cb60753958a43c189991b.png)
---
> you-get是一个优秀的开源下项目，优点是免费而且功能强大，开放源代码，无功能限制， 以下是具体操作步骤~

## 安装firefox
[下载地址](https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN&attribution_code=c291cmNlPXd3dy5nb29nbGUuY29tJm1lZGl1bT1yZWZlcnJhbCZjYW1wYWlnbj0obm90IHNldCkmY29udGVudD0obm90IHNldCk.&attribution_sig=5d58068ab4ba5299f75ac9c252cf1dc4d489fe60ad5cb511a02222e81f68e2a5)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/68252ff1e095f5c52e9f67911555f20d.png)
- 选择默认安装位置
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/8119f972a4bdb78e2bae8aa712efe901.png)
- 完成安装
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/2d843550c10c72b0ac580753483d3386.png)
- 获取firefox的cookies.sqlite的位置
```
C:\Users\alanli\AppData\Roaming\Mozilla\Firefox\Profiles\dln2mhmn.default\cookies.sqlite
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/ecfe6d4fe0214d176187483dc8560c81.png)

## 安装python3
[下载地址](https://www.python.org/ftp/python/3.7.2/python-3.7.2.exe)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/57a38b0ac2b18e4afd7273ff09d4630a.png)
- 右键， 以管理员身份安装Python
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/7ab276dca14bc1cb77392161ac99938a.png)
- 勾选将Python添加到系统变量，默认方式安装Python
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/8eb0cec09ebec6e2b47c6345e714d375.png)
- 安装成功， 关闭窗口
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/558928f9d8933776eb7102f404f70699.png)
- 按下快捷键 `Window+R`，输入cmd, 确定， 打开控制台
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/ac4f4590a0687670320b11a2804c288c.png)
- 在控制台输入`pip3 -V`, 回车，如果能看到输出的版本号， 则安装成功
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/e7b764995e01b4336b22b4ce64c0e2fa.png)

## 安装you-get
-  在控制台输入`pip3 install you-get`
```
pip3 install you-get
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/575603f463bbe94f3acc386dd68b2d64.png)

- 先下载一个非b站会员即可观看的视频
```
you-get https://www.bilibili.com/bangumi/play/ep250472
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/e8d8270e5f16a2fc3e467d3ea4d5806a.png)
- 下载完成
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/7f4d5819ceed80deb1b0156b7946b856.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/2e68010b5c98fb32b207116a495955fb.png)
- 下载一个B站会员专享视频

> 视频网站对会员专享视频做了限制， 所以必须先登录，登录后火狐浏览器会自动把会员的cookies写入我们前面提到的`C:\Users\alanli\AppData\Roaming\Mozilla\Firefox\Profiles\dln2mhmn.default\cookies.sqlite`文件

> 当我们下载视频时，就可以直接使用`C:\Users\alanli\AppData\Roaming\Mozilla\Firefox\Profiles\dln2mhmn.default\cookies.sqlite`作为会员令牌，这样就可以自由下载B站会员专享视频了

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/3969a12115c3ca57037f430753325055.png)
- 在控制台输入以下命令
```
you-get -c C:\Users\alanli\AppData\Roaming\Mozilla\Firefox\Profiles\dln2mhmn.default\cookies.sqlite https://www.bilibili.com/bangumi/play/ep250473
```
> 与上一个命令相比， 只是加了一个参数 `-c`, `-c`是cookies的缩写， `-c`后面追加了`cookies.sqlite`的绝对路径
- B站会员视频下载完成
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/1121b271e2c4f3e14ffe0d19b0c92f19.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/91ed33db927c8ae8483ac8e2c848cfc1.png)

## 试一下腾讯vip
```
you-get -c C:\Users\alanli\AppData\Roaming\Mozilla\Firefox\Profiles\dln2mhmn.default\cookies.sqlite https://v.qq.com/x/cover/p0pcfbdk318ry3m/o0632m7gvb7.html
```
>![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/45c60c8c4e0c89b221a5b7db0d43a193.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/ad3daa59cd8dff323aa0f40803eea452.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/6265223d0cf50c5c3880acec63f6775e.png)


## 播放弹幕文件(2019年1月10号更新)
- 虽然我们下载了xml的弹幕文件, 但大多数播放器是不支持直接播放xml文件的, 所以我们需要将xml格式的弹幕文件转换为ass格式,使用在线转换工具:https://tiansh.github.io/us-danmaku/bilibili/
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/8d8a7534e0e0ef0ca1325f3f0dca9e12.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/1f02a2525253b4733bd3cf84734dc827.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/b1a9537118f247837c18a460eed63d88.png)



## 小结：
- you-get是一个很好用的工具, 对于大多数人，命令行用起来有点不顺手，由于用的人很少， 所以没有被封堵限制

- you-get是开源软件， github地址https://github.com/soimort/you-get， 里面有支持的网站列表
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/588329c7358ff2e96958ce863c92a673.png)

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






