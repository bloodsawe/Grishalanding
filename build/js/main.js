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
  var timerItems = document.querySelectorAll(".timer__percent");
  timerItems.forEach(function (item) {
    window.addEventListener("scroll", function () {
      timerCount(item);
    });
  });
}

function timerCount(timer) {
  var i = 0;
  var interval = setInterval(function () {
    timer.textContent = "".concat(i, "%");
    i++;

    if (i > 100) {
      clearInterval(interval);
    }
  }, 20);
}