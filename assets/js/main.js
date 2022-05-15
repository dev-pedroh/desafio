const inputBuscar = document.querySelector('#inputBuscar');
const submitInput = document.querySelector('#buttonBuscar');
const alertContainer = document.querySelector('#alert');

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
    inputBuscar.value = '';
}

function validateInput(event){
    event.preventDefault();
    let message = '';
    const messageDefault = 'Busca concluída!';

    function inputInvalid(){
        if(inputBuscar.value.length === 0){
            message = 'Erro, campo vazio!';
            return true;
        }
    }

    if(inputInvalid()){
        return createAlert(false, message);
    } else {
        createAlert(true, messageDefault);
        clearInput();
    }

}

submitInput.onclick = validateInput;