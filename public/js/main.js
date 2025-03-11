// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("contextmenu", (event) => event.preventDefault());

  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
      event.preventDefault();
    }
  });

  // === Cierre del Menú Hamburguesa ===
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector("#navbarNav");
  const bsCollapse = navbarCollapse
    ? new bootstrap.Collapse(navbarCollapse, { toggle: false })
    : null;

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (bsCollapse) bsCollapse.hide();
      const targetId = link.getAttribute("href");
      setTimeout(() => {
        const targetElement = document.querySelector(targetId);
        if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
      }, 250);
    });
  });

  // === Dark Mode ===
  const toggleDarkMode = () => {
    const body = document.body;
    const navbar = document.querySelector(".navbar");
    const toggleButton = document.getElementById("darkModeToggle");
    const darkMode = localStorage.getItem("darkMode") === "enabled";

    if (darkMode) {
      body.classList.add("dark-mode");
      navbar.classList.add("dark-mode");
      toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      body.classList.remove("dark-mode");
      navbar.classList.remove("dark-mode");
      toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    }
  };

  toggleDarkMode(); // Aplicar al cargar
  document.getElementById("darkModeToggle").addEventListener("click", () => {
    const body = document.body;
    const navbar = document.querySelector(".navbar");
    const toggleButton = document.getElementById("darkModeToggle");

    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      navbar.classList.remove("dark-mode");
      toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem("darkMode", "disabled");
    } else {
      body.classList.add("dark-mode");
      navbar.classList.add("dark-mode");
      toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem("darkMode", "enabled");
    }
  });

  // === Configuración de EmailJS ===
  emailjs.init("ZFNa8J5Ckf-Cv-kv1");
  document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;

    emailjs.sendForm("service_hc1g5ck", "template_omfi5rs", form).then(
      () => {
        console.log("Mensaje Enviado con Éxito!");
        alert("Mensaje Enviado con Éxito");
        form.reset();
      },
      (error) => {
        console.log("Error al Enviar el Mensaje", error);
        alert("Error al Enviar el Mensaje");
      }
    );
  });
});
