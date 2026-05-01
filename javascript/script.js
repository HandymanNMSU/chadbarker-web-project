// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('userForm');
    const display = document.getElementById('greetingDisplay');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('userName').value;

        display.innerHTML = `<p>Glad you came to visit, ${name}! 👋</p>`;

        form.reset();
    });
});