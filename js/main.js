// sidebar
const openMenuBtn = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
const overlay = document.querySelector(".overlay");
openMenuBtn.addEventListener("click", () => {
  sidebar.classList.add("sidebar--active");
  overlay.style.display = "block";
});

const closeMenuBtn = document.getElementById("close-menu");
closeMenuBtn.addEventListener("click", () => {
  sidebar.classList.remove("sidebar--active");
  overlay.style.display = "none";
});

// const linksNav = document.querySelectorAll(".sidebar__nav-item");
// console.log(linksNav);
// for (let index = 0; index < linksNav.length; index++) {
//   linksNav[index].addEventListener("click", () => {
//     for (let index = 0; index < linksNav.length; index++) {
//       linksNav[index].classList.remove("active");
//     }
//     linksNav[index].classList.add("active");
//   });
// }

const nav = document.querySelector(".sidebar__nav");
let activeEl = document.querySelector(".sidebar__nav-links--active");
nav.addEventListener("click", (e) => {
  if (activeEl === e.target) return;
  if (e.target.classList.contains("sidebar__nav-links")) {
    if (activeEl) activeEl.classList.remove("sidebar__nav-links--active");
    activeEl = e.target;
    e.target.classList.add("sidebar__nav-links--active");
  }
});

// swiper
const breakpoint = window.matchMedia("(min-width:768px)");

let swiper;

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    if (swiper !== undefined) swiper.destroy(true, true);
    return;
  } else {
    return enableSwiper();
  }
};

const enableSwiper = function () {
  swiper = new Swiper(".swiper", {
    slidesPerView: 1.2,
    direction: "horizontal",
    spaceBetween: 16,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

breakpoint.addEventListener("change", breakpointChecker);
breakpointChecker();

const brandsWrapper = document.querySelector(".brands__swiper-wrapper");
const showMore = document.querySelector(".brands__btn");
const showMoreText = showMore.querySelector(".brands__btn-text");
showMore.addEventListener("click", () => {
  if (brandsWrapper.classList.contains("brands__swiper-wrapper--active")) {
    brandsWrapper.classList.remove("brands__swiper-wrapper--active");
    showMoreText.innerText = "Показать все";
    showMore.classList.remove("brands__btn--active");
  } else {
    brandsWrapper.classList.add("brands__swiper-wrapper--active");
    showMoreText.innerText = "Скрыть";
    showMore.classList.add("brands__btn--active");
  }
});
