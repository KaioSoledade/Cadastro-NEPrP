
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


const campoNome = document.getElementById('name');
const spanErro1 = document.getElementById('span-name');

function setError() {
    campoNome.style.border = '4px solid #e63636';
    spanErro1.classList.remove('span-none');
}

function removeError() {
    campoNome.style.border = '';
    spanErro1.classList.add('span-none');
}

campoNome.addEventListener('input', nameValidate);

function nameValidate() {
    const input = campoNome.value.trim(); // Remover espaços extras no início e no final do texto
    const isValidLength = input.length >= 2; // Verificar se o comprimento é maior ou igual a 2

    if (!isValidLength) {
        setError();
    } else {
        removeError();
    }

    return isValidLength; // Retorna true apenas se o comprimento for maior ou igual a 2
}
