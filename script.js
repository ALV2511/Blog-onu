// ============================================
//  MUN BLOG — script.js
// ============================================

// ---- MENU MOBILE ----
const menuBtn    = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// ---- VÍDEO DO YOUTUBE ----
// Se o iframe tiver um ID real (não "SEU_ID_AQUI"), esconde o placeholder
const videoFrame       = document.getElementById('videoFrame');
const videoPlaceholder = document.getElementById('videoPlaceholder');

if (videoFrame && videoPlaceholder) {
  const src = videoFrame.getAttribute('src') || '';
  if (src.includes('SEU_ID_AQUI')) {
    // Ainda sem vídeo: mantém o placeholder visível
    videoFrame.style.display = 'none';
  } else {
    // Vídeo configurado: esconde o placeholder
    videoPlaceholder.style.display = 'none';
  }
}
