document.addEventListener("DOMContentLoaded", () => {
    //preventing animation from playing on safari to remove blend mode bug
    const isSafari = window.safari !== undefined;
    if (isSafari) {
      return;
    } else {
      if (window.innerWidth > 991) {
        const videoElement = document.querySelector(".home-hero_visual");
        const tl = new gsap.timeline({
          scrollTrigger: {
            trigger: videoElement,
            start: "top 5%",
            scrub: 1.5
          }
        });
        tl.fromTo(videoElement, { y: "-5%" }, { y: "15%", ease: "none" });
      }
    }
  });
  