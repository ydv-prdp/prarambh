var tl = gsap.timeline()
tl.from("nav img, nav #nav_mid, nav #nav_last",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.3
})

tl.from("#hero h4",{
    y:200,
    duration:1,
    opacity:0
})

tl.from("#hero img",{
    scale:0,
    opacity:0,
    stagger:0.3,
    duration:1
})