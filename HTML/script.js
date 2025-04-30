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

// Smooth scroll with 200px offset
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      e.preventDefault();
      const offset = 150;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close menu if in mobile view
      navList.classList.remove("open");
      menuIcon.classList.remove("bx-x");
    }
  });
});
