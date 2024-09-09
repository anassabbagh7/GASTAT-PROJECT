let hours = 1 + 0.5 + 2 + 1 + 3.5 + 1.5 + 3 + 1 + 2 + 1 + 1;
document.title = hours.toString() + " Hours";
console.log(document.getElementsByClassName("overlay").offsetWidth);

$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    rewindNav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

But = document.getElementById("TopButton");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 300) {
    But.style.display = "flex";
    But.style.justifyContent = "center";
    But.style.alignItems = "center";
  } else {
    But.style.display = "none";
  }
}
function GoToTop() {
  document.documentElement.scrollTop = 0;
}
