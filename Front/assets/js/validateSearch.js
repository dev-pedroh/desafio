const inputNomePonto = document.querySelector('#inputNomePonto');
const inputCidade = document.querySelector('#inputCidade')
const buscarPonto = document.querySelector('#buscarPonto');
const buscarCidade = document.querySelector('#buscarCidade');
const alertContainer = document.querySelector('#alert');

function buildTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function buildTr(pontoTuristico) {
    var pontoTuristicoTr = document.createElement("tr");
    pontoTuristicoTr.classList.add("pontoTuristico");
    pontoTuristicoTr.appendChild(buildTd(pontoTuristico.nomePonto, "info-nome"));
    pontoTuristicoTr.appendChild(buildTd(pontoTuristico.cidade, "info-cidade"));
    pontoTuristicoTr.appendChild(buildTd(pontoTuristico.estado, "info-estado"));
    pontoTuristicoTr.appendChild(buildTd(pontoTuristico.referencia, "info-referencia"));
    pontoTuristicoTr.appendChild(buildTd(pontoTuristico.sobre, "info-sobre"));
    pontoTuristicoTr.appendChild(buildTd(pontoTuristico.data, "info-data"));
    
    return pontoTuristicoTr;
}

function setInvisible(){
    const referencia = document.querySelector('.info-referencia');
    const sobre = document.querySelector('.info-sobre')
    const data = document.querySelector('.info-data')
    
    referencia.classList.add('invisivel');
    sobre.classList.add('invisivel');
    data.classList.add('invisivel');
}

function addPontoTuristicoInTable(pontoTuristico) {
    var pontoTuristicoTr = buildTr(pontoTuristico);
    var tabela = document.querySelector("#tabelaPontosTuristicos");
    tabela.appendChild(pontoTuristicoTr);
}

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

    const resposta = request.responseText;
    const pontoTuristico = JSON.parse(resposta);
    
    const pontoTuristicoReverso = pontoTuristico.reverse();

    pontoTuristicoReverso.forEach(function(ponto){
        addPontoTuristicoInTable(ponto)
    });
    
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

function hideTableResult(){
    const containerTableResult = document.querySelector('.table-resultado');
    containerTableResult.classList.remove("invisivel");
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
        hideTableResult();
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
        hideTableResult()
    }

}

buscarPonto.onclick = validateInputPonto;
buscarCidade.onclick = validateInputCidade;