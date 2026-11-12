document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#FF5722', '#03A9F4', '#FFEB3B', '#E91E63', '#4CAF50', '#9C27B0'];
    const container = document.querySelector('.container');

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 15 + 5 + 'px';
        confetti.style.height = Math.random() * 15 + 5 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.top = '-20px';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.opacity = Math.random() * 0.8 + 0.2;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '5';

        container.appendChild(confetti);

        const fallDuration = Math.random() * 4 + 3; // 3 to 7 seconds
        const rotation = Math.random() * 360 + 180; // random rotation during fall

        confetti.animate([
            { transform: `translate3d(0, 0, 0) rotate(0deg)`, opacity: 1 },
            { transform: `translate3d(${Math.random() * 100 - 50}px, 100vh, 0) rotate(${rotation}deg)`, opacity: 0 }
        ], {
            duration: fallDuration * 1000,
            easing: 'linear',
            fill: 'forwards'
        });

        // Remove element after animation
        setTimeout(() => {
            confetti.remove();
        }, fallDuration * 1000);
    }

    // Create initial burst
    for(let i=0; i<30; i++) {
        setTimeout(createConfetti, i * 50);
    }

    // Create confetti periodically
    setInterval(createConfetti, 250);
});