// Load GSAP Library
$w.onReady(function () {
  let gsapScript = document.createElement("script");
  gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js";
  gsapScript.onload = () => {
    // Run your animation code here after GSAP loads
    startAnimation();
  };
  document.head.appendChild(gsapScript);
});
