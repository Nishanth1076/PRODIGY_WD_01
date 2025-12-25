const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
const navLinks = document.querySelector(".nav-links");
function toggleMenu() {
  navLinks.classList.toggle("active");
}
const modal = document.getElementById("trailerModal");
const video = document.getElementById("trailerVideo");
function openTrailer(movie) {
  const trailerUrl = movie.getAttribute("data-trailer") + "?autoplay=1&mute=1";
  video.src = trailerUrl;
  modal.style.display = "flex";
}
function closeTrailer() {
  video.src = ""; 
  modal.style.display = "none";
}

function closeTrailerOutside(event) {
  if (event.target.id === "trailerModal") {
    closeTrailer();
  }
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.display === "flex") {
    closeTrailer();
  }
});

