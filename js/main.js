// sidebar
const openMenuBtn = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
const overlay = document.querySelector(".overlay");
const closeMenuBtn = document.getElementById("close-menu");
const nav = document.querySelector(".sidebar__nav");
let activeEl = document.querySelector(".sidebar__nav-links--active");

openMenuBtn.addEventListener("click", () => {
  sidebar.classList.add("sidebar--active");
  overlay.style.display = "block";
});

closeMenuBtn.addEventListener("click", () => {
  sidebar.classList.remove("sidebar--active");
  overlay.style.display = "none";
});

nav.addEventListener("click", (e) => {
  if (activeEl === e.target) return;
  if (e.target.classList.contains("sidebar__nav-links")) {
    if (activeEl) activeEl.classList.remove("sidebar__nav-links--active");
    activeEl = e.target;
    e.target.classList.add("sidebar__nav-links--active");
  }
});

// swiper
const addScript = document.querySelector("script");
const media = window.matchMedia("(max-width:768px)");

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

if (media.matches) {
  const scriptService = document.createElement("script");
  scriptService.src = "js/swiper.min.js";
  scriptService.defer = "true";
  document.head.insertBefore(scriptService, addScript);

  const promise = new Promise((resolve, reject) => {
    scriptService.addEventListener("load", () => {
      resolve();
    });

    scriptService.addEventListener("error", () => {
      reject();
    });
  });

  promise
    .then(() => {
      enableSwiper();
    })
    .catch((err) => alert(err.message));
}

// wrappers for show-more btn
const brandsWrapper = document.querySelector(".brands__swiper-wrapper");
const brandsShowMore = document.querySelector(".brands__btn");
const typesWrapper = document.querySelector(".types__swiper-wrapper");
const typesShowMore = document.querySelector(".types__btn");

const showMoreFunc = function (wrapper, btn) {
  const btnText = btn.querySelector("show-more__text");
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

brandsShowMore.addEventListener("click", () =>
  showMoreFunc(brandsWrapper, brandsShowMore)
);

typesShowMore.addEventListener("click", () =>
  showMoreFunc(typesWrapper, typesShowMore)
);
