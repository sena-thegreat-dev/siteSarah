document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox .close');
  const themeToggle = document.getElementById('theme-toggle');
  const audio = document.getElementById("music-player");
  const playPauseBtn = document.getElementById("play-pause-button");
  const currentTimeElem = document.getElementById("current-time");
  const durationElem = document.getElementById("duration");
  const progressBar = document.getElementById("progress-bar");

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  }

  audio.addEventListener("loadedmetadata", () => {
    durationElem.textContent = formatTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
  });

  audio.addEventListener("timeupdate", () => {
    currentTimeElem.textContent = formatTime(audio.currentTime);
    progressBar.value = Math.floor(audio.currentTime);
  });

  progressBar.addEventListener("input", () => {
    audio.currentTime = progressBar.value;
  });

  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "❚❚";
    } else {
      audio.pause();
      playPauseBtn.textContent = "▶";
    }
  });
  // Tema: aplicar tema salvo
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }

  // Alternar tema
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Funções Lightbox
  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "Imagem ampliada";
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImg.src = "";
    document.body.style.overflow = '';
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      openLightbox(item.src, item.alt);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  let lastScrollTop = 0;
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Rolando para baixo
      header.classList.add("header-hidden");
    } else {
      // Rolando para cima
      header.classList.remove("header-hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

});
