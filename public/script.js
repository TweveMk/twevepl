// Simple carousel with lazy load support
const images = document.querySelectorAll('#carouselImages img');
const carouselImages = document.getElementById('carouselImages');
let currentIndex = 0;

function updateCarousel(index) {
  currentIndex = Math.max(0, Math.min(index, images.length - 1));
  const img = images[currentIndex];
  img.scrollIntoView({ behavior: 'smooth', inline: 'center' });
}

document.getElementById('prevBtn').onclick = function () {
  updateCarousel(currentIndex - 1);
};
document.getElementById('nextBtn').onclick = function () {
  updateCarousel(currentIndex + 1);
};

// Touch swipe for mobile
let touchStartX = 0;
carouselImages.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});
carouselImages.addEventListener('touchend', (e) => {
  const deltaX = e.changedTouches[0].clientX - touchStartX;
  if (deltaX > 35) updateCarousel(currentIndex - 1);
  if (deltaX < -35) updateCarousel(currentIndex + 1);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (document.activeElement.tagName === 'INPUT') return;
  if (e.key === 'ArrowLeft') updateCarousel(currentIndex - 1);
  if (e.key === 'ArrowRight') updateCarousel(currentIndex + 1);
});
