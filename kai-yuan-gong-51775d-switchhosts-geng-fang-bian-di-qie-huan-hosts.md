## 浏览器如何得知网站服务器的ip?
-  向浏览器输入网址 [https://www.baidu.com/](http://www.baidu.com/),浏览器会查询本地计算机有没有存储域名baidu.com 对应的服务器IP, 如果存储了,浏览器直接向目标服务器发起三次握手的连接请求;如果没有存储, 则向DNS服务器发起"查询baidu.com对应服务器IP"的请求
- 本地计算机存储域名对应ip的文件就是hosts文件
- 如果我们更改了hosts文件, 就可以改变浏览器请求特定域名的资源时, 对应的服务器
- 在网站开发中, 为了模拟全仿真的测试环境, 也会改hosts, 比如我的网站fangyuanxiaozhan.com
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/015808a351a84ec6906e2285b43a8775.gif)

#### 上图中用到的工具就是SwitchHosts!

SwitchHosts开源地址: [https://github.com/oldj/SwitchHosts](https://github.com/oldj/SwitchHosts)

- macOS下载懒人链接: [SwitchHosts-macOS-x64_v3.3.12.5349.zip](https://github.com/oldj/SwitchHosts/releases/download/v3.3.12/SwitchHosts-macOS-x64_v3.3.12.5349.zip)

- Windows下载懒人链接: [SwitchHosts-win32-ia32_v3.3.12.5349.zip](https://github.com/oldj/SwitchHosts/releases/download/v3.3.12/SwitchHosts-win32-ia32_v3.3.12.5349.zip)
- 下载SwitchHosts-win32-ia32_v3.3.12.5349.zip后,解压压缩包, 进入解压的文件夹, 右键SwitchHosts! 并以管理员身份运行
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/27c3c984c2b64e91a02b7e0e2651c854.png)
- 给软件更改hosts的权限
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/8f8653180f6c4be4b73fdd8111376447.png)

- 示例: SwitchHosts!新增关于百度的规则
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/0fa66a2f37a14a34b0aa65b7b853780d.gif)
- 示例: SwitchHosts!获取网络规则(使用了github的源比较慢)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/356ed33422db4a9f8b5b14ff5d6bbbfe.gif)
- 示例根据已有方案, 获得组合方案
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/3062ac83e14a4705a6547174ef39634c.gif)
- 删除方案
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/dc0b1de0b7934333b8a4cfac48f4b087.gif)
- 打包导出方案
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/9c11b865a1954bf1b437f5f72d8569bd.gif)
- 导入方案
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/511d591186d34236a4a1c7bbdb9a430e.gif)

早期, GFW还不健全的时候, 访问Google不一定需要代理服务器, 改hosts就可以,但现在很难找到可用稳定的源了...

## 如果无法更改hosts
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/772e9b6acc7b422ea13ee34000d32497.png)
> 在Windows桌面新建一个hosts文件,替换`C:\Windows\System32\drivers\etc`中的hosts文件, 并为host开放权限
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/StarsAndClown/0e24f4368a164c4884a542960f3e45fc.gif)

## 小结:
切换hosts对于普通用户而言, 其实完全不需要掌握, 对于软件开发者却是需要掌握的技能, SwitchHosts!能让软件开发者更方便的切换hosts, 而且开源跨平台, 是一个非常值得收藏的软件~

---
#### 本仓库Github链接: [https://github.com/oldj/SwitchHosts](https://github.com/oldj/SwitchHosts)



---


## 写在最后(我需要你的支持)
- 本文属于**Github星聚弃疗榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/StarsAndClown](https://github.com/zhaoolee/StarsAndClown)
- **Github星聚弃疗榜**, 为Github优秀创意项目写一封推荐信，让Github优秀项目造福人类~, 如果你喜欢这个项目, 希望你能为本项目添加一颗 星.

- StarsAndClown, Write a letter of recommendation for Github's outstanding creative projects, and let Github's outstanding projects benefit mankind~, If you like this project, I hope you can add a star  to this project.

