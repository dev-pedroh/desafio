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

buscarPonto.onclick = validateInputPonto;
buscarCidade.onclick = validateInputCidade;