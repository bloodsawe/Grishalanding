"use strict";

document.addEventListener("DOMContentLoaded", function () {
  main();
});

function main() {
  stickyHeader();
  mobileMenu();
  timer();
}

function stickyHeader() {
  window.addEventListener("scroll", function () {
    var sticky = header.offsetTop;
    window.pageYOffset > sticky ? header.classList.add("sticky") : header.classList.remove("sticky");
  });
}

function mobileMenu() {
  burger.addEventListener("click", function () {
    nav.classList.add("nav__open");
    header.style.background = "transparent";
    header.style.opacity = 1;
  });
  mobileClose.addEventListener("click", function () {
    nav.classList.remove("nav__open");
    header.style.background = "";
    header.style.opacity = 0.9;
  });
}

function timer() {
  var timerItems = document.querySelectorAll(".timers__item");
  var documentHeight = document.documentElement.clientHeight;
  var timersFlags = [];
  timersFlags.length = timerItems.length;
  timersFlags.fill(true);
  window.addEventListener("scroll", function (e) {
    timerItems.forEach(function (item, i) {
      var distanceScroll = item.offsetTop - window.pageYOffset - documentHeight;

      if (distanceScroll <= 0 && timersFlags[i]) {
        timerCount(item, i, timersFlags);
      }
    });
  });
} // TODO: removeEventListener


function timerCount(timer, index, timersFlags) {
  var text = timer.querySelector(".timer__percent");
  var i = 0;
  var interval = setInterval(function () {
    text.textContent = "".concat(i, "%");
    i++;

    if (i > 100) {
      clearInterval(interval);
    }
  }, 40);
  timersFlags[index] = false;
}