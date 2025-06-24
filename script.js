document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM carregado com GSAP e ScrollTrigger");

  const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

  tl.from(".logo", { y: -40, opacity: 0 })
    .from(".title", { y: -30, opacity: 0 }, "-=0.5")
    .from(".subtitle", { y: -20, opacity: 0 }, "-=0.5")
    .from(".btn.primary", { y: -20, opacity: 0 }, "-=0.4");

  gsap.utils.toArray(".fade-in").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 40,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });

  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      ScrollTrigger.create({
        trigger: target,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          links.forEach(l => l.classList.remove("active"));
          link.classList.add("active");
          console.log(`📌 Ativo: #${targetId}`);
        },
        onLeaveBack: () => {
          links.forEach(l => l.classList.remove("active"));
        }
      });
    }
  });
});
