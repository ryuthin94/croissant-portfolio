
// Fade-in on scroll
const sections = document.querySelectorAll("section");

function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

const croissantContainer = document.querySelector('.croissant-container');

// Determine number of croissants based on screen width
const isMobile = window.innerWidth < 768;
const numCroissants = isMobile ? 5 : 10; // fewer on small screens

// Create floating croissants
for (let i = 0; i < numCroissants; i++) {
    const c = document.createElement('span');
    c.classList.add('croissant');
    c.innerText = '🥐';

    // Random size (smaller for mobile)
    const size = isMobile ? 15 + Math.random() * 15 : 20 + Math.random() * 30;
    c.style.fontSize = size + 'px';

    // Random starting position
    c.style.left = Math.random() * 100 + '%';
    c.style.top = Math.random() * 100 + '%';

    // Random animation speed
    c.style.setProperty('--speed', (5 + Math.random() * 10) + 's');

    croissantContainer.appendChild(c);
}

// Typing effect for tagline
const taglineText = "Developing with a taste for Croissants and Creativity.";
const taglineElement = document.getElementById("tagline");
const cursor = document.getElementById("cursor");
let index = 0;

function typeTagline() {
    if (index < taglineText.length) {
        cursor.insertAdjacentText("beforebegin", taglineText.charAt(index));
        index++;
        setTimeout(typeTagline, 100);
    }
}

// Blink the cursor
setInterval(() => {
    cursor.style.visibility = cursor.style.visibility === "hidden" ? "visible" : "hidden";
}, 500);

window.addEventListener("load", typeTagline);

// Star/particle background
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 100; // adjust density

for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.3 + 0.05
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        // move star downward slightly
        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(animateStars);
}

animateStars();

// Update canvas size on resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Scroll-trigger fade-up for project cards
const projectCards = document.querySelectorAll('.project-card');

function showCardsOnScroll() {
    const triggerBottom = window.innerHeight * 0.85; // 85% down viewport

    projectCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showCardsOnScroll);
window.addEventListener('load', showCardsOnScroll); // also show if already in view

// Hide loader when page fully loaded
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
    document.body.classList.add('loaded');
});

const mouseCroissant = document.getElementById('mouse-croissant');

window.addEventListener('mousemove', (e) => {
    mouseCroissant.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
});

document.querySelectorAll('a[href^="#donate"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#donate').scrollIntoView({ behavior: 'smooth' });
  });
});
