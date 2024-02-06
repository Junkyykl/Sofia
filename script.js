function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    
    // Calculate new random position
    const newX = Math.random() * (container.offsetWidth - noButton.offsetWidth);
    const newY = Math.random() * (container.offsetHeight - noButton.offsetHeight);

    // Move the button smoothly using CSS transitions
    noButton.style.transition = 'transform 0.5s ease-in-out';
    noButton.style.transform = `translate(${newX}px, ${newY}px)`;

    // Reset the button's position after the animation completes
    setTimeout(() => {
        noButton.style.transition = 'none';
        noButton.style.transform = 'translate(0, 0)';
    }, 500);
}

function showMessage(message) {
    const container = document.querySelector('.container');
    container.innerHTML = `<h1>${message}</h1>`;
}
