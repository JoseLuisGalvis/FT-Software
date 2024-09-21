// Efecto Parallax
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".parallax-section").forEach((section, i) => {
  gsap.fromTo(
    section,
    {
      y: 50,
      opacity: 0.8,
    },
    {
      y: -50,
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    }
  );
});
