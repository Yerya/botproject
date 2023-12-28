window.onload = function () {
  setTimeout(function () {
    document.getElementById("hero-section").style.animation =
      "slideUp 1s ease-out";
  }, 0);

  setTimeout(function () {
    document.getElementById("botlink").style.opacity = "1";
    document.getElementById("botlink").style.transform = "translateY(0)";
    document.getElementById("botlink").style.transition = "all 1s ease-out";
  }, 250); // Delay in milliseconds
};


