gsap.from("#page2>h1",{
  scale: 0.5,
  opacity: 0,
  duration: 0.5,
  scrollTrigger:{
    trigger: "#page2 h1",
    scroller: "body",
    scrub: 2,
    // markers: true,
    start: "top 50%",
    end: "top 40%"
  }  
})

gsap.from(".section", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger: "#page2 .section",
        scroller: "body",
        scrub: 2,
        // markers: true,
        start: "top 70%",
        end: "top 40%"
    },
    stagger: 0.5
})