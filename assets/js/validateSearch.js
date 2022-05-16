const inputNomePonto = document.querySelector('#inputNomePonto');
const inputCidade = document.querySelector('#inputCidade')
const buscarPonto = document.querySelector('#buscarPonto');
const buscarCidade = document.querySelector('#buscarCidade');
const alertContainer = document.querySelector('#alert');

function submitGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
}

function searchAllData(){
    let url = "https://localhost:3001/pontos";
    submitGet(url);
}

function submitFilterGet(url, query){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(query);
    return request.responseText;

}

function searchDataPonto(){
    const valorInput = encodeURIComponent(inputNomePonto.value);
    submitFilterGet(`https://localhost:3001/ponto?nomePonto=${valorInput}`);
    console.log(valorInput, typeof(valorInput))
}

/*
function searchDataCidade(){
    submitFilterCidade(`https://localhost:3001/ponto?cidade=${inputCidade}`);
}
*/

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
    }, 5000)
}

function clearInput(){
    inputNomePonto.value = '';
    inputCidade.value = '';
}

function validateInput(event){
    event.preventDefault();
    let message = '';
    const messageDefault = 'Busca concluída!';

    function inputInvalidPonto(){
        if(inputNomePonto.value.length === 0 && !inputCidade.value.length){
            message = 'Erro, campo Ponto Turistico vazio!';
            return true;
        }
    }

    function inputInvalidCidade(){
        if(inputCidade.value.length === 0 && !inputNomePonto.value.length){
            message = 'Erro, campo Cidade vazio!';
            return true;
        }
    }

    if(inputInvalidPonto()){
        return createAlert(false, message);

    } else {
        searchDataPonto();
        createAlert(true, messageDefault);
        clearInput();
    }

    if(inputInvalidCidade()){
        return createAlert(false, message);

    } else {
        searchDataCidade();
        createAlert(true, messageDefault);
        clearInput();
    }

}

buscarPonto.onclick = validateInput;
buscarCidade.onclick = validateInput;