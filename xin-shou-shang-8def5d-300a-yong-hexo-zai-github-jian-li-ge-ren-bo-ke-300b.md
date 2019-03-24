-  以前写过[在Github创建个人专属名片](https://www.jianshu.com/p/0b441a391136), 有人提问在GitHub建立网站是怎么一回事? 
-  在github建立的博客大多是一些静态的页面, 每次更新内容需要手动生成页面, 然后push到github, 我研究了一下可以自动生成静态页面的工具, 其中hexo最为热门, hexo拥有丰富的主题库, 满足你折腾的心~ 
> ![](https://upload-images.jianshu.io/upload_images/3203841-e1c01ec9f8ada5b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 以下是我折腾的一些记录:
## 环境要求:
- 已安装node.js
- 已安装git

## 全局安装hexo
```
npm install -g hexo-cli
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-7f651c9e461a2190.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## 初始化项目
```
hexo init zhaoolee-blog
cd zhaoolee-blog
npm install
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-98d0946f2fba3f1f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 本地开启调试服务 `hexo s`
> ![](https://upload-images.jianshu.io/upload_images/3203841-87ae18bf4c77eceb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> ![](https://upload-images.jianshu.io/upload_images/3203841-53180925eb2f2287.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 写一篇文章
```
hexo new "在Github创建个人专属名片" 
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-4401d0f02d8184ec.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> 在sublime打开新建的`~/zhaoolee-blog/source/_posts/在Github创建个人专属名片.md`, 并加入内容
> ![](https://upload-images.jianshu.io/upload_images/3203841-ac2c438f5d7cfb22.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 回到控制台, 先`Control+c`停掉服务
- 清理缓存`hexo clean`
- 再次开启服务 `hexo s`
> ![](https://upload-images.jianshu.io/upload_images/3203841-c9c9646281270fd6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 查看效果
> ![](https://upload-images.jianshu.io/upload_images/3203841-204cc6680291a771.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 通过主目录下`_config.yml`对网站信息进行配置
> ![](https://upload-images.jianshu.io/upload_images/3203841-828671f5d08f7cf8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> ![](https://upload-images.jianshu.io/upload_images/3203841-4bfe71ac1d2d4f2d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> 但是默认的主题实在是不太美观, 就像是设计师喝了一斤伏特加之后, 随手设计出来的, 副标题几乎看不清, 下面我们要换主题

## 配置主题
> 官方推荐的主题库: https://hexo.io/themes/
> ![](https://upload-images.jianshu.io/upload_images/3203841-3204b555e32ab974.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 选一个自己喜欢的主题, 从github获取源码
> ![](https://upload-images.jianshu.io/upload_images/3203841-62aa7e745e30f484.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## 将源码以git clone的方式添加到 `zhaoolee-blog/them` 目录
```
git clone https://github.com/HeskeyBaozi/hexo-theme-lite ./themes/lite/
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-6daee0ae0b186d3e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> 打开根目录的__config.yml文件，将theme字段设为lite
> ![](https://upload-images.jianshu.io/upload_images/3203841-f9bd85ead5eaa4a9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 回到控制台, 先`Control+c`停掉服务
- 清理缓存`hexo clean`
- 再次开启服务 `hexo s`
- 查看效果, `http://localhost:4000/`
> ![](https://upload-images.jianshu.io/upload_images/3203841-7072b7dfd826aa2a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

-  按照主题的的说明文档, 修改主题
每个主题的说明文档都是作者定义的, 略有差别, 但大同小异,这里以lite为例, `https://github.com/HeskeyBaozi/hexo-theme-lite`
> ![](https://upload-images.jianshu.io/upload_images/3203841-90098ebe407acfb1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 打开`themes/lite/_config.yml`, 进行修改
> ![](https://upload-images.jianshu.io/upload_images/3203841-586c5e1bce04d082.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> 这个完全按照个人的喜好, 可以对照文档, 一点点修改, 这是一个非常消耗时间的活动, 改完记得保存`_config.yml`, 然后,`control+c` 清理缓存`hexo clean`, 重启服务`hexo s` 
## 将hexo生成的页面, 上传到github
- 修改主目录`_config.yml`内`deploy`下的三个字段`type`, `repo`, `branch`(如果没有这几个字段, 自行添加即可) 
```
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: https://github.com/zhaoolee/zhaoolee.github.io.git
  branch: master
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-148020dcda7c544f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 安装一个与github通信的插件(需要事先在github建好仓库, 建仓库流程参考https://www.jianshu.com/p/0b441a391136)
```
npm install hexo-deployer-git
```
- 重新生成页面, 并上传到GitHub
```
# 清理缓存
hexo clean
# 生成页面
hexo g
# 上传到github
hexo d
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-451f0aabff0dc296.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> ![](https://upload-images.jianshu.io/upload_images/3203841-ce18b962e4595f7f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
---
###### 上面只是最简单的玩法, 如果你对静态博客搭建非常感兴趣, 可以参考以下一些资料:
- [关于HEXO搭建个人博客的点点滴滴](https://juejin.im/post/5a6ee00ef265da3e4b770ac1) 
- [HEXO中文文档](https://hexo.io/zh-cn/docs/index.html)
- [NexT官方文档](https://theme-next.iissnan.com/getting-started.html)
- [快速使用 Hexo 搭建个人博客视频教程](https://www.udemy.com/hexo-hwc/)

## 小结:
- 如果你是一个爱折腾的极客, hexo可以玩的很酷, 但如果你是为了建立自己的博客, 建议把折腾的心思放到博客的内容上, 因为通过写博客获得的乐趣,远比配置几个静态页面要大的多
- 坦率的讲, hexo是有很多不足的, 比如纯静态页面,没有数据库的支持,即使添加简单的留言板功能, 也要借助第三方, 而国内提供评论服务的三方平台, 由于种种原因, 也纷纷倒闭了, 玩hexo你会有这种感受, 我本来想建立自己的博客, 后来发现 折腾博客本身所花费的时间, 比写博客花的时间还要多, 哈哈, 有点尴尬, 所以我果断弃坑了...
- hexo也有很多优点: 借助GitHub, 可以不花一分钱, 快速建立自己的个性化网站, 而且网站大多界面美观, 如果单纯用来发博客,维护起来也比较简单 
- 玩hexo, 在github建立网站, 本来就是偏极客的, 如果你只是想写博客, 表达自己的思想, 简书就是很好的选择, 与hexo相比, 简书的定制性要差一些,好处在于, 完全不需要自己维护, 你可以通过向专题投稿, 让你的内容,快速被其他人看到, 与他人的点赞/评论/打赏/互动,让你对写博客保持一种长久的兴趣, 而这种兴趣往往是最重要的~

---

#### 本仓库Github链接: [https://github.com/521xueweihan/HelloGitHub](https://github.com/521xueweihan/HelloGitHub)

---

## 写在最后(我需要你的支持)
- 本文属于**Github星聚弃疗榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/StarsAndClown](https://github.com/zhaoolee/StarsAndClown)

- **Github星聚弃疗榜**, 为Github优秀创意项目写一封推荐信，让Github优秀项目造福人类~, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- StarsAndClown, Write a letter of recommendation for Github's outstanding creative projects, and let Github's outstanding projects benefit mankind~, If you like this project, I hope you can add a star 🌟 to this project.






