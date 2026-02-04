document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');
    const bgMusic = document.getElementById('bgMusic');

    if (username === 'bubu' && password === 'dudu') {
        // Start music on successful login
        bgMusic.play().catch(error => {
            console.log('Auto-play prevented. Music will start when user interacts.');
        });

        // Redirect to story page
        window.location.href = 'story.html';
    } else {
        errorMsg.textContent = '❌ Try again baby...';

        // Shake animation
        const container = document.querySelector('.login-container');
        container.style.animation = 'shake 0.5s';
        setTimeout(() => {
            container.style.animation = '';
        }, 500);
    }
});

// Shake animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);
