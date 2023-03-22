document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 992) {
    gsap.registerPlugin(ScrollTrigger);

    const splitType = SplitType.create(".split-type", {
      types: "lines",
      lineClass: "split-line"
    });

    const splitSections = [...document.querySelectorAll(".split-type")];

    splitSections.forEach((section) => {
      const splitLines = [...section.querySelectorAll(".split-line")];

      const tl = new gsap.timeline({
        defaults: {
          duration: 1,
          ease: "power2.out",
          stagger: 0.1
        },
        scrollTrigger: {
          trigger: section,
          start: "top 90%"
        }
      });

      tl.from(splitLines, { y: "2rem", opacity: 0 });
    });

    //manage resize
    function manageResize() {
      splitType.split();
    }

    window.addEventListener("resize", manageResize);
  }
});
