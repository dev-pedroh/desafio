const pontoTuristico = submitGet();

const perPage = 3;
const state = {
    page: 1,
    perPage: perPage,
    totalPage: Math.ceil(pontoTuristico.length / perPage)
};

const getHtml = {
    get(element){
        return document.querySelector(element);
    }  
}

const controls = {
    next() {
        state.page++
        if (state.page > state.totalPage) {
            state.page--;
        }
    },
    prev() { 
        state.page--;
        if (state.page < 1) {
            state.page++;
        }
    },
    createListeners() {
        getHtml.get('.prev').addEventListener('click', ()=> {
            controls.prev();
            update();
        })
        getHtml.get('.next').addEventListener('click', ()=> {
            controls.next();
            update();
        })

    }
}

const list = {

    buidDivFilho(dado, classe, classe2) {
        const divFilho = document.createElement("div");
        divFilho.classList.add(classe);
        divFilho.classList.add(classe2);
        divFilho.textContent = dado;
    
        return divFilho;
    },

    buildButtonDetails(classe){
    
        const buttonDetails = document.createElement("button");
        
        buttonDetails.classList.add(classe);
        buttonDetails.textContent = "Detalhes";

        return buttonDetails;
    },

    buildDivPai(pontoTuristico) {
        const divPai = document.createElement("div");
        
        divPai.classList.add("list");
    
        divPai.appendChild(list.buidDivFilho(pontoTuristico.nomePonto, "info-nome"));
        divPai.appendChild(list.buidDivFilho(`Endereço: ${pontoTuristico.cidade} - ${pontoTuristico.estado} `, "info-cidade"));
        divPai.appendChild(list.buidDivFilho(`Referência: ${pontoTuristico.referencia}`, "info-referencia", "invisible"));
        divPai.appendChild(list.buidDivFilho(`Descrição do local: ${pontoTuristico.sobre}`, "info-sobre", "invisible"));
        divPai.appendChild(list.buidDivFilho(`Data Registro: ${pontoTuristico.data}`, "info-data", "invisible"));
        divPai.appendChild(list.buildButtonDetails("buttonDetails"));
        
        return divPai;
    },
    
    insertDivOnHTML(pontoTuristico) {
        const divPai = list.buildDivPai(pontoTuristico);
        const lista = document.querySelector(".listResults");
        lista.appendChild(divPai);
    },

    update() {
        getHtml.get('.listResults').innerHTML = "";

        let page = state.page - 1;
        let start = page * state.perPage;
        let end = start + state.perPage;

        const pontoTuristicoReverso = pontoTuristico.slice(start, end);

        pontoTuristicoReverso.forEach(function(ponto){
            list.insertDivOnHTML(ponto);
            hideSectionResults();
        });
    }
}

function update() {
    list.update();
}

function init(){
    list.update();
    controls.createListeners();
}

document.getElementById('buscarTodos').addEventListener('click', () =>{init()}); 
