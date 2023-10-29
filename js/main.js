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
