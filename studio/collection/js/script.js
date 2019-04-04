$(function() {
    var controller = new ScrollMagic.Controller();
    var wipeAnimation = new TimelineMax()
    .fromTo("section.panel.first",1,{x:"-100%"},{x:"0", ease: Linear.easeNone})
    .fromTo("section.panel.second",1,{x:"100%"},{x:"0", ease: Linear.easeNone})
    .fromTo("section.panel.third",1,{y:"-100%"},{y:"0", ease: Linear.easeNone});
    new ScrollMagic.Scene({
        tiggerElement:"#pinContainer",
        tiggerHook:"onLeave",
        duration:"300%"
    })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addIndicators()
    .addTo(controller);
});