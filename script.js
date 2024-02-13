function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');

    // Calculate new random position
    const newX = Math.random() * (container.offsetWidth - noButton.offsetWidth);
    const newY = Math.random() * (container.offsetHeight - noButton.offsetHeight);

    // Move the button smoothly using CSS transitions
    noButton.style.transition = 'transform 0.5s linear';
    noButton.style.transform = `translate(${newX}px, ${newY}px)`;

    // Remove transition property after the animation completes
    noButton.addEventListener('transitionend', function() {
        noButton.style.transition = 'none';
    }, { once: true });
}

function showMessage(message) {
    const container = document.querySelector('.container');
    container.innerHTML = `<h1>${message}</h1>`;

    if (message === "Φύγαμε ζουζουνάκιιιιι !!!") {
        // If the message is for going out, display a GIF
        const gifContainer = document.createElement('div');
        gifContainer.innerHTML = '<img src="bubu-dudu-kiss.gif" alt="Celebration GIF" />';
        container.appendChild(gifContainer);
    }
}

const yesButton = document.getElementById('yesButton');
yesButton.addEventListener('click', function () {
    showMessage("Φύγαμε ζουζουνάκιιιιι !!!");
});
