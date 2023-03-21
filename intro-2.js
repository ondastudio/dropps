document.addEventListener("DOMContentLoaded", () => {
  //set the initial state of the animation
  gsap.set(".text-line", {
    strokeDasharray: "500px",
    strokeDashoffset: "500px"
  });

  const tl = new gsap.timeline({
    defaults: { duration: 3, ease: "power3.inOut" },
    onComplete: () => {
      gsap.set(".page-load", {
        display: "none"
      });
    }
  });

  tl.to(".page-wipe", {
    height: "100%",
    duration: 0.8,
    delay: 0.5,
    ease: "power2.inout"
  })
    .to(
      ".page-load_mask",
      { y: "100%", scale: 0.5, opacity: 0, duration: 0.8 },
      ">"
    )
    .to(".page-load", { opacity: 0 }, ">")

    .to(
      ".text-line",
      {
        strokeDasharray: "2000px",
        strokeDashoffset: "1000px",
        duration: 8,
        ease: "power3.inOut"
      },
      ">-=5"
    )
    .from(".home-hero_top", { scale: 1.25 }, "<")
    .from([".hero-tag", ".hero-subtitle"], { scale: 0.5, delay: 2 }, "<")
    .from(".home-hero_top", { opacity: 0 }, "<")
    .from(".hero-video", { opacity: 0 }, ">-=2")
    .from(
      [".scroll-button.is-hero", ".home-hero_livestreams"],
      {
        opacity: 0,
        y: "4rem",
        duration: 2,
        ease: "power3.out"
      },
      ">-=2"
    )
    .from(
      document.querySelector(".nav_component").children,
      {
        opacity: 0,
        y: "-100%",
        duration: 2,
        ease: "power4.out",
        stagger: 0.1
      },
      ">"
    );
});
