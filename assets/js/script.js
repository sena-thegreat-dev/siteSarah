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
  const nextBtn = document.getElementById("next-button");
  const prevBtn = document.getElementById("prev-button");
  const title = document.getElementById("track-title");
  const cover = document.getElementById("cover");
  const btnRevelar = document.getElementById("revelar-fraqueza");
  const galeriaMusicas = document.getElementById("galeria-musicas");
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');

  mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Opcional: Fechar o menu quando clicar em um link
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  btnRevelar.addEventListener("click", () => {
    galeriaMusicas.style.display = "grid"; // ou "block", dependendo do layout da galeria
    btnRevelar.style.display = "none"; // Esconde o botão após revelar
  });

  const songs = [
    {
      title: "Bebeto - Água Marinha",
      src: "./assets/audio/Bebeto - Agua Marinha.mp3",
      cover: "./assets/img/capas/bebeto.jpg"
    },
    {
      title: "Mano Brown - Mulher Elétrica",
      src: "./assets/audio/Mano Brown - Mulher Elétrica.mp3",
      cover: "./assets/img/capas/boogieNaipe.jpg"
    },
    {
      title: "Martinho Da Vila - Disritmia",
      src: "./assets/audio/Martinho Da Vila - Disritmia.mp3",
      cover: "./assets/img/capas/martinho.jpg"
    },
    {
      title: "ANAVITÓRIA - Cor de Marte",
      src: "./assets/audio/ANAVITÓRIA - Cor de Marte.mp3",
      cover: "./assets/img/capas/cordemarte.jpg"
    },
    {
      title: "Budah x Chris - Estar com você",
      src: "./assets/audio/Budah x Chris - Estar com você.mp3",
      cover: "./assets/img/capas/estar.jpg"
    },
    {
      title: "Miúcha, Tom Jobim - Pela Luz dos Olhos Teus",
      src: "./assets/audio/Miúcha, Tom Jobim - Pela Luz dos Olhos Teus.mp3",
      cover: "./assets/img/capas/pelaluz.jpg"
    },
    {
      title: "ANAVITÓRIA - Lisboa",
      src: "./assets/audio/ANAVITÓRIA - Lisboa.mp3",
      cover: "./assets/img/capas/lisboa.jpg"
    },
    {
      title: "Grupo Revelação - Grades Do Coração",
      src: "./assets/audio/Grupo Revelação - Grades Do Coração.mp3",
      cover: "./assets/img/capas/exalta.jpg"
    },
    {
      title: "Arlindo Cruz - Não Penso em Mais Nada",
      src: "./assets/audio/Arlindo Cruz - Não Penso em Mais Nada.mp3",
      cover: "./assets/img/capas/arlindo1.jpg"
    },
    {
      title: "Marvin Gaye - I Want You",
      src: "./assets/audio/Marvin Gaye - I Want You.mp3",
      cover: "./assets/img/capas/marvin.jpg"
    },
    {
      title: "Daniel Caesar - Best Part",
      src: "./assets/audio/Daniel Caesar - Best Part.mp3",
      cover: "./assets/img/capas/daniel.jpg"
    },
    {
      title: "Steve Lacy - Give You the World",
      src: "./assets/audio/Steve Lacy - Give You the World.mp3",
      cover: "./assets/img/capas/steve.jpg"
    },
    {
      title: "Grupo Revelação - Amor Sem Fim",
      src: "./assets/audio/Grupo Revelação - Amor Sem Fim.mp3",
      cover: "./assets/img/capas/revelacao2.jpg"
    },
    {
      title: "Arlindo Cruz - Trilha do Amor",
      src: "./assets/audio/Arlindo Cruz - Trilha do Amor.mp3",
      cover: "./assets/img/capas/arlindo2.jpg"
    },
    {
      title: "Péricles - Linguagem dos Olhos",
      src: "./assets/audio/Péricles - Linguagem dos Olhos.mp3",
      cover: "./assets/img/capas/pericles.jpg"
    },
    {
      title: "Jorge Aragão - Loucuras de uma paixão",
      src: "./assets/audio/Jorge Aragão - Loucuras de uma paixão.mp3",
      cover: "./assets/img/capas/jorge.jpg"
    },
    {
      title: "Grupo Revelação - Essência Da Paixão",
      src: "./assets/audio/Grupo Revelação - Essência Da Paixão.mp3",
      cover: "./assets/img/capas/revelacao.jpg"
    },
    {
      title: "Calcinha Preta - Liga pra Mim",
      src: "./assets/audio/Calcinha Preta - Liga pra Mim.mp3",
      cover: "./assets/img/capas/calcinha.jpg"
    },
    {
      title: "Calcinha Preta - Mágica",
      src: "./assets/audio/Calcinha Preta - Mágica.mp3",
      cover: "./assets/img/capas/calcinha.jpg"
    },
    {
      title: "Grupo Revelação - Compasso Do Amor",
      src: "./assets/audio/Grupo Revelação - Compasso Do Amor.mp3",
      cover: "./assets/img/capas/revelacao3.jpg"
    },
    {
      title: "Jorge Ben Jor - Domingas",
      src: "./assets/audio/Jorge Ben Jor - Domingas.mp3",
      cover: "./assets/img/capas/jorgeben2.jfif"
    },
    {
      title: "Péricles - Eu Te Amo",
      src: "./assets/audio/Péricles - Eu Te Amo.mp3",
      cover: "./assets/img/capas/pericles2.jpg"
    },
    {
      title: "Grupo Revelação - Coladinho",
      src: "./assets/audio/Grupo Revelação - Coladinho.mp3",
      cover: "./assets/img/capas/revelacao.jpg"
    },
    {
      title: "Zeca Pagodinho - Mais Feliz",
      src: "./assets/audio/Zeca Pagodinho - Mais Feliz.mp3",
      cover: "./assets/img/capas/zeca.jpg"
    },
    {
      title: "Zeca Pagodinho - Em Um Outdoor",
      src: "./assets/audio/Zeca Pagodinho - Em Um Outdoor.mp3",
      cover: "./assets/img/capas/zeca2.jpg"
    },
    {
      title: "Jorge Ben Jor - Menina Mulher da Pele Preta",
      src: "./assets/audio/Jorge Ben Jor - Menina Mulher da Pele Preta.mp3",
      cover: "./assets/img/capas/jorgeben.jpg"
    },
    {
      title: "Belo - Pra Ver O Sol Brilhar",
      src: "./assets/audio/Belo - Pra Ver O Sol Brilhar.mp3",
      cover: "./assets/img/capas/belo.jpg"
    },
    {
      title: "Belo - Resumo Da Felicidade",
      src: "./assets/audio/Belo - Resumo Da Felicidade.mp3",
      cover: "./assets/img/capas/belo2.jpg"
    },
    {
      title: "Belo - Nada Vai Separar",
      src: "./assets/audio/Belo - Nada Vai Separar.mp3",
      cover: "./assets/img/capas/belo.jpg"
    },
    {
      title: "Grupo Revelação - Preciso Te Amar",
      src: "./assets/audio/Grupo Revelação - Preciso Te Amar.mp3",
      cover: "./assets/img/capas/revelacao.jpg"
    },
    {
      title: "Arlindo Cruz - Minha Porta Bandeira",
      src: "./assets/audio/Arlindo Cruz - Minha Porta Bandeira.mp3",
      cover: "./assets/img/capas/arlindo3.jpg"
    },
    {
      title: "Belo - Desafio",
      src: "./assets/audio/Belo - Desafio.mp3",
      cover: "./assets/img/capas/belo2.jpg"
    },
    {
      title: "Tiee - Moça",
      src: "./assets/audio/Tiee - Moça.mp3",
      cover: "./assets/img/capas/tiee.jpg"
    },
    {
      title: "Zeca Pagodinho - Poxa",
      src: "./assets/audio/Zeca Pagodinho - Poxa.mp3",
      cover: "./assets/img/capas/zeca3.jpg"
    },
    {
      title: "Belo - Razão da Minha Vida",
      src: "./assets/audio/Belo - Razão da Minha Vida.mp3",
      cover: "./assets/img/capas/belo.jpg"
    },
    {
      title: "Exaltasamba - Nem Pensar",
      src: "./assets/audio/Exaltasamba - Nem Pensar.mp3",
      cover: "./assets/img/capas/exalta.jpg"
    },
    {
      title: "Xande de Pilares - Ainda Bem",
      src: "./assets/audio/Xande de Pilares - Ainda Bem.mp3",
      cover: "./assets/img/capas/xande.jpg"
    },
    {
      title: "Fundo de Quintal - Vivo pra você",
      src: "./assets/audio/Fundo de Quintal - Vivo pra você.mp3",
      cover: "./assets/img/capas/fundo.jpg"
    },
    {
      title: "Alcione - Meu ébano",
      src: "./assets/audio/Alcione - Meu ébano.mp3",
      cover: "./assets/img/capas/alcione.jpg"
    },
    {
      title: "Belo - Vi Amor no Seu Olhar",
      src: "./assets/audio/Belo - Vi Amor no Seu Olhar.mp3",
      cover: "./assets/img/capas/belo3.jpg"
    },
    {
      title: "Rodriguinho - Luz na escuridão",
      src: "./assets/audio/Rodriguinho - Luz na escuridão.mp3",
      cover: "./assets/img/capas/rodriguinho.jpg"
    },
    {
      title: "Bom Gosto - Poema De Amor",
      src: "./assets/audio/Bom Gosto - Poema De Amor.mp3",
      cover: "./assets/img/capas/bomgosto.jpg"
    },
    {
      title: "Lauryn Hill - Can't Take My Eyes Off Of You",
      src: "./assets/audio/Lauryn Hill - Can't Take My Eyes Off Of You.mp3",
      cover: "./assets/img/capas/lauryn.jpg"
    },
    {
      title: "Exaltasamba - 40 Graus De Amor",
      src: "./assets/audio/Exaltasamba - 40 Graus De Amor.mp3",
      cover: "./assets/img/capas/exalta2.jpg"
    },
    {
      title: "Exaltasamba - Um Beijo Seu",
      src: "./assets/audio/Exaltasamba - Um Beijo Seu.mp3",
      cover: "./assets/img/capas/exalta3.jpg"
    },
    {
      title: "Arlindo X Sombrinha - Dona da Minha Alegria",
      src: "./assets/audio/Arlindo X Sombrinha - Dona da Minha Alegria.mp3",
      cover: "./assets/img/capas/arlindo4.jpg"
    },
    {
      title: "Miguel - Sure Thing",
      src: "./assets/audio/Miguel - Sure Thing.mp3",
      cover: "./assets/img/capas/miguel.jpg"
    }
  ];

let currentSong = 0;

nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
  playPauseBtn.textContent = "❚❚";
});

prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
  playPauseBtn.textContent = "❚❚";
});
audio.addEventListener("ended", () => {
  nextBtn.click();
});

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  }

  audio.addEventListener("loadedmetadata", () => {
    durationElem.textContent = formatTime(audio.duration);
    progressBar.max = audio.duration;
  });

  audio.addEventListener("timeupdate", () => {
    currentTimeElem.textContent = formatTime(audio.currentTime);
    progressBar.value = audio.currentTime;
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
    themeToggle.textContent = '🌴';
  }

  // Alternar tema
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '🌴' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Funções Lightbox
  function openLightbox(src, alt) {
    if(!lightbox) return; // Se não existir, não faz nada
    lightboxImg.src = src;
    lightboxImg.alt = alt || "Imagem ampliada";
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if(!lightbox) return; // Se não existir, não faz nada
    lightbox.classList.remove('active');
    lightboxImg.src = "";
    document.body.style.overflow = '';
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      openLightbox(item.src, item.alt);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  };
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  };

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

  function loadSong(index) {
    const song = songs[index];

    audio.pause();
    audio.src = song.src;
    audio.load();

    title.textContent = song.title;
    cover.src = song.cover;

    progressBar.value = 0;
    currentTimeElem.textContent = "0:00";
  }
  loadSong(currentSong);

  let playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise.then(_ => {
      playPauseBtn.textContent = "❚❚";
    })
    .catch(error => {
      console.log("Autoplay bloqueado");
    });
  }
});
