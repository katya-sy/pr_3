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
  document.querySelector("html").style.overflowY = "hidden";
});

closeMenuBtn.addEventListener("click", () => {
  sidebar.classList.remove("sidebar--active");
  overlay.style.display = "none";
  document.querySelector("html").style.overflowY = "auto";
});

// sidebar links
nav.addEventListener("click", (e) => {
  if (activeEl === e.target) return;
  if (e.target.classList.contains("sidebar__nav-links")) {
    if (activeEl) activeEl.classList.remove("sidebar__nav-links--active");
    activeEl = e.target;
    e.target.classList.add("sidebar__nav-links--active");
  }
});

// modal windows
const callBtn = document.querySelector("#call");
const feedbackBtn = document.querySelector("#feedback");
const callModal = document.querySelector(".call");
const feedbackModal = document.querySelector(".feedback");
const closeCallModalBtn = document.querySelector("#close-modal-call");
const closeFeedbackModalBtn = document.querySelector("#close-modal-feedback");

const openModal = function (modal) {
  modal.classList.add("modal--active");
  overlay.style.display = "block";
  document.querySelector("html").style.overflowY = "hidden";
  sidebar.classList.remove("sidebar--active");
};

const closeModal = function (modal) {
  modal.classList.remove("modal--active");
  overlay.style.display = "none";
  document.querySelector("html").style.overflowY = "auto";
};

callBtn.addEventListener("click", () => {
  openModal(callModal);
});

feedbackBtn.addEventListener("click", () => {
  openModal(feedbackModal);
});

closeCallModalBtn.addEventListener("click", () => {
  closeModal(callModal);
});

closeFeedbackModalBtn.addEventListener("click", () => {
  closeModal(feedbackModal);
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
  const btnText = btn.querySelector(".show-more__text");
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

// render table from swiper
const priceSwiper = document.querySelector(".price__swiper-wrapper");
let priceSwiperSlides = priceSwiper.querySelectorAll(".price__swiper-slide");
const priceTable = document.createElement("table");
const priceTableHead = document.createElement("thead");
const priceTableBody = document.createElement("tbody");

const fillTableHead = function () {
  const tableHeadRow = document.createElement("tr");
  priceTableHead.append(tableHeadRow);

  let tableHeaders = document.querySelectorAll(".price__swiper-title");
  tableHeaders = Array.from(tableHeaders);
  tableHeaders = tableHeaders.slice(0, 3);

  tableHeaders.forEach((value) => {
    const header = document.createElement("th");
    header.classList.add("price__swiper-title");
    header.innerText = value.innerText;
    tableHeadRow.append(header);
  });
  tableHeadRow.append(document.createElement("th"));
};

const fillTableBody = function () {
  priceSwiperSlides.forEach((value) => {
    const tableRow = document.createElement("tr");
    let tableData = value.querySelectorAll(".price__td");

    tableData.forEach((data) => {
      const tableCell = document.createElement("td");
      if (data.classList.contains("price__list-item--btn")) {
        tableCell.innerHTML = data.innerHTML;
      } else {
        tableCell.innerText = data.innerText;
        tableCell.classList.add("price__swiper-desc");
      }
      tableRow.append(tableCell);
    });
    priceTableBody.append(tableRow);
  });
};

if (!media.matches) {
  fillTableHead();
  fillTableBody();

  priceSwiper.replaceWith(priceTable);
  priceTable.append(priceTableHead);
  priceTable.append(priceTableBody);

  priceTable.classList.add("price__table");
}
