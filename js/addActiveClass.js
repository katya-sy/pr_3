let openMenu = document.getElementById("burger");
let sidebar = document.getElementById("sidebar");
openMenu.addEventListener("click", () => {
  sidebar.classList.add("sidebar--active");
});

let closeMenu = document.getElementById("close-menu");
closeMenu.addEventListener("click", () => {
  sidebar.classList.remove("sidebar--active");
});
