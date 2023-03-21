document.addEventListener("DOMContentLoaded", () => {
  //placing the video behind the text on safari for visual clarity

  //check desktop safari
  const isSafari = window.safari !== undefined;

  //mobile safari
  var ua = window.navigator.userAgent;
  var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
  var webkit = !!ua.match(/WebKit/i);
  var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

  //change background on Safari desktop & mobile
  if (isSafari || iOSSafari) {
    document.querySelector(".home-hero_top").style.zIndex = 3;
    document.querySelector(".home-hero_visual").style.mixBlendMode = "lighten";
  }

  //change background on chrome mobile
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
      ua
    )
  ) {
    document.querySelector(".home-hero_top").style.zIndex = 3;
    document.querySelector(".home-hero_visual").style.mixBlendMode = "lighten";
  }
});
