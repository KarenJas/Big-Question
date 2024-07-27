document.getElementById('yes-btn').addEventListener('click', function() {
    showConfetti();
    showFigures();
});

document.getElementById('no-btn').addEventListener('click', function() {
    shrinkButton(this);
});

function showConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }
}

function showFigures() {
    document.getElementById('figures').classList.add('show');
}

function shrinkButton(button) {
    button.style.transform = 'scale(0.9)';
    setTimeout(() => {
        button.style.transform = 'scale(0.8)';
        setTimeout(() => {
            button.style.transform = 'scale(0.7)';
            setTimeout(() => {
                button.style.transform = 'scale(0.6)';
                setTimeout(() => {
                    button.style.transform = 'scale(0.5)';
                    setTimeout(() => {
                        button.style.display = 'none';
                    }, 200);
                }, 200);
            }, 200);
        }, 200);
    }, 200);
}
