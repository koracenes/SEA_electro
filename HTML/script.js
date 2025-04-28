// Selektovanje elemenata
let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

// Klik na meni ikonicu
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navList.classList.toggle("open");
};

// ScrollReveal animacije
const sr = ScrollReveal({
  distance: "60px",
  duration: 2000,
  delay: 200,
  reset: true,
});

// Definisanje elemenata za animaciju
sr.reveal(".landing-text", { origin: "top" });
sr.reveal(".landing-image", { origin: "bottom", delay: 300 });
sr.reveal(".social-icons", { origin: "left", delay: 400 });
