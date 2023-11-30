
const campoEmail = document.getElementById('email');
const spanErro = document.getElementById('span');

function setError() {
    campoEmail.style.border = '4px solid #e63636';
    spanErro.classList.remove('span-none');
}

function removeError() {
    campoEmail.style.border = '';
    spanErro.classList.add('span-none');
}

campoEmail.addEventListener('input', emailValidate);

function emailValidate() {
    const input = campoEmail.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(input);

    if (!isValid) {
        setError();
    } else {
        removeError();
    }

    return isValid; // Retorna o valor de isValid
}