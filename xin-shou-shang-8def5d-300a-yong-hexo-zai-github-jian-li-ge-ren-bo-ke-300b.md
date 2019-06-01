-  以前写过[在Github创建个人专属名片](https://www.jianshu.com/p/0b441a391136), 有人提问在GitHub建立网站是怎么一回事? 
-  在github建立的博客大多是一些静态的页面, 每次更新内容需要手动生成页面, 然后push到github, 我研究了一下可以自动生成静态页面的工具, 其中hexo最为热门, hexo拥有丰富的主题库, 满足你折腾的心~ 
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/8cec958d3d224bd08e74529eac63430d.png)

- 以下是我折腾的一些记录:
## 环境要求:
- 已安装node.js
- 已安装git

## 全局安装hexo
```
npm install -g hexo-cli
```
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/c086e63ad59f4507b8ece688a04e8611.png)
## 初始化项目
```
hexo init zhaoolee-blog
cd zhaoolee-blog
npm install
```
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/0247d4116b82448ca76bf00ab024b38b.png)

- 本地开启调试服务 `hexo s`
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/99419879ab9f46aa8dca315f5485a0d5.png)
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/07c318e49c9d4a6aae595406ae4b8e13.png)

## 写一篇文章
```
hexo new "在Github创建个人专属名片" 
```
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/00e51679d23946a5ac7b764b2a2094bb.png)
> 在sublime打开新建的`~/zhaoolee-blog/source/_posts/在Github创建个人专属名片.md`, 并加入内容
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/a7fd658c655948a0afc330a4ff08c4d4.png)
- 回到控制台, 先`Control+c`停掉服务
- 清理缓存`hexo clean`
- 再次开启服务 `hexo s`
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/e84cfbc8c8b148c9b75f65771eeabace.png)
- 查看效果
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/01122f7104fa4003a3a328889a65db9d.png)
- 通过主目录下`_config.yml`对网站信息进行配置
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/74dfeeaeeab94e848dfa33093ced4cef.png)
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/3b628dfc1ea14a819fe5fc4b98a0367c.png)
> 但是默认的主题实在是不太美观, 就像是设计师喝了一斤伏特加之后, 随手设计出来的, 副标题几乎看不清, 下面我们要换主题

## 配置主题
> 官方推荐的主题库: https://hexo.io/themes/
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/3c5a0cedf74a47d58a92053498f8dbd9.png)
- 选一个自己喜欢的主题, 从github获取源码
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/9816a9c0748847ad940a04e38dc3d063.png)
## 将源码以git clone的方式添加到 `zhaoolee-blog/them` 目录
```
git clone https://github.com/HeskeyBaozi/hexo-theme-lite ./themes/lite/
```
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/f5458f4bdec44c599e6eee4b3aee2c4f.png)
> 打开根目录的__config.yml文件，将theme字段设为lite
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/8a372bc3d490426494ec901137d6f891.png)
- 回到控制台, 先`Control+c`停掉服务
- 清理缓存`hexo clean`
- 再次开启服务 `hexo s`
- 查看效果, `http://localhost:4000/`
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/8addd16a142448c5be03512448aba025.png)

-  按照主题的的说明文档, 修改主题
每个主题的说明文档都是作者定义的, 略有差别, 但大同小异,这里以lite为例, `https://github.com/HeskeyBaozi/hexo-theme-lite`
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/ecf40c528b274013a5f3750140304350.png)
- 打开`themes/lite/_config.yml`, 进行修改
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/e7e1bd21f5664f1eb1290a49fe3fbaab.png)
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
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/cdb0bb2b99804093b534e642d99deb56.png)
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
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/1db8a3205707481aa6b1512b5897e360.png)
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/26b1ecfcdf4e427eac717ea72ad2a012.png)
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






