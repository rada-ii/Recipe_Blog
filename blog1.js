window.addEventListener("scroll", function () {
  let scrollTopBtn = document.querySelector(".scroll-up");
  let scrollDownBtn = document.querySelector(".scroll-down");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }

  if (
    window.innerHeight + window.pageYOffset >=
    document.documentElement.offsetHeight - 20
  ) {
    scrollDownBtn.style.display = "none";
  } else {
    scrollDownBtn.style.display = "block";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}
// year automatic
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// toggle mobile navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});


// Smooth scrolling for main navigation links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".main-nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 5, // Adjust the offset value as needed
          behavior: "smooth",
        });
      }
    });
  });
});
