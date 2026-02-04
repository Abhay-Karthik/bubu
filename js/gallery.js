// Countdown Timer to Valentine's Day 2026
function updateCountdown() {
    const valentinesDay = new Date('February 14, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = valentinesDay - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update display
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // If countdown is over
    if (distance < 0) {
        document.querySelector('.countdown-container h2').textContent = "It's Valentine's Day! 💕";
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Load photos from dudu folder
function loadPhotos() {
    const photosGrid = document.getElementById('photosGrid');

    // All photos from dudu folder
    const photoFiles = [
        '20220830_182613_IMG_3810.JPG',
        '20220928_151105_IMG_4205(1).JPG',
        '20220928_151105_IMG_4205.JPG',
        '20230405_143408_IMG_7178.JPG',
        '20230519_153305_IMG_7647(1).JPG',
        '20230519_153305_IMG_7647(2).JPG',
        '20230519_153305_IMG_7647.JPG',
        '20230519_153319_IMG_7648(1).JPG',
        '20230519_153319_IMG_7648(2).JPG',
        '20230519_153319_IMG_7648.JPG',
        '20230527_163159_IMG_7786.JPG',
        '20230527_163225_IMG_7788.JPG',
        '20230607_183544_IMG_7961.JPG',
        '20230613_104624_IMG_8041.JPG',
        '20230626_144107_IMG_8146.JPG',
        '20230708_214700_3da94e1e-4fe7-45a8-9520-e59ee2f53e79.JPG',
        '20230708_214701_48577ee1-61b2-4488-abf5-2159352ca22c.JPG',
        '20230807_163547_IMG_8780.JPG',
        '20231031_162241_IMG_0216.JPG',
        '20231031_231951_IMG_0223.JPG',
        '20231110_123402_IMG_0294.JPG',
        '20231123_163014_IMG_0451.JPG',
        '20231215_182114_IMG_0736.JPG',
        '20231223_071456_IMG_0811.JPG',
        '20231224_122541_IMG_4398.JPG',
        '20231225_234526_fa37386b-6904-4685-a082-562e27a066cd(1).JPG',
        '20231225_234526_fa37386b-6904-4685-a082-562e27a066cd.JPG',
        '20231225_234637_36cf1ea8-10e2-4942-bcc5-bb091eff7699.JPG',
        '20231225_234654_cd33c898-d241-42c0-81b4-ee86d93a6428.JPG'
    ];

    photoFiles.forEach((filename, index) => {
        const photoItem = document.createElement('div');
        photoItem.classList.add('photo-item');

        const img = document.createElement('img');
        img.src = `Dudu/${filename}`;
        img.alt = `Memory ${index + 1}`;

        // Handle image load error (if photo doesn't exist)
        img.onerror = function() {
            this.style.display = 'none';
            photoItem.style.display = 'none';
        };

        photoItem.appendChild(img);
        photosGrid.appendChild(photoItem);
    });
}

// Load photos when page loads
loadPhotos();

// Play music
const bgMusic = document.getElementById('bgMusic');
bgMusic.play().catch(error => {
    console.log('Auto-play prevented. Click anywhere to start music.');

    // Play music on first user interaction
    document.body.addEventListener('click', function() {
        bgMusic.play();
    }, { once: true });
});
