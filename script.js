function checkAnswer(answer) {
    if (answer === 'correct') {
        showConfetti();
        showFigures();
    } else {
        shrinkBox();
    }
}

function showConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.style.display = 'block';

    // Simple confetti effect (You can use a library for a more advanced effect)
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confettiContainer.appendChild(confetti);
    }
}

function showFigures() {
    const figuresContainer = document.getElementById('figures');
    figuresContainer.innerHTML = '<img src="https://i.imgur.com/2GVwOeb.png" alt="Figures Hugging">';
    figuresContainer.style.display = 'block';
}

function shrinkBox() {
    const incorrectBox = document.getElementById('answer1');
    incorrectBox.style.transform = 'scale(0.8)';
    incorrectBox.style.backgroundColor = '#ff0000';
    incorrectBox.style.color = '#ffffff';
}

// CSS for confetti
const style = document.createElement('style');
style.innerHTML = `
.confetti {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #FFC107;
    animation: fall 4s infinite;
}

@keyframes fall {
    0% {
        transform: translateY(0) rotate(0);
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
    }
}
`;
document.head.appendChild(style);

