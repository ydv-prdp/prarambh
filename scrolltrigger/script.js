gsap.from("#page1 .box",{
    scale:0,
    opacity:0,
    duration:1,
    delay:0.3,
    rotate:360
})


gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    delay:0.3,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroll:"body",
        start:"top 50%",
        end:"top 30%",
        scrub:5,
        markers:true
    }
})