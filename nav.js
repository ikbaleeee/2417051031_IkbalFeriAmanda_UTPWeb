// ── CURSOR GLOW ──
const glow = document.getElementById('glow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
});

// ── KEYBOARD NAVIGATION ──
const pages = [
  'index.html',
  'profil.html',
  'skills.html',
  'project.html',
  'contact.html'
];

// Detect current page
const file = location.pathname.split('/').pop() || 'index.html';
const cur  = pages.indexOf(file);

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    if (cur < pages.length - 1) location.href = pages[cur + 1];
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    if (cur > 0) location.href = pages[cur - 1];
  }
});

// ── SWIPE SUPPORT ──
let touchX = 0;
document.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchX;
  if (dx < -50 && cur < pages.length - 1) location.href = pages[cur + 1];
  if (dx >  50 && cur > 0)               location.href = pages[cur - 1];
});
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    if (nama === "" || email === "" || pesan === "") {
      alert("Harap isi semua field!");
    } else {
      alert("Pesan berhasil dikirim 🚀");
      form.reset();
    }
  });
}
const likes = document.querySelectorAll(".like-btn");

likes.forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.stopPropagation();

    const count = btn.querySelector(".like-count");
    let value = parseInt(count.textContent);

    if (btn.classList.contains("liked")) {
      btn.classList.remove("liked");
      count.textContent = value - 1;
    } else {
      btn.classList.add("liked");
      count.textContent = value + 1;
    }
  });
});
