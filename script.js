function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    
    const newX = Math.random() * (container.offsetWidth - noButton.offsetWidth);
    const newY = Math.random() * (container.offsetHeight - noButton.offsetHeight);

    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';

    noButton.classList.add('moving');

    setTimeout(() => {
        noButton.classList.remove('moving');
    }, 500);
}

function showMessage(message) {
    const container = document.querySelector('.container');
    container.innerHTML = `<h1>${message}</h1>`;
}
