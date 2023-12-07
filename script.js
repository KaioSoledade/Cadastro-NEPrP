
const campoEmail = document.getElementById('email');
const spanErro = document.getElementById('span');

function setError() {
    campoEmail.style.border = '2px solid #e63636';
    spanErro.classList.remove('span-none');
}

function removeError() {
    campoEmail.style.border = '';
    spanErro.classList.add('span-none');
}

campoEmail.addEventListener('input', emailValidate);
campoEmail.addEventListener('input', vazio1);

function vazio1(){
    if(campoEmail == ''){
        removeError();
    }
}


function emailValidate() {
    const input = campoEmail.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(input);

    if (!isValid) {
        setError();
    } else {
        removeError();
    }
    if(campoEmail == ''){
        removeError();
    }

    return isValid; // Retorna o valor de isValid
}


const campoNome = document.getElementById('name');
const spanErro1 = document.getElementById('span-name');

function setError1() {
    campoNome.style.border = '2px solid #e63636';
    spanErro1.classList.remove('span-none');
}

function removeError1() {
    campoNome.style.border = '';
    spanErro1.classList.add('span-none');
}

campoNome.addEventListener('input', nameValidate);
campoNome.addEventListener('input', vazio2);

function vazio2(){

}

function nameValidate() {
    const input = campoNome.value.trim(); // Remover espaços extras no início e no final do texto
    const isValidLength = input.length >= 2; // Verificar se o comprimento é maior ou igual a 2

    if (!isValidLength) {
        setError1();
    } else {
        removeError1();
    }
    if(campoNome == ""){
        removeError1();
    }

    return isValidLength; // Retorna true apenas se o comprimento for maior ou igual a 2
}




const senha1 = document.getElementById('pass1');
const senha2 = document.getElementById('pass2');

const spanErro2 = document.getElementById('span-pass1');
const spanErro3 = document.getElementById('span-pass2');


function setError2() {
    senha1.style.border = '2px solid #e63636';
    senha2.style.border = '2px solid #e63636';
    spanErro3.classList.remove('span-none');
}

function removeError2() {
    senha1.style.border = '';
    senha2.style.border = '';
    spanErro3.classList.add('span-none');
}

senha2.addEventListener('input', senhaValidat);

function senhaValidat() {
    const senhaIgual = senha1.value == senha2.value; // Verificar se o comprimento é maior ou igual a 2

    if (!senhaIgual) {
        setError2();
    } else {
        removeError2();
    }

    return isValidLength; // Retorna true apenas se o comprimento for maior ou igual a 2
}