"use strict";

document.addEventListener("DOMContentLoaded", function () {
  main();
});

function main() {
  stickyHeader();
}

function stickyHeader() {
  window.addEventListener("scroll", function () {
    var sticky = header.offsetTop;
    window.pageYOffset > sticky ? header.classList.add("sticky") : header.classList.remove("sticky");
  });
}