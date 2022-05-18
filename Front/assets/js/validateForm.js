const nomePonto = document.querySelector('.nomePonto');
const estado = document.querySelector('#uf');
const cidade = document.querySelector('#cidade');
const referencia = document.querySelector('.referencia');
const sobre = document.querySelector('.sobre');
const alertContainer = document.querySelector('#alert');

const buttonBack = document.querySelector('#buttonVoltar');
const submitRegister = document.querySelector('#buttonCadastrar');

//não esquecer de criar o recurso do botao voltar

function submitPost(url, body){
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));

}

function registerDate(){
    let url = "https://localhost:4001/pontos/novo";

    body = {
        "nomePonto": nomePonto.value,
        "estado": estado.value,
        "cidade": cidade.value,
        "referencia": referencia.value,
        "sobre": sobre.value
    }

    submitPost(url, body);
}

function createAlert(reference, message){
    const iconError = 'fa-circle-exclamation'
    const iconSuccess = 'fa-check'
    let icon = ''
    const error = 'error'
    const success = 'success'
    let status = ''

    if(reference){
        icon = iconSuccess
        status = success
    } else{
        icon = iconError
        status = error
    }

    const alert = `
        <div class="${status}">
            <i class="fa-solid ${icon}"></i>
            ${message}
        </div>`
    alertContainer.innerHTML = alert

    setTimeout(function(){
        alertContainer.innerHTML = ''
    }, 3000)
}

function clearInput(){
    nomePonto.value = '';
    estado.value = '';
    cidade.value = '';
    referencia.value = '';
    sobre.value = '';
}

function validateInput(event){
    event.preventDefault();
    let message = '';
    const messageDefault = 'Cadastrado!';

    function nomePontoInvalid(){
        if(nomePonto.value.length === 0){
            message = 'Campo nome vazio!';
            return true;
        }
    }
    function estadoInvalid(){
        if(estado.value.length === 0 || estado.value == 'UF'){
            message = 'Estado não selecionado!'
            return true;
        }
    }
    function cidadeInvalid(){
        if(cidade.value.length == false){
            message = 'Campo cidade vazio!'
            return true;
        }
    }
    function referenciaInvalid(){
        if(referencia.value.length === 0){
            message = 'Campo referencia vazio!'
            return true;
        }
    }
    function sobreInvalid(){
        if(sobre.value.length === 0){
            message = 'Campo sobre vazio!'
            return true;
        }
    }

    if(nomePontoInvalid() || estadoInvalid() || cidadeInvalid() || referenciaInvalid() || sobreInvalid()){
        return createAlert(false, message);
    } else {

        registerDate()
        createAlert(true, messageDefault);
        clearInput();
    }

}

submitRegister.onclick = validateInput;

