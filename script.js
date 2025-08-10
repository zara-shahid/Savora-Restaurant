// Smooth scrolling for navbar links
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    }
  });
});

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Back-to-top button
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 300);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===== Gallery Filter =====
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".gallery-filter button");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.opacity = "0";
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = "1";
            item.classList.add("aos-animate");
          }, 50);
        } else {
          item.style.opacity = "0";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });
});
