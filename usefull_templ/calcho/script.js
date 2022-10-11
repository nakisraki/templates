var mySwiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },
  autoplay: {
    delay: 15000,
    disableOnInteraction: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const searchForm = document.getElementById("searchFormTrigger");
const searchClear = document.getElementById("searchClear");
const searchClose = document.getElementById("searchClose");
const searchWrapper = document.getElementById("searchWrapper");

searchClear.addEventListener(
  "click",
  function () {
    document.querySelector("#searchInput").value = "";
  },
  false
);

searchClose.addEventListener(
  "click",
  function () {
    searchWrapper.classList.toggle("show");
  },
  false
);

searchForm.addEventListener(
  "click",
  function () {
    searchWrapper.classList.toggle("show");
  },
  false
);

$("form").submit(function (e) {
  e.preventDefault();
});

$(".article-filters .article-share svg").each(function (index) {
  $(this).on("click", function (event) {
    event.stopPropagation();
    $(".social-share").removeClass("show");
    $(this).next(".social-share").toggleClass("show");
  });
});

$(".nav-item-menu").on("click", function () {
  $(".nav-item-menu")
    .not(this)
    .removeClass("active")
    .find(".dropdown")
    .removeClass("show");

  $(this).toggleClass("active").find(".dropdown").toggleClass("show");
});

$(document).on("click", function (event) {
  if (!$(event.target).closest(".nav-link").length) {
    $(".dropdown").removeClass("show");
    $(".nav-item-menu").removeClass("active");
  }
});