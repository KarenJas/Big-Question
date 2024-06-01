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

    // Create heart-shaped confetti
    for (let i = 0; i < 100; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 2 + 's';
        confettiContainer.appendChild(heart);
    }
}

function showFigures() {
    const figuresContainer = document.getElementById('figures');
    figuresContainer.style.display = 'block';
    setTimeout(() => {
        figuresContainer.classList.add('show');
    }, 100); // Slight delay to trigger the transition
}

function shrinkBox() {
    const incorrectBox = document.getElementById('answer1');
    let currentScale = getComputedStyle(incorrectBox).transform;

    // If the current scale is 'none', set it to 1 (100%)
    if (currentScale === 'none') {
        currentScale = 1;
    } else {
        // Extract the scale value from the matrix (transform property)
        currentScale = parseFloat(currentScale.split('(')[1].split(')')[0].split(',')[0]);
    }

    // Calculate the new scale
    let newScale = currentScale - 0.1;

    // If the new scale is less than or equal to 0, remove the element
    if (newScale <= 0) {
        incorrectBox.style.display = 'none';
    } else {
        // Apply the new scale
        incorrectBox.style.transform = `scale(${newScale})`;
    }
}
