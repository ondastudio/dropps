document.addEventListener("DOMContentLoaded", () => {
  //Back to top button
  document.querySelector(".scroll-button.is-footer").onclick = () => {
    gsap.to("html, body", {
      scrollTop: 0,
      duration: 3,
      ease: "power3.inOut"
    });
  };
});
