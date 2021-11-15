jQuery(function ($) {
  "use strict",
    $("#countdown").countdown(
      { date: "31 January 2018 12:00:00", format: "on" },
      function () {}
    );
  function menuToggle() {
    var windowWidth = $(window).width();
    if (windowWidth > 767) {
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 405) {
          $(".main-nav").addClass("fixed-menu animated slideInDown");
        } else {
          $(".main-nav").removeClass("fixed-menu animated slideInDown");
        }
      });
    } else {
      $(".main-nav").addClass("fixed-menu animated slideInDown");
    }
  }
  menuToggle();
  $("#event-carousel, #twitter-feed, #sponsor-carousel ").carousel({
    interval: false,
  });
  $(window).resize(function () {
    menuToggle();
  });
  $(".main-nav ul").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 900,
    scrollOffset: 0,
    scrollThreshold: 0.3,
    filter: ":not(.no-scroll)",
  });
});
var $cont = document.querySelector(".cont");
var $elsArr = [].slice.call(document.querySelectorAll(".el"));
var $closeBtnsArr = [].slice.call(document.querySelectorAll(".el__close-btn"));

setTimeout(function () {
  $cont.classList.remove("s--inactive");
}, 200);

$elsArr.forEach(function ($el) {
  $el.addEventListener("click", function () {
    if (this.classList.contains("s--active")) return;
    $cont.classList.add("s--el-active");
    this.classList.add("s--active");
  });
});

$closeBtnsArr.forEach(function ($btn) {
  $btn.addEventListener("click", function (e) {
    e.stopPropagation();
    $cont.classList.remove("s--el-active");
    document.querySelector(".el.s--active").classList.remove("s--active");
  });
});
