> ![](https://upload-images.jianshu.io/upload_images/3203841-eb788bb30af3dfb9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## css动画可以做到什么程度?

Github上有一个非常优秀的动画项目, 足足有5万颗星!
> ![](https://upload-images.jianshu.io/upload_images/3203841-7c95d0c1d007c263.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> - 项目地址: https://github.com/daneden/animate.css



## 在线效果展示:
-  https://daneden.github.io/animate.css/
> ![](https://upload-images.jianshu.io/upload_images/3203841-b0b90255902dd1f4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

animate整个项目只有一个css文件, 使用方法也非常简单, 只要给相应的元素添加class属性即可
## 通过悬浮产生动画的小Demo
> ![](https://upload-images.jianshu.io/upload_images/3203841-5e55e8501938ce1f.gif?imageMogr2/auto-orient/strip)


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.bootcss.com/animate.css/3.7.0/animate.min.css" rel="stylesheet">
    <title>Animate的动画展示</title>
</head>



<body>
    <style>
        body, html{
            margin: 0;
            padding: 0;
        }
        #title{
            margin-top: 200px;
            font-size: 30px;
            line-height: 60px;
            font-size: 0;
            width: 100%;
            font-weight: bold;
            color: #AB3319;
        }

        #title span{
            font-size: 20px;
            background-color: #FCF6E5;
            display: inline-block;
            width: 20%;
            height: 60px;
            text-align: center;
            box-sizing: border-box;
            border: 1px solid #A84631;
        }
        
    </style>

    <div 
    class="animated infinite flip delay-2s" 
    style="text-align: center; font-size: 60px; margin-top: 30px; color: #64B587;">
    Animate动画展示</div>

    <div id="title">
        <span>推荐</span>
        <span>排行榜</span>
        <span>歌单</span>
        <span>电台</span>
        <span>歌手</span>
    </div>
    <script>
        const spans = window.document.querySelector("#title").querySelectorAll("span");

        for(let span_index = 0; span_index < spans.length; span_index++){
            spans[span_index].addEventListener("mouseenter", (e)=>{
                console.log(spans[span_index], "enter");
                spans[span_index].setAttribute("class", 'animated rubberBand');
            })
            spans[span_index].addEventListener("mouseleave", (e)=>{
                console.log(spans[span_index], "mouseleave")
                spans[span_index].setAttribute("class", '');
            })
        }
    </script>



</body>
</html>
```

## 小结:
> 为网站添加css动画, 是为网页增加趣味性最简单的方法~



