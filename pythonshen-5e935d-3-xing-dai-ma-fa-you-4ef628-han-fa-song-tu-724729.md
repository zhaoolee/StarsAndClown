> 最近有发邮件的需求
> 发现了一个python发邮件的开源项目[yagmail](https://github.com/kootenpv/yagmail), 3行代码搞定邮件, 很赞

## 以下三行代码实现的功能

- 发送超链接
- 发送图片资源(支持发送各种静态资源, 文件名最好是英文)

## 源码
```
import yagmail

# 连接邮箱服务器
yag = yagmail.SMTP(user="lijianzhaoyou@163.com", password="填自己的", host='smtp.163.com')

# 邮箱正文
contents = ['今天是周末,我要学习, 学习使我快乐;', '<a href="https://www.python.org/">python官网的超链接</a>', './girl.jpg']

# 发送邮件
yag.send('zhaoolee@gmail.com', '主题:学习使我快乐', contents)
```

##  图片资源在此:
> ![girl.jpg](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/346b03d2a7254084923176df08eff09d.png)

> ![gmail收到的邮件](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/d17907d68d4a42c3ae342b5fdb354441.png)
> ![qq邮箱收到的邮件](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/bae64acfadaa4a55904a2361e3744740.png)



> 如何获取163邮箱授权码?
> ![设置 => POP3/SMTP/IMAP](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/43b0660884c2429b9c0f3fa7c8650261.png)
> ![设置授权码](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/ab3428bd313c48a88180b8f6ecf9d0d2.png)
> ![弹框提示](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/d68dae9653e446deb6bdea703f9aa360.png)

---

#### 本仓库Github链接: [https://github.com/kootenpv/yagmail](https://github.com/kootenpv/yagmail)

---

## 写在最后(我需要你的支持)
- 本文属于**Github星聚弃疗榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/StarsAndClown](https://github.com/zhaoolee/StarsAndClown)

- **Github星聚弃疗榜**, 为Github优秀创意项目写一封推荐信，让Github优秀项目造福人类~, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- StarsAndClown, Write a letter of recommendation for Github's outstanding creative projects, and let Github's outstanding projects benefit mankind~, If you like this project, I hope you can add a star 🌟 to this project.




