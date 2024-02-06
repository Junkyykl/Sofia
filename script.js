function moveNoButton() {
    const noButton = document.getElementById('noButton');
    noButton.classList.toggle('moving');
}

function showMessage(message) {
    const container = document.querySelector('.container');
    container.innerHTML = `<h1>${message}</h1>`;
}
