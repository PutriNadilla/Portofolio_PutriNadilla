// Navbar 
window.onscroll = function () {
  const header = document.querySelector("header");
  const toTop = document.querySelector("#backToTop");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

// Hero
document.addEventListener('DOMContentLoaded', function(){
  var typed = new Typed('.text', {
      strings: ['Student of Mulawarman University'],
      typeSpeed: 120,
      loop: true,
      backDelay: 1120,
      backSpeed:120
  });
});

// Humberger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode Toggle
const darkToogle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToogle.addEventListener("click", function () {
  if (darkToogle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// toogle sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToogle.checked = true;
} else {
  darkToogle.checked = true;
}

// Tampilkan isi form menggunakan alert
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const formData = {
          name: name,
          email: email,
          message: message
      };

      alert(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);

      form.reset();
  });
});

// Rubah Warna
document.addEventListener("DOMContentLoaded", function () {
  const logos = document.querySelectorAll(".skill-logo");

  logos.forEach((logo) => {
    setInterval(() => {
      logo.classList.toggle("grayscale");
    }, 2000); 
  });
});