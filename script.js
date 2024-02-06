function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    
    // Calculate new random position
    const newX = Math.random() * (container.offsetWidth - noButton.offsetWidth);
    const newY = Math.random() * (container.offsetHeight - noButton.offsetHeight);

    // Move the button smoothly using CSS transitions
    noButton.style.transition = 'transform 0.5s linear';
    noButton.style.transform = `translate(${newX}px, ${newY}px)`;
}
