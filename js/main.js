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
    // Optional parameters
    slidesPerView: 1.2,
    direction: "horizontal",
    spaceBetween: 16,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

breakpoint.addEventListener("change", breakpointChecker);
breakpointChecker();
