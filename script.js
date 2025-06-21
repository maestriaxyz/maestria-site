document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM completamente carregado.");

  // Elementos da hero section para animação inicial
  const heroElements = [
    { selector: '.logo', name: 'Logo' },
    { selector: '.title', name: 'Título' },
    { selector: '.subtitle', name: 'Subtítulo' },
    { selector: '.btn.primary', name: 'Botão Principal' }
  ];

  // Animação sequencial com verificação e log
  heroElements.forEach((elData, index) => {
    const el = document.querySelector(elData.selector);
    if (el) {
      console.log(`🎯 Elemento encontrado: ${elData.name}`);
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
        console.log(`✨ ${elData.name} animado com sucesso.`);
      }, index * 300);
    } else {
      console.warn(`⚠️ Elemento não encontrado: ${elData.name} (${elData.selector})`);
    }
  });

  // Animações ao rolar usando Intersection Observer
  const fadeInElements = document.querySelectorAll('.fade-in');
  if (fadeInElements.length > 0) {
    console.log(`📦 ${fadeInElements.length} elementos com fade-in encontrados.`);

    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(`🟢 Entrou na viewport:`, entry.target);
          entry.target.classList.add('visible');
          observerInstance.unobserve(entry.target);
        } else {
          console.log(`🔵 Fora da viewport (ainda):`, entry.target);
        }
      });
    }, observerOptions);

    fadeInElements.forEach(el => observer.observe(el));
  } else {
    console.warn("⚠️ Nenhum elemento com classe .fade-in encontrado.");
  }
});
