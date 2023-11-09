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

const showMoreFunc = function (wrapper, btn, btnText) {
  if (wrapper.classList.contains("section__swiper-wrapper--active")) {
    wrapper.classList.remove("section__swiper-wrapper--active");
    btnText.innerText = "Показать все";
    btn.classList.remove("section__btn--active");
  } else {
    wrapper.classList.add("section__swiper-wrapper--active");
    btnText.innerText = "Скрыть";
    btn.classList.add("section__btn--active");
  }
};

const brandsWrapper = document.querySelector(".brands__swiper-wrapper");
const brandsShowMore = document.querySelector(".brands__btn");
const brandsShowMoreText = brandsShowMore.querySelector(".brands__btn-text");

brandsShowMore.addEventListener("click", () =>
  showMoreFunc(brandsWrapper, brandsShowMore, brandsShowMoreText)
);

const typesWrapper = document.querySelector(".types__swiper-wrapper");
const typesShowMore = document.querySelector(".types__btn");
const typesShowMoreText = typesShowMore.querySelector(".types__btn-text");

typesShowMore.addEventListener("click", () =>
  showMoreFunc(typesWrapper, typesShowMore, typesShowMoreText)
);
