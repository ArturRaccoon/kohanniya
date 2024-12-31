const inputField = document.getElementById('secret-input');
const checkBtn = document.getElementById('check-btn');
const message = document.getElementById('message');

checkBtn.addEventListener('click', () => {
    const userInput = inputField.value.trim().toLowerCase();

    if (userInput === "одного дня ми зустрілися") {
        window.location.href = 'newYear.html';
    } else {
        message.textContent = "ХММ ЦІКАВО...";
        message.classList.remove('hidden');
    }
});
