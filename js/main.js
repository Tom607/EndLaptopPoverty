gsap.from("nav", {
  opacity: 0,
  duration: 1,
  ease: "Power4.easeInOut",
});
gsap.from(".hero h1", {
  autoAlpha: 0,
  y: 10,
  duration: 0.5,
  delay: 0.5,
});

gsap.from(".the-problem h3", {
  scrollTrigger: {
    trigger: ".the-problem",
    start: "top 70%", // when the top of the trigger hits the top of the viewport
  },
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".the-problem p", {
  scrollTrigger: {
    trigger: ".the-problem",
    start: "top 60%", // when the top of the trigger hits the top of the viewport
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
  },
  y: 300,
  autoAlpha: 0,
});

gsap.from(".the-solution h3", {
  scrollTrigger: {
    trigger: ".the-solution",
    start: "top 70%", // when the top of the trigger hits the top of the viewport
  },
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".the-solution p", {
  scrollTrigger: {
    trigger: ".the-solution",
    start: "top 60%", // when the top of the trigger hits the top of the viewport
  },
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".laptop-1", {
  scrollTrigger: {
    trigger: ".laptop-1",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    end: "top center",
  },
  x: 300,
  autoAlpha: 0,
});

gsap.from(".laptop-2", {
  scrollTrigger: {
    trigger: ".laptop-2",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    end: "top center",
  },
  x: -300,
  autoAlpha: 0,
});

gsap.from(".laptop-3", {
  scrollTrigger: {
    trigger: ".laptop-3",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    end: "top center",
  },
  x: 300,
  autoAlpha: 0,
});

gsap.to(".sticker-1, .sticker-2, .sticker-3", {
  scrollTrigger: {
    trigger: ".the-solution",
    start: "top center", // when the top of the trigger hits the top of the viewport
    end: "bottom top",
    scrub: true,
  },
  y: -50,
});

gsap.from(".our-partners-laptop", {
  scrollTrigger: {
    trigger: ".our-partners",
    start: "top center",
    end: "top 20%",
    scrub: 1, // when the top of the trigger hits the top of the viewport
  },
  x: 30,
  duration: 1,
  opacity: 0,
});

gsap.from(".our-partners-hand", {
  scrollTrigger: {
    trigger: ".our-partners",
    start: "top center", // when the top of the trigger hits the top of the viewport
  },
  x: 30,
  delay: 0.25,
  duration: 1,
  opacity: 0,
});

gsap.from(".our-partners-title", {
  scrollTrigger: {
    trigger: ".our-partners",
    start: "top 90%", // when the top of the trigger hits the top of the viewport
  },
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".our-partners-header", {
  scrollTrigger: {
    trigger: ".our-partners",
    start: "top 80%", // when the top of the trigger hits the top of the viewport
  },
  x: -50,
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".our-partners-body", {
  scrollTrigger: {
    trigger: ".our-partners",
    start: "top 70%", // when the top of the trigger hits the top of the viewport
  },
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".partner", {
  scrollTrigger: {
    trigger: ".our-partners",
    start: "top center", // when the top of the trigger hits the top of the viewport
  },
  y: 100,
  duration: 1,
  autoAlpha: 0,
  stagger: 0.25,
});

gsap.from(".support-us h3", {
  scrollTrigger: {
    trigger: ".support-us",
    start: "center bottom", // when the top of the trigger hits the top of the viewport
  },
  delay: 0.25,
  duration: 1,
  autoAlpha: 0,
});

gsap.from(".support-us h5", {
  scrollTrigger: {
    trigger: ".support-us",
    start: "center bottom", // when the top of the trigger hits the top of the viewport
  },
  x: -50,
  duration: 1,
  autoAlpha: 0,
});

gsap.from("#button-2", {
  scrollTrigger: {
    trigger: ".support-us",
    start: "center bottom", // when the top of the trigger hits the top of the viewport
  },
  y: 50,
  delay: 0.5,
  duration: 1,
  autoAlpha: 0,
});
