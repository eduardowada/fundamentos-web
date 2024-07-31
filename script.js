let nome = document.getElementById('nome');
let email = document.getElementById('email');
let motivo = document.getElementById('motivo');
let mensagem = document.getElementById('mensagem');
let nomeOk = false;
let emailOk = false;
let motivoOk = false;
let mensagemOk = false;

nome.style.width = '400px';
nome.style.height = '25px'
email.style.width = '400px';
email.style.height = '25px';
motivo.style.width = '400px';
mensagem.style.width = '400px';
motivo.style.height = '50px';
mensagem.style.height = '150px';

function validaNome() {

    let txtNome = document.querySelector('#txtNome');

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true;
    }

}

function validaEmail() {

    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
        emailOk = true;
    }

}

function validaMotivo() {

    let txtMotivo = document.querySelector('#txtMotivo')

    if (motivo.value.length >= 100) {
        txtMotivo.innerHTML = 'O campo motivo pode ter no máximo 100 caracteres'
        txtMotivo.style.color = 'red'
        txtMotivo.style.display = 'block'
    } else {
        txtMotivo.style.display = 'none'
        motivoOk = true;
    }

}

function validaMensagem() {

    let txtMensagem = document.querySelector('#txtMensagem')

    if (mensagem.value.length >= 1000) {
        txtMensagem.innerHTML = 'O campo motivo pode ter no máximo 1000 caracteres'
        txtMensagem.style.color = 'red'
        txtMensagem.style.display = 'block'
    } else {
        txtMensagem.style.display = 'none'
        mensagemOk = true;
    }

}

function enviar() {
    
    if (nomeOk == true && emailOk == true && motivoOk == true && mensagemOk == true) {
        alert('Formulário enviado com sucesso! Agradecemos seu contato.')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar!')
    }

}