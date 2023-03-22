document.addEventListener("DOMContentLoaded", () => {
  const master = gsap.timeline();
  master.add(pageLoad()).add(introLoad());

  function pageLoad() {
    //logo animation animation
    const tl = new gsap.timeline({
      defaults: { duration: 0.8, ease: "power2.inOut" }
    });

    tl.to(".page-wipe", {
      height: "100%"
    })
      .to(".page-load_logo", { scale: 0.5 }, ">")
      .to(".page-load", { opacity: 0 }, "<");

    return tl;
  }

  function introLoad() {
    //intro animation
    const tl = new gsap.timeline({
      defaults: { duration: 3, ease: "power2.inOut" },
      onComplete: () => {
        gsap.set(".page-load", {
          display: "none"
        });
      }
    });

    tl.fromTo(
      ".text-line",
      {
        strokeDasharray: "500px",
        strokeDashoffset: "500px",
        opacity: 0
      },
      {
        strokeDasharray: "2000px",
        strokeDashoffset: "1000px",
        opacity: 1,
        duration: 4,
        ease: "power2.out"
      }
    )
      .from(".home-hero_top", { scale: 1.25 }, "<")
      .from(
        [".hero-tag", ".hero-subtitle"],
        { opacity: 0, duration: 4, ease: "power2.out", scale: 0.5 },
        "<"
      )
      .from(".hero-video", { opacity: 0 }, ">-=2")
      .from(
        ".home-hero_middle",
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

    return tl;
  }
});
