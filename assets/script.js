var scrollToTopButton = document.getElementById("scrollToTopBtn");

window.onscroll = function() {

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    function scrollStep() {
      if (currentPosition > 0) {
        currentPosition -= 140;
        document.documentElement.scrollTop = currentPosition;
        document.body.scrollTop = currentPosition;
        window.requestAnimationFrame(scrollStep);
      }
    }

    window.requestAnimationFrame(scrollStep);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});