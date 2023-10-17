const openMenu = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
openMenu.addEventListener("click", () => {
  sidebar.classList.add("sidebar--active");
});

const closeMenu = document.getElementById("close-menu");
closeMenu.addEventListener("click", () => {
  sidebar.classList.remove("sidebar--active");
});

const linksNav = document.querySelectorAll(".sidebar__nav-item");
console.log(linksNav);
for (let index = 0; index < linksNav.length; index++) {
  linksNav[index].addEventListener("click", () => {
    for (let index = 0; index < linksNav.length; index++) {
      linksNav[index].classList.remove("active");
    }
    linksNav[index].classList.add("active");
  });
}
