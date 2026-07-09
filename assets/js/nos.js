document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".abrir-galeria");

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const galeriaId = btn.getAttribute("data-galeria");
      const galeria = document.getElementById(galeriaId);
      if (galeria) {
        galeria.style.display = "grid";
        btn.style.display = "none";
      }
    });
  });

  // Modo escuro
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '🌴';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '🌴' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
