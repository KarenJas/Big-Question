document.addEventListener('DOMContentLoaded', () => {
    const correctAnswer = document.getElementById('correct-answer');
    const wrongAnswer = document.getElementById('wrong-answer');
    const heartContainer = document.getElementById('heart-container');
    const hugContainer = document.getElementById('hug-container');

    correctAnswer.addEventListener('click', () => {
        showHeartConfetti();
        hugContainer.classList.remove('hidden');
    });

    wrongAnswer.addEventListener('click', () => {
        shrinkWrongAnswer();
    });

    function showHeartConfetti() {
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${Math.random() * 2}s`;
            heartContainer.appendChild(heart);
        }
    }

    function shrinkWrongAnswer() {
        const currentWidth = wrongAnswer.offsetWidth;
        if (currentWidth > 20) {
            wrongAnswer.style.width = `${currentWidth - 20}px`;
        } else {
            wrongAnswer.style.display = 'none';
        }
    }
});

// Add these styles for heart confetti animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes drop {
    to {
        transform: translateY(100vh);
    }
}

.heart {
    position: absolute;
    top: -50px;
    width: 20px;
    height: 20px;
    background-color: red;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 72%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    animation: drop 2s linear infinite;
}
`;
document.head.appendChild(style);


