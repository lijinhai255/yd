
# CSS的工作流

## 
## css发展
### CSS预处理器
```
① 原生css不支持嵌套、不支持声明变量、不支持父选择器等。
② 预处理器主要是强化了 css 的语法，弥补了编写原生css时的问题，
但实际上打包出来的结果和原生的 css 都是一样的，只是对开发者友好，写起来更顺滑。
```


![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608256312774-4dfbe32e-9a02-439c-8373-4994fef71fa7.png#align=left&display=inline&height=602&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1204&originWidth=1606&size=3242904&status=done&style=none&width=803)
处理特定格式源文件到目标css的处理程序
#### 预处理期变革
![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608256451008-8c9101bd-7584-4e24-96dd-8096c52d7b68.png#align=left&display=inline&height=584&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1168&originWidth=1626&size=2213972&status=done&style=none&width=813)
#### 预处理期常用规范
变量
混合（Mixin）
嵌套规则
运算
函数
Namespace & Accessors
Scope
注释


### CSS后处理器
```
① postcss 可以称作为 css 界的 babel，
它的实现原理是通过 ast 去分析我们的 css 代码，然后将分析的结果进行处理。
② 如自动增加浏览器前缀 -webkit、编译CSS next 语法、转换rem等。
③ 现在postcss基本实现前后通吃，比较强大。
```
css压缩
自动添加浏览器前缀 Autoprefixer
CSS 更加美观排列 CSScomb
Rework   取代stylus 后处理器发热
前后通吃PostCss


![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608256653753-86afa0fb-dbdf-4999-87d4-dc142d6b508a.png#align=left&display=inline&height=251&margin=%5Bobject%20Object%5D&name=image.png&originHeight=501&originWidth=1181&size=72305&status=done&style=none&width=590.5)
parser 处理器
Interpreter 演绎
translator 翻译器
![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608256853755-1a75594f-68ba-4bfa-80af-ef13288aff79.png#align=left&display=inline&height=301&margin=%5Bobject%20Object%5D&name=image.png&originHeight=601&originWidth=1398&size=107024&status=done&style=none&width=699)
抽象语法树（Abstract Syntax Tree ，AST） 作为程序的一种中间表现形式


### PostCss
![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608257063558-b9c913e2-1dc2-4e3b-85c7-d50064d4a40f.png#align=left&display=inline&height=72&margin=%5Bobject%20Object%5D&name=image.png&originHeight=144&originWidth=144&size=9578&status=done&style=none&width=72)


[https://preset-env.cssdb.org/playground](https://preset-env.cssdb.org/playground)
[https://cssnext.github.io/playground/](https://cssnext.github.io/playground/)
#### PostCss插件
[POSTCSS-CUSTOM-PROPERTIES](https://drafts.csswg.org/css-variables/) 运行时变量
POSTCSS-SIMPLE-VARS 与SCSS一致的变量实现
POSTCSS-MIXINS 实现类似SASS的@MIXIN的功能
POSTCSS-EXTEND 实现类似SASS的继承功能
POSTCSS-IMPORT 实现类似SASS的IMPORT
[CSSNext](http://cssnext.io/features/) 面向未来 CSS Grace 修复过去
```jsx
var gulp = require('gulp'); 
var postcss = require('gulp-postcss'); 
var autoprefixer = require('autoprefixer'); 
var cssgrace = require('cssgrace'); 
var cssnext = require('cssnext'); 
gulp.task('css', function () { 
 var processors = [ 
 autoprefixer({browsers: ['last 3 version'], 
 cascade: false, 
 remove: false 
 }), 
 cssnext(), 
 cssgrace 
 ]; 
 return gulp.src('./src/css/*.css') 
 .pipe(postcss(processors)) 
 .pipe(gulp.dest('./dist')); 
}); 
gulp.task('watch', function(){ 
 gulp.watch('./src/css/*.css', ['css']); 
}); 
gulp.task('default', ['watch', 'css']);
```
![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608268332462-7a051aa8-a5ff-44d9-a7df-3e6db188ba98.png#align=left&display=inline&height=450&margin=%5Bobject%20Object%5D&name=image.png&originHeight=900&originWidth=1296&size=316721&status=done&style=none&width=648)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608268373574-fc7060e7-7d4f-484b-9340-2ac7b2efe7fc.png#align=left&display=inline&height=474&margin=%5Bobject%20Object%5D&name=image.png&originHeight=948&originWidth=1314&size=220589&status=done&style=none&width=657)


CssNext
[https://cssnext.github.io/](https://cssnext.github.io/)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608257512516-157445d0-decb-433b-b26c-c9ff15fc1937.png#align=left&display=inline&height=58&margin=%5Bobject%20Object%5D&name=image.png&originHeight=116&originWidth=338&size=7263&status=done&style=none&width=169)
 CSS was frustrating by not having 
any specification for features we were looking 
for. No variables, no math, no color manipulation 
& no customization. Things are going to change 
soon since a lot of work has been made by the 
W3C to write new specs to make our life easier. 
With cssnext, you can start using some new 
features today!
### css  new features
automatic vendor prefixes

custom properties & var() limited to :root

reduced calc() to optimize previously parsed var() references,

custom media queries a nice way to have semantic media queries,

media queries ranges that allows to replace min-/max- with <= & >= 
(syntax easier to read),

custom selectors to create your own selectors,

color() a color function to modify colors,hwb() similar to hsl() but easier 
for humans to work with,

gray() ,#rrggbbaa,rebeccapurple

font-variant properties,

filter propertiesrem units
![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608259368130-03272056-0dd4-4181-b097-a80d0ad942c8.png#align=left&display=inline&height=579&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1158&originWidth=1756&size=245009&status=done&style=none&width=878)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608259128422-07517ad9-d27d-4624-b006-6b9d7f331452.png#align=left&display=inline&height=106&margin=%5Bobject%20Object%5D&name=image.png&originHeight=212&originWidth=551&size=26814&status=done&style=none&width=275.5)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608259158894-588b0f36-81b4-4412-89cb-7d7d2f113170.png#align=left&display=inline&height=112&margin=%5Bobject%20Object%5D&name=image.png&originHeight=224&originWidth=529&size=28360&status=done&style=none&width=264.5)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608259172408-3052e158-21ba-4ef7-8263-a87254718500.png#align=left&display=inline&height=112&margin=%5Bobject%20Object%5D&name=image.png&originHeight=223&originWidth=1044&size=45839&status=done&style=none&width=522)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608259180783-e1110938-905e-4c1d-8419-98e5c246dc85.png#align=left&display=inline&height=108&margin=%5Bobject%20Object%5D&name=image.png&originHeight=215&originWidth=653&size=31608&status=done&style=none&width=326.5)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608259196334-2efb8c4a-ca0e-4241-a8cd-551c523cac18.png#align=left&display=inline&height=264&margin=%5Bobject%20Object%5D&name=image.png&originHeight=528&originWidth=1302&size=151599&status=done&style=none&width=651)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608268053210-12ce0c8a-b765-4111-8fcd-92c16c4d43aa.png#align=left&display=inline&height=69&margin=%5Bobject%20Object%5D&name=image.png&originHeight=138&originWidth=982&size=134311&status=done&style=none&width=491)




### CSS-doodle
[https://css-doodle.com/](https://css-doodle.com/)
[https://codepen.io/collection/XyVkpQ/](https://codepen.io/collection/XyVkpQ/)


```css
  <!-- // @place-cell ：将单元格相对布局
    @size ：设置单元格的 width 和 height
    @rand ：从数字的范围内返回一个随机值
    @pick ：给定的列表中随机选取一个值 -->
    <css-doodle>
        :doodle{
        @grid: 10 x 1 / 61.8vmax;

        }
        @place-cell:center;
        @size:calc(@index()*10%);
        border-width: calc(@index()*1vmin);
        border-radius: 50%;
        border-style: dashed;
        border-color:hsla(calc(20*@index()),70%,68%,calc(4/@index()*.8));
        --d:@rand(20s,40s);
        --rf:@rand(360deg);
        --rt:calc(var(--rf)+@pick(1turn,-turn));
        animation: spin var(--d) linear infinite; 
        @keyframes spin {
            from {
                transform: rotate(var(--rf));
            }
            to {
                transform: rotate(var(--rt));

            }
        }

    </css-doodle>
```
### CSS NEXT
css next 代表下一代的 css 规范，目前主流浏览器已经支持css next语法，以后就不需要再使用预处理器来实现这些规则了。
[https://cssnext.github.io/features/](https://cssnext.github.io/features/)

1. 自定义变量（– 两个短横线）、使用（var）
```
/* 全局的 */
:root {
  --globalColor: red;
}
div {
  --innerColor: green; /* 局部的 */
  color: var(--globalColor);
  background: var(--innerColor);
}Copy
```

2. 自定义一套规则，通过 @apply 复用
```
:root {
    --centered: {
        display: flex;
        align-items: center;
        justify-content: center;
    };
}
.box {
    @apply --centered;
}Copy
```

3. @custom-media 自定义媒体查询
```
@custom-media --only-medium-screen (width >= 500px) and (width <= 1200px);
@media (--only-medium-screen) {
  color: red;
}Copy
```

4. 嵌套选择器。（浏览器暂不支持，需经过postcss-loader处理）
```
/* &指代上一级 */
a {
  & span {
    color: white;
  }
}Copy
```

5. image-set() 函数。根据不同的屏幕分辨率，自动使用对应大小的图片
```
.box {
  background-image: image-set(
    url(img/test.png) 1x,
    url(img/test-2x.png) 2x,
    url(my-img-print.png) 600dpi
  );
}Copy
```

6. supports() 函数。类似于js的if，如果支持，则…
```
@supports (display: flex) {
    body {
      display: flex;
      align-items: center;
      justify-content: center;
    }
}
```


### CSS数据类型


![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608262872312-74c88e54-fb9d-4bae-8ee9-208f5b5ca4a0.png#align=left&display=inline&height=122&margin=%5Bobject%20Object%5D&name=image.png&originHeight=244&originWidth=1494&size=51781&status=done&style=none&width=747)


![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608262897458-53ee2d34-ae30-4ca5-a721-cc8f608a94f7.png#align=left&display=inline&height=347&margin=%5Bobject%20Object%5D&name=image.png&originHeight=694&originWidth=1304&size=92446&status=done&style=none&width=652)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608262905592-b1b11da1-a0f0-45f6-b62c-a79e7c02d3c7.png#align=left&display=inline&height=565&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1130&originWidth=1634&size=157034&status=done&style=none&width=817)
### CSS模块化
#### BEM 命名规范
BEM 即块（block）、元素（element）、修饰符（modifier）。
只是定义一个规则，在命名上去约束开发者，但是如果开发者不注意或不遵守则还是会造成重名的问题。
```css
.box_content_title {
    color: red;
}
```
### CSS Modules
#### 基本使用
css modules 允许我们像importjs 一样去引入css代码。css中的类名是引入对象的一个属性。
```css
:root {
  --ydColor: black;
}
body {
  background: var(--ydColor);
}
.test {
  & h1 {
    color: yellowgreen;
  }
}

.qq {
  height: 200px;
}
a {
  all: initial;
}
nav :any-link > span {
  background-color: yellow;
}
/* input {
  background-color:red;
} */
input:blank {
  background-color: yellow;
}
textarea:blank {
  border: 3px solid red;
}
a {
  break-inside: avoid;
  break-before: avoid-column;
  break-after: always;
}
em {
  background-color: hsl(120deg 100% 25%);
  box-shadow: 0 0 0 10px hwb(120deg 100% 25% / 80%);
  color: rgb(0 255 0);
}


```
#### 配置打包
> 支持CssModule

```javascript
{
  loader: 'css-loader',
  options: {
    modules: true,
  },
},
```
> [typed-css-modules-loader](https://www.npmjs.com/package/typed-css-modules-loader)
> 支持css jn js

```javascript
const settings = {
  // ...
  module: {
    loaders: [
      // ...
      {
        enforce: 'pre',
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'typed-css-modules-loader'
        // or in case you want to use parameters:
        // loader: 'typed-css-modules?outDir=/tmp'
        // or in case you want to use noEmit:
        // loader: 'typed-css-modules?noEmit'
      }
    ],
  }
  // ...
}
```
```javascript
module.exports = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'typed-css-modules-loader',
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
};

```




