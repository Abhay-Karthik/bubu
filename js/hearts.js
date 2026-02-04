// Floating hearts animation
function createHeart() {
    const heartsContainer = document.getElementById('hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';

    // Random position
    heart.style.left = Math.random() * 100 + '%';

    // Random animation duration
    const duration = Math.random() * 3 + 4; // 4-7 seconds
    heart.style.animationDuration = duration + 's';

    // Random delay
    const delay = Math.random() * 2;
    heart.style.animationDelay = delay + 's';

    heartsContainer.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, (duration + delay) * 1000);
}

// Create hearts continuously
setInterval(createHeart, 500);

// Create initial hearts
for (let i = 0; i < 10; i++) {
    setTimeout(createHeart, i * 200);
}
