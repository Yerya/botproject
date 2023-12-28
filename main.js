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


document.getElementById('download-telegram-button').addEventListener('click', function() {
  const userAgent = navigator.userAgent;

  if (/android/i.test(userAgent)) {
      window.open('https://play.google.com/store/apps/details?id=org.telegram.messenger', '_blank');
  }
  else if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.open('https://apps.apple.com/app/telegram-messenger/id686449807', '_blank');
  }
  else {
      window.open('https://desktop.telegram.org/', '_blank');
  }
});