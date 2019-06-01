- Brook是一个github开源项目, 项目地址https://github.com/txthinking/brook.
- Brook是一个跨平台的代理/ VPN软件, 软件的目标是保持简单,傻瓜, 无感知.
- Brook部署和使用比ss更简单, 如果ss某天挂了, 可以用Brook作为替代品.

> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/103a07ce3aad4fcb99042d113758d5dd.png)





## 准备工作
- 购买一台可以自由访问外网的vps虚拟主机
- vps虚拟主机安装 cenos7 64位
- 能以ssh方式, 登录vps虚拟主机

## 安装brook
- 登录服务器,切换到root用户
```
su
```
- 在根目录下新建文件夹`my_brook`,并将brook下载到文件夹内
```
cd / 
mkdir my_brook
cd my_brook 
wget https://github.com/txthinking/brook/releases/download/v20181212/brook
```
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/a5441bb922e141358be97593ed02c2f4.png)

## 开启服务

```
# 赋予执行权限
chmod 777 brook
# 开启服务
./brook server -l :9999 -p password
# 以非阻塞方式开启服务(比较推荐)
./brook server -l :9999 -p password /dev/null 2>&1 &
```
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/3123d6eb7c0240f0be10f4e84f24f0fa.png)

## 用客户端登录
- 下载客户端
Window客户端下载:https://github.com/txthinking/brook/releases/download/v20181212/Brook.exe
Mac客户端下载:https://github.com/txthinking/brook/releases/download/v20181212/Brook.dmg
安卓客户端下载:https://github.com/txthinking/brook/releases/download/v20181212/Brook.apk
IOS客户端下载(你可能需要美国区账户): https://itunes.apple.com/us/app/brook-brook-shadowsocks-vpn-proxy/id1216002642

- 填写登录信息
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/ee9ace5ac4aa4954bfa0635dce054b7f.png)
- 右击任务栏图标选择start
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/61df874302054fb0b243f1667cf00d2f.png)

> ![ios版本登录](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/e6417ed2c8fa44c8be6d1bc7c3cd85e1.jpeg)




- 可以愉快的上网了
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/7d419ce83da34a148dba31a79d784651.png)

> ![ios查看youtube](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/cd34e1d662f04a05872a290ecc45906a.jpeg)



> 如果你想让自己的服务更稳定一些, 可以继续往下读
## 先结束刚刚创建的进程
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/abf28072e9654c8db85b7a7692cc0c4d.png)

## 安装守护进程pm2
```
yum install nodejs
npm install pm2 -g
```
- 在/my_brook目录下创建文件 `start_brook.sh`
```
cd /my_brook
touch start_brook.sh
```
- 用vi打开start_brook.sh
```
vi start_brook.sh
```
- 在start_brook.sh内写入启动指令(这里的`9999`可以换成你喜欢的端口, `password`也可以换成你自己喜欢的密码)
```
./brook server -l :9999 -p password
```
## pm2自带守护属性, 用pm2启动brook,在`/my_brook`下执行以下语句
```
pm2 start start_brook.sh
```
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/f668cf1a9c3e4a87bbcafb982463d254.png)

>  大功告成! 现在可以稳定的访问服务了, 即使brook服务端程序挂掉了, pm2也会自动重启brook服务端程序

## 相关问题:

- 如何查看brook服务端进程

```
pm2 list
```
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/bbc0911b0c7c46b2ae7aa41b49494c56.png)

- 如何关闭brook服务端进程

```
pm2 delete start_brook
```

> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/0b99a8989e30413b9220791ef9dcedd1.png)

## 愉快的访问谷歌和油管吧~
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/a95904d07068414db84e426d6f4ca20e.png)
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/1af4e19197464f89a9b51a42450ba755.png)


## 小结:
Brook是一个蛮好用的工具, 不需要ss复杂的部署过程, 开箱即用, 配合pm2可以提供非常稳定的服务, 如果自己想搭建科学上网服务, 可以试试Brook!  



---

#### 本仓库Github链接: [https://github.com/txthinking/brook](https://github.com/txthinking/brook)

---

## 写在最后(我需要你的支持)
- 本文属于**Github星聚弃疗榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/StarsAndClown](https://github.com/zhaoolee/StarsAndClown)

- **Github星聚弃疗榜**, 为Github优秀创意项目写一封推荐信，让Github优秀项目造福人类~, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- StarsAndClown, Write a letter of recommendation for Github's outstanding creative projects, and let Github's outstanding projects benefit mankind~, If you like this project, I hope you can add a star 🌟 to this project.





