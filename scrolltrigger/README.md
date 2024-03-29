# Scroll Trigger
    - ScrollTrigger enables anyone to create jaw-dropping scroll-based animations with minimal code. Infinitely flexible. Scrub, pin, snap, or just trigger anything scroll-related, even if it has nothing to do with animation.

    ```
    let tl = gsap.timeline({
    scrollTrigger: {
    trigger: ".container", <!---start the animation when ".box" enters the viewport (once) --->
    pin: true, <!--- pin the trigger element while active --->
    start: "top top", <!--- when the top of the trigger hits the top of the viewport --->
    end: "+=500", <!--- end after scrolling 500px beyond the start --->
    scrub: 1, <!--- smooth scrubbing, takes 1 second to "catch up" to the scrollbar --->
    snap: {
      snapTo: "labels", <!--- snap to the closest label in the timeline --->
      duration: { min: 0.2, max: 3 }, <!--- the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity) --->
      delay: 0.2, <!--- wait 0.2 seconds from the last scroll event before doing the snapping --->
      ease: "power1.inOut", <!--- the ease of the snap animation ("power3" by default) --->
    },
    },
    });

  ```
tl.addLabel("start")
  .from(".box p", { scale: 0.3, rotation: 45, autoAlpha: 0 })
  .addLabel("color")
  .from(".box", { backgroundColor: "#28a92b" })
  .addLabel("spin")
  .to(".box", { rotation: 360 })
  .addLabel("end");

  