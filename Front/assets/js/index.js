const inputNomePonto = document.querySelector('#inputNomePonto');
const inputCidade = document.querySelector('#inputCidade')
const buscarPonto = document.querySelector('#buscarPonto');
const buscarCidade = document.querySelector('#buscarCidade');
const alertContainer = document.querySelector('#alert');
const alertContainer2 = document.querySelector('#alert2');
const buscarTodos = document.querySelector('#buscarTodos');


//requests api

function submitGet(){
    
    let url = "https://localhost:4001/pontos";

    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    
    const resposta = request.responseText;
    
    const todosPontosTuristicos = JSON.parse(resposta);
    
    return todosPontosTuristicos;
}

function submitFilterGet(url, query){

    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(query);

    const resposta = request.responseText;

    const pontoTuristico = JSON.parse(resposta);
    
    const pontoTuristicoReverso = pontoTuristico.reverse();

    function createAlert2(){
        const alert = `<div> Erro: Não encontramos o que procura! </div>`;
        alertContainer2.innerHTML = alert;

        setTimeout(function(){
            alertContainer.innerHTML = '';
        }, 8000)
    }
        
    if (pontoTuristicoReverso.value == 0) {
        createAlert2();
    } else {
        pontoTuristicoReverso.forEach(function(ponto){
            list.insertDivOnHTML(ponto);
        });
        hideSectionResults(); 
    }
}

//format url

function searchAllData(event) {
    event.preventDefault();
    submitGet();
}

function searchDataPonto(){
    let valorInput = encodeURIComponent(inputNomePonto.value);
    submitFilterGet(`https://localhost:4001/ponto?nomePonto=${valorInput}`);
}

function searchDataCidade(){
    let valorInput = encodeURIComponent(inputCidade.value);
    submitFilterGet(`https://localhost:4001/ponto?cidade=${valorInput}`);

}

//alert msg error

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

//delete imput after submit

function clearInput(){
    inputNomePonto.value = '';
    inputCidade.value = '';
}

//hide content result

function hideSectionResults(){
    const containerSectionResults = document.querySelector(".sectionResults");
    containerSectionResults.classList.remove("invisivel");
}

//events

buscarTodos.onclick = searchAllData;