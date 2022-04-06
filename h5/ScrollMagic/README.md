triggerHook 还有一些其他设置——onEnter、onCenter（默认）、onLeave。

```
today i'm going to be working on the report for the real estate developer account all day and have a scarf meeting with their head of pr two p m great make sure to tell him or her that we're still on schedule with the report what about you i'm going to be following a few new failings today the tech company one seems promising
```



固定元素

```javascript
$("section").each(function() {
 
    new ScrollMagic.Scene({
        triggerElement: this // 告诉控制器，当this到了的时候，触发动作
    })
    .setPin(this)// 固定this元素
    .addTo(ctrl);// 加入控制器
 
});
```





当到达一定高度时，为某元素添加类

```javascript
    var wh = window.innerHeight;

    new ScrollMagic.Scene({
      offset: wh * 3
    })
      .setClassToggle("#four", "is-active")
      .addTo(ctrl);
```



















创建动画

```javascript
      var iphoneIntro = TweenMax.from($iphone, 1, {
        yPercent: 50,
        xPercent: 100,
        ease: Cubic.easeOut
      });
```

创建时间线，过多条动画

```javascript
      var iphoneIntroTl = new TimelineMax();
      iphoneIntroTl
        .from($iphone, 1, { yPercent: 50, xPercent: 100, ease: Power4.easeInOut })
        .to($innerS1, 0.5, { opacity: 0, yPercent: -5, scale: 0.98 }, '0');

```







