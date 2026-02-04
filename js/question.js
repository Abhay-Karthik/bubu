const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Make the No button run away from the cursor/touch
noBtn.addEventListener('mouseover', function() {
    moveNoButton();
});

noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    moveNoButton();
});

noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    moveNoButton();
});

// Track mouse/touch movement to detect proximity
document.addEventListener('mousemove', function(e) {
    checkProximity(e.clientX, e.clientY);
});

document.addEventListener('touchmove', function(e) {
    if (e.touches.length > 0) {
        checkProximity(e.touches[0].clientX, e.touches[0].clientY);
    }
});

function checkProximity(x, y) {
    const btnRect = noBtn.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    // Calculate distance from cursor/touch to button center
    const distance = Math.sqrt(
        Math.pow(x - btnCenterX, 2) + Math.pow(y - btnCenterY, 2)
    );

    // If cursor/touch is within 150px of button, move it away
    if (distance < 150) {
        moveNoButton();
    }
}

function moveNoButton() {
    const btnRect = noBtn.getBoundingClientRect();

    // Use full viewport dimensions for movement
    const maxX = window.innerWidth - btnRect.width - 20;
    const maxY = window.innerHeight - btnRect.height - 20;

    // Generate random position anywhere on screen
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    // Make sure it's at least 100px away from current position
    const currentX = noBtn.offsetLeft || 0;
    const currentY = noBtn.offsetTop || 0;

    if (Math.abs(randomX - currentX) < 100 && Math.abs(randomY - currentY) < 100) {
        randomX = Math.random() * maxX;
        randomY = Math.random() * maxY;
    }

    // Apply new position (fixed to viewport)
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transform = 'translate(0, 0)';
}

// Yes button click handler
yesBtn.addEventListener('click', function() {
    // Create celebration effect
    createConfetti();

    // Play music if not already playing
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.play().catch(error => {
        console.log('Auto-play prevented.');
    });

    // Wait a bit for celebration, then redirect
    setTimeout(() => {
        window.location.href = 'gallery.html';
    }, 2000);
});

// Confetti effect when Yes is clicked
function createConfetti() {
    const colors = ['#f093fb', '#f5576c', '#e91e63', '#ff69b4', '#ff1493'];

    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';
            confetti.style.animation = 'confettiFall 3s linear forwards';

            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }, i * 20);
    }
}

// Add confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
