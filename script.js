const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  sideMenu.classList.toggle("open");
});

document.querySelectorAll(".side-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    sideMenu.classList.remove("open");
  });
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu = sideMenu.contains(event.target);
  const isClickOnButton = menuToggle.contains(event.target);

  if (!isClickInsideMenu && !isClickOnButton) {
    menuToggle.classList.remove("active");
    sideMenu.classList.remove("open");
  }
});

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => {
  observer.observe(item);
});