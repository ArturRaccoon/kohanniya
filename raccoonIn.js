const inputField = document.getElementById('secret-input');
const checkBtn = document.getElementById('check-btn');
const message = document.getElementById('message');


checkBtn.addEventListener('click', () => {
    const userInput = inputField.value.trim().toLowerCase();

    if (userInput === "одного дня ми зустрінемось") {
        // Redirect if correct
        window.location.href = 'https://www.youtube.com/watch?v=Q3vAgdewNwM';
    } else {
        // Show error message if incorrect
        message.textContent = "ХММ ЦІКАВО...";
        message.classList.remove('hidden');
    }
});