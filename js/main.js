gsap.from("nav", {
  opacity: 0,
  duration: 1,
  ease: "Power4.easeInOut",
});
gsap.from(".hero h1", {
  opacity: 0,
  duration: 2,
  delay: 0.5,
  ease: "Power2.easeInOut",
});

gsap.from(".the-problem h3", {
  scrollTrigger: {
    trigger: ".the-problem",
    start: "top center", // when the top of the trigger hits the top of the viewport
    end: "center bottom",
    markers: true,
  },
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".the-problem p", {
  scrollTrigger: {
    trigger: ".the-problem",
    start: "10% center", // when the top of the trigger hits the top of the viewport
    end: "center bottom",
    markers: true,
  },
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".laptop", {
  scrollTrigger: {
    trigger: ".the-problem",
    start: "top center", // when the top of the trigger hits the top of the viewport
    end: "bottom bottom",
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    markers: true,
  },
  x: 300,
  autoAlpha: 0,
});

gsap.from(".hand", {
  scrollTrigger: {
    trigger: ".the-problem",
    start: "center center", // when the top of the trigger hits the top of the viewport
    end: "120% bottom",
    scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    markers: true,
  },
  y: 300,
  autoAlpha: 0,
});

gsap.from(".the-solution h3", {
  scrollTrigger: {
    trigger: ".the-solution",
    start: "top center", // when the top of the trigger hits the top of the viewport
    end: "center bottom",
    markers: true,
  },
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".the-solution p", {
  scrollTrigger: {
    trigger: ".the-solution",
    start: "10% center", // when the top of the trigger hits the top of the viewport
    end: "center bottom",
    markers: true,
  },
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".laptop-1", {
  scrollTrigger: {
    trigger: ".laptop-1",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    end: "top center",
    markers: true,
  },
  x: 300,
  autoAlpha: 0,
});

gsap.from(".laptop-2", {
  scrollTrigger: {
    trigger: ".laptop-2",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    end: "top center",
    markers: true,
  },
  x: -300,
  autoAlpha: 0,
});

gsap.from(".laptop-3", {
  scrollTrigger: {
    trigger: ".laptop-3",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    end: "top center",
    markers: true,
  },
  x: 300,
  autoAlpha: 0,
});

gsap.to(".sticker-1, .sticker-2, .sticker-3", {
  scrollTrigger: {
    trigger: ".the-solution",
    start: "top center", // when the top of the trigger hits the top of the viewport
    end: "bottom top",
    markers: true,
    scrub: true,
  },
  y: -50,
});

gsap.from("#button-1", {
  scrollTrigger: {
    trigger: "#button-1",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    end: "top center",
    markers: true,
  },
  y: 50,
  autoAlpha: 0,
});

gsap.from("#our-partners-laptop", {
  scrollTrigger: {
    trigger: ".our-partners",
    start: "top center", // when the top of the trigger hits the top of the viewport
    end: "center bottom",
  },
  x: 400,
  delay: 2,
  duration: 1,
  autoAlpha: 0,
});

gsap.from("#our-partners-hand", {
  scrollTrigger: {
    trigger: ".our-partners",
    start: "top center", // when the top of the trigger hits the top of the viewport
    end: "center bottom",
  },
  x: 400,
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".our-partners h3, h5", {
  scrollTrigger: {
    trigger: ".our-partners",
    start: "top center", // when the top of the trigger hits the top of the viewport
    end: "center bottom",
  },
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".our-partners p", {
  scrollTrigger: {
    trigger: ".our-partners",
    start: "top center", // when the top of the trigger hits the top of the viewport
    end: "center bottom",
    markers: true,
  },
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".our-partners .col-md-4", {
  scrollTrigger: {
    trigger: ".our-partners",
    start: "top center", // when the top of the trigger hits the top of the viewport
    end: "center bottom",
    markers: true,
  },
  y: 100,
  duration: 1,
  autoAlpha: 0,
  stagger: 0.25,
});
