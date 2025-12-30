const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.box');
const prev = document.querySelector('.nav.prev');
const next = document.querySelector('.nav.next');

let index = 0;
const visibleItems = 1.5;
const step = 1;

function getItemWidth() {
    return items[0].offsetWidth + 10; // width + margin-right
}

function updateCarousel() {
    const offset = getItemWidth() * index;
    track.style.transform = `translateX(-${offset}px)`;
}

next.addEventListener('click', () => {
    if (index + visibleItems < items.length) {
        index += step;
        updateCarousel();
    }
});

prev.addEventListener('click', () => {
    if (index > 0) {
        index -= step;
        updateCarousel();
    }
});

window.addEventListener('resize', updateCarousel);

// Touch support
let startX = 0;
let endX = 0;

track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
}, { passive: true });

track.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
}, { passive: true });

track.addEventListener('touchend', () => {
    const deltaX = endX - startX;
    const threshold = 50;

    if (deltaX > threshold && index > 0) {
        index -= step;
        updateCarousel();
    } else if (deltaX < -threshold && index + visibleItems < items.length) {
        index += step;
        updateCarousel();
    }

    // Reset values
    startX = 0;
    endX = 0;
});