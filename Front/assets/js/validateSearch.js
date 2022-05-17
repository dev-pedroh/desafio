const inputNomePonto = document.querySelector('#inputNomePonto');
const inputCidade = document.querySelector('#inputCidade')
const buscarPonto = document.querySelector('#buscarPonto');
const buscarCidade = document.querySelector('#buscarCidade');
const alertContainer = document.querySelector('#alert');
const alertContainer2 = document.querySelector('#alert2');
const buscarTodos = document.querySelector('#buscarTodos');

const state = {
    page: 1,
    perPage: 3,
}

const controls = {
    next() {
      state.page++
    },
    prev() {
       
    },
}

function buidDivFilho(dado, classe) {
    const divFilho = document.createElement("div");
    divFilho.classList.add(classe);
    divFilho.textContent = dado;

    return divFilho;
}

function buildButtonDetails(classe){
    
    const buttonDetails = document.createElement("button");
    
    buttonDetails.classList.add(classe);
    buttonDetails.textContent = "Detalhes";

    return buttonDetails;
}

function buildDivPai(pontoTuristico) {
    const divPai = document.createElement("div");
    
    divPai.classList.add("list");

    divPai.appendChild(buidDivFilho(pontoTuristico.nomePonto, "info-nome"));
    divPai.appendChild(buidDivFilho(`Endereço: ${pontoTuristico.cidade} - ${pontoTuristico.estado} `, "info-cidade"));
    divPai.appendChild(buidDivFilho(`Referência: ${pontoTuristico.referencia}`, "info-referencia"));
    divPai.appendChild(buidDivFilho(`Descrição do local: ${pontoTuristico.sobre}`, "info-sobre"));
    divPai.appendChild(buidDivFilho(`Data Registro: ${pontoTuristico.data}`, "info-data"));
    divPai.appendChild(buildButtonDetails("buttonDetails"));
    
    return divPai;
}

function insertDivOnHTML(pontoTuristico) {
    const divPai = buildDivPai(pontoTuristico);
    const lista = document.querySelector(".listResults");
    lista.appendChild(divPai);
}

function submitGet(){

    let url = "https://localhost:3001/pontos";

    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();

    const resposta = request.responseText;
    
    const todosPontosTuristicos = JSON.parse(resposta);
    
    const todosPontosTuristicosReverso = todosPontosTuristicos.reverse();

    todosPontosTuristicosReverso.forEach(function(ponto){
        insertDivOnHTML(ponto);
        hideSectionResults();
    });

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

        pontoTuristicoReverso.forEach(function(ponto){
            insertResults(ponto);
        });
        hideSectionResults();

    } else {
        createAlert2();
    }

    return resposta;
}

function searchDataPonto(){
    let valorInput = encodeURIComponent(inputNomePonto.value);
    submitFilterGet(`https://localhost:3001/ponto?nomePonto=${valorInput}`);
}

function searchDataCidade(){
    let valorInput = encodeURIComponent(inputCidade.value);
    submitFilterGet(`https://localhost:3001/ponto?cidade=${valorInput}`);

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
    }, 5000)
}

function clearInput(){
    inputNomePonto.value = '';
    inputCidade.value = '';
}

function hideSectionResults(){
    const containerSectionResults = document.querySelector(".sectionResults");
    containerSectionResults.classList.remove("invisivel");
}

function validateInputPonto(event){
    event.preventDefault();
    let message = '';
    const messageDefault = 'Busca concluída!';

    function inputInvalidPonto(){
        if(inputNomePonto.value.length === 0){
            message = 'Erro, campo Ponto Turistico vazio!';
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

}

function validateInputCidade(event){
    event.preventDefault();
    let message = '';
    const messageDefault = 'Busca concluída!';

    function inputInvalidCidade(){
        if(inputCidade.value.length === 0){
            message = 'Erro, campo Cidade vazio!';
            return true;
        }
    }

    if(inputInvalidCidade()){
        return createAlert(false, message);

    } else {
        searchDataCidade();
        createAlert(true, messageDefault);
        clearInput();
    }

}

function searchAllData(event) {
    event.preventDefault();
    submitGet();
}

buscarPonto.onclick = validateInputPonto;
buscarCidade.onclick = validateInputCidade;
buscarTodos.onclick = searchAllData;