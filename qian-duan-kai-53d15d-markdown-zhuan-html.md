#### 最终效果如图所示
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/97ddbf7f233e4d4c854c47ad7938e640.gif)
> 在线测试地址: https://fangyuanxiaozhan.com/demo/md2html


## 实现思路
- 第一步: 获取markdown开源库showdown
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/6b132aeb0d3d47279c9d2908e6bcac8f.png)

- showdown的Github地址: https://github.com/showdownjs/showdown
- showdown的cdn:https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.0/showdown.min.js

## 第二步: 获取markdown样式
>  推荐李笑来老师的markdonw主题: https://gist.github.com/xiaolai/aa190255b7dde302d10208ae247fc9f2 
> ![](https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/images/62f6fe8f097c4bbc9dd0f3a9283ac366.png)
- 将css插入到页面中即可
#### 如果你对css的美观度很有追求, 可以试试下面几款
> - 少数派主题: https://cdn.sspai.com/sspai.css
> - Mweb主题:  https://cdn.sspai.com/MWeb.css
> - Github主题: https://github.com/sindresorhus/github-markdown-css
> - typora主题合集下载: https://theme.typora.io/

## 实现源码:
> 在线地址(建议pc打开): https://fangyuanxiaozhan.com/demo/md2html

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>md转换为html</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.0/showdown.min.js"></script>
</head>

<body>
    <div style="font-size: 20px;height: 30px; text-align: center;color: #009689; font-weight: bold;">Markdown转换为HTML的Demo</div>
    <style>
    .markdown-here-wrapper {
        font-size: 16px;
        line-height: 1.8em;
        letter-spacing: 0.1em;
    }

    pre,
    code {
        font-size: 14px;
        font-family: Roboto, 'Courier New', Consolas, Inconsolata, Courier, monospace;
        margin: auto 5px;
    }

    code {
        white-space: pre-wrap;
        border-radius: 2px;
        display: inline;
    }

    pre {
        font-size: 15px;
        line-height: 1.4em;
        display: block;
         !important;
    }

    pre code {
        white-space: pre;
        overflow: auto;
        border-radius: 3px;
        padding: 1px 1px;
        display: block !important;
    }

    strong,
    b {
        color: #BF360C;
    }

    em,
    i {
        color: #009688;
    }

    hr {
        border: 1px solid #BF360C;
        margin: 1.5em auto;
    }

    p {
        margin: 1.5em 5px !important;
    }

    table,
    pre,
    dl,
    blockquote,
    q,
    ul,
    ol {
        margin: 10px 5px;
    }

    ul,
    ol {
        padding-left: 15px;
    }

    li {
        margin: 10px;
    }

    li p {
        margin: 10px 0 !important;
    }

    ul ul,
    ul ol,
    ol ul,
    ol ol {
        margin: 0;
        padding-left: 10px;
    }

    ul {
        list-style-type: circle;
    }

    dl {
        padding: 0;
    }

    dl dt {
        font-size: 1em;
        font-weight: bold;
        font-style: italic;
    }

    dl dd {
        margin: 0 0 10px;
        padding: 0 10px;
    }

    blockquote,
    q {
        border-left: 2px solid #009688;
        padding: 0 10px;
        color: #777;
        quotes: none;
        margin-left: 1em;
    }

    blockquote::before,
    blockquote::after,
    q::before,
    q::after {
        content: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 20px 0 10px;
        padding: 0;
        font-style: bold !important;
        color: #009688 !important;
        text-align: center !important;
        margin: 1.5em 5px !important;
        padding: 0.5em 1em !important;
    }

    h1 {
        font-size: 24px !important;
        border-bottom: 1px solid #ddd !important;
    }

    h2 {
        font-size: 20px !important;
        border-bottom: 1px solid #eee !important;
    }

    h3 {
        font-size: 18px;
    }

    h4 {
        font-size: 16px;
    }


    table {
        padding: 0;
        border-collapse: collapse;
        border-spacing: 0;
        font-size: 1em;
        font: inherit;
        border: 0;
        margin: 0 auto;
    }

    tbody {
        margin: 0;
        padding: 0;
        border: 0;
    }

    table tr {
        border: 0;
        border-top: 1px solid #CCC;
        background-color: white;
        margin: 0;
        padding: 0;
    }

    table tr:nth-child(2n) {
        background-color: #F8F8F8;
    }

    table tr th,
    table tr td {
        font-size: 16px;
        border: 1px solid #CCC;
        margin: 0;
        padding: 5px 10px;
    }

    table tr th {
        font-weight: bold;
        color: #eee;
        border: 1px solid #009688;
        background-color: #009688;
    }
    </style>
    <style>
    #area>table {
        width: 100%;
        table-layout: fixed;
    }

    #area table tr td {
        margin: 0;
        padding: 6px;
        border: 0;

    }


    #md-area {

        width: 100%;
        height: 600px;
        font-size: 18px;
        overflow: hidden;
        font-weight: bold;
        outline: none;
    }

    #show-area {
        height: 600px;
        background-color: #FCF6E5;
    }

    .clearfix:before {
        content: "";
        display: table;
    }
    </style>
    <script>
    function mdSwitch() {
        var mdValue = document.getElementById("md-area").value;
        var converter = new showdown.Converter();
        var html = converter.makeHtml(mdValue);
        document.getElementById("show-area").innerHTML = html;
    }
    </script>
    <div id="area">
        <table>
            <tr>
                <td><textarea name="" id="md-area" onkeyup=mdSwitch()></textarea></td>
                <td>
                    <div id="show-area" class="clearfix"></div>
                </td>
            </tr>
        </table>
    </div>
</body>

</html>
```

## 小结:
- 记得接触简书, 是因为简书的markdown编辑器很好用
- 实现一个简单的markdown编辑器并不是一件难事, 把体验做好确是非常不容易的
- 希望简书能把markdown编辑器的体验, 越做越好


---

#### 本仓库Github链接: [https://github.com/showdownjs/showdown](https://github.com/showdownjs/showdown)

---

## 写在最后(我需要你的支持)
- 本文属于**Github星聚弃疗榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/StarsAndClown](https://github.com/zhaoolee/StarsAndClown)

- **Github星聚弃疗榜**, 为Github优秀创意项目写一封推荐信，让Github优秀项目造福人类~, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- StarsAndClown, Write a letter of recommendation for Github's outstanding creative projects, and let Github's outstanding projects benefit mankind~, If you like this project, I hope you can add a star 🌟 to this project.




