// js/main.js:
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
    event.preventDefault();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const nosotrosSection = document.getElementById("nosotros");
  const reviewsSection = document.getElementById("reviews");
  let animationTriggered = false;

  function checkScroll() {
    if (animationTriggered) return;

    const rect = nosotrosSection.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.8; // Dispara cuando el 80% de la sección es visible

    if (rect.top <= triggerPoint) {
      nosotrosSection.classList.add("animate-circle", "visible");
      nosotrosSection.classList.remove("hidden");
      animationTriggered = true;
      reviewsSection.classList.add("animate-circle", "visible");
      reviewsSection.classList.remove("hidden");
      animationTriggered = true;
    }
  }

  // Verificar en el scroll
  window.addEventListener("scroll", checkScroll);
  // Verificar también al cargar la página en caso de que la sección ya esté visible
  checkScroll();

  // El resto de tu código GSAP permanece igual
  gsap.registerPlugin(ScrollTrigger);

  gsap.set("#centro", { scale: 0, opacity: 0 });
  gsap.set("#second-center", { scale: 0, opacity: 0 });
  gsap.set("#arco", { scale: 0, opacity: 0 });
  gsap.set(".petal", { scale: 0, opacity: 0 });
  gsap.set(".texto", { scale: 0, opacity: 0 });

  ScrollTrigger.create({
    trigger: "#margarita",
    start: "top center",
    toggleActions: "play none none reset",
    onEnter: () => {
      gsap.to("#centro", {
        duration: 0.5,
        scale: 1,
        opacity: 1,
        delay: 0.5,
        onComplete: () => {
          gsap.to("#second-center", {
            duration: 1,
            scale: 1,
            opacity: 1,
            delay: 0.5,
            onComplete: () => {
              gsap.to("#arco", {
                duration: 1.5,
                scale: 1,
                opacity: 1,
                delay: 0.5,
                onComplete: () => {
                  gsap.to(".petal", {
                    duration: 2,
                    scale: 1,
                    opacity: 1,
                    delay: 0.5,
                    onComplete: () => {
                      gsap.to(".texto", {
                        duration: 2.5,
                        scale: 1,
                        opacity: 1,
                        delay: 0.5,
                      });
                    },
                  });
                },
              });
            },
          });
        },
      });
    },
  });
});
