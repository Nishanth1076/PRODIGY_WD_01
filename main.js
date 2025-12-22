// ===== Navbar scroll effect =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===== Mobile menu toggle =====
const navLinks = document.querySelector(".nav-links");
function toggleMenu() {
  navLinks.classList.toggle("active");
}

// ===== Trailer modal =====
const modal = document.getElementById("trailerModal");
const video = document.getElementById("trailerVideo");

// Open trailer
function openTrailer(movie) {
  const trailerUrl = movie.getAttribute("data-trailer") + "?autoplay=1&mute=1";
  video.src = trailerUrl;
  modal.style.display = "flex";
}

// Close trailer
function closeTrailer() {
  video.src = ""; // stop playback
  modal.style.display = "none";
}

// Close when clicking outside modal content
function closeTrailerOutside(event) {
  if (event.target.id === "trailerModal") {
    closeTrailer();
  }
}

// Close with Esc key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.display === "flex") {
    closeTrailer();
  }
});
