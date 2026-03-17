const groupButtons = document.querySelectorAll('button');

groupButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Open chat page for each group
        window.location.href = 'chat.html';
    });
});