网页的整体渲染流程
1.1  获取dom 节点 进行分层
1.2  对每个图层的节点 计算样式结果 Recalculate Style
1.3  为每个节点生成图形和位置 Layout 重排
1.4  为每个节点绘制填充到我们对应的图层位图中 Paint 重绘
1.5  图层作为纹理上传到GPU上去 
纹理： CPU传输到GPU 的一个bitmap

1.6  将符合的多个图层 生成屏幕的图形中 Composite Layers（合成层）
1.7 Composite Layers ？ 做了哪些事情
    ① 图层的绘制列表准备好之后，主线程
    ② 合成线程会根据 viewport  图层划分小的图块（tile） 方便后期的光栅化
    ③ 合成线程把土块生成位图 生成位图的过程时候光栅化来操作 raster
    ④ 所有的图块被光栅化以后， 发送一个drawquired 然后将命令提交给浏览器的线程
    ⑤ 浏览器 进程里有个viz组件 用来接收合成线程发过来的drawquad命名
    ⑥ 当cpu中的位图进行旋转  首次低分辨的图
总结： layout  paint Composite Layers

2 网页会分层
    根元素 position transform 半透明  CSS滤镜 canvas video overflow
什么样的层会让GPU参与进来 ？
CSS3D video  webgl tarnsform will-change

3、 什么情况下会造成重排？
重绘 一定不会造成我们的重排 重排一定会造成重绘
盒子模型 只要动了 一定会重排  box-sizing:border-box
offset scroll client  width height 

样式 改变会进行 color 重绘

4 cpu和GPU 到底有什么不同
相同地方 两者都有总线和外界联系  有自己的缓存体系 以及数字和逻辑处理运算单元，都为计算而生
不同地方：cpu 主要负责 操作系统和应用程序  GPU 主要负责和显示相关的数据




