## 第十四章:过渡`(transtion)`和动画`(animation)`
## 一.过渡

> - transition-property指定属性名称 
1. all 所有属性都将获得过渡效果(默认)
2. attr 过渡效果的CSS属性名称列表,列表以逗号分隔
3. none 没有属性会获得过渡效果
> - transition-duration过渡时间
> - transition-delay延迟事件,多久之后再开始执行动画
> - transition-timing-function运动形式 
1. linear 匀速
2. ease 慢块慢(默认)
3. ease-in 慢入
4. ease-out 慢出
5. ease-in-out 慢入慢出
6. cubic-bezier 贝塞尔曲线(x1,y1,x2,y2) 
1) x1起点在x轴的坐标 为0-1 
2) y1起点在y轴的坐标 不限 
3) x2终点在x轴的坐标 为0-1 
4) y2终点在y轴的坐标不限 
起点对应的 y=x 为匀速,y>x 为加速,y<x 为减速 
终点对应的 y=x 为匀速,y>x 为减速,y<x 为加速 
参考:http://matthewlein.com/ceaser/
> - 复合样式transition:property duration delay timing-function;
> - 多属性写法transition:width 2s,height 4s;

## 二.动画
`注意:animation必须与@keyframes一起使用`
> - **动画帧** `@keyframes`
> ```css
> @keyframe animationname{
        keyframes-selector{css-styles}
        keyframes-selector{css-styles}  
}
> ```
> 1. **animationname** animation的名称
> 2. **keyframes-selector** 动画时间百分比 
> 3. **css-styles** 一个或多个合法的css样式属性
> 
>  ```
> @keyframes run{
       0%{width:0px,background:red;}
       100%{width:50px,background:green;}
}
> ```
> - **动画属性**
> 1. animation-name `动画名称`
> 2. animation-duration `动画执行时间`
> 3. animation-delay `动画效果延迟时间`
> 4. animation-timing-function `动画速度曲线`
> 1). linear 匀速
2). ease 慢块慢(默认)
3). ease-in 慢入
4). ease-out 慢出
5). ease-in-out 慢入慢出
6). cubic-bezier 
> 5.  animation-iteration-count `动画执行循环次数 `
> 1) infinite 无限循环
> 2) 默认1次
> 6. animation-direction `动画是否反响运动 `
> 1)  normal 默认 正常方向
> 2) reverse 反方向运动
> 3) alternate 动画先正后反方向运行
> 4) alternate-reverse 先反后正方向运行
> 7. animation-play-state `动画执行状态 `
> 1) running 运动,默认
> 2) paused 暂停
> 8. animation-fill-mode `动画对象时间之外的状态`
> 1) none 默认 原始状态>动画>原始状态
2) forwards 原始状态>动画>停在动画帧100%
3) backwards (忽略原始状态)进入动画帧0%>动画>原始状态
4) both (忽略原始状态)进入动画帧0%>动画>停在动画帧100%