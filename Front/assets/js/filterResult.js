const FilterName = document.querySelector("#filtro-nome");

FilterName.addEventListener("input", function() {
    const pontosTuristicos = document.querySelectorAll(".list");

    if (this.value.length > 0) {
        for (let i = 0; i < pontosTuristicos.length; i++) {
            const ponto = pontosTuristicos[i];
            const divNome = ponto.querySelector(".info-nome");
            const nomePonto = divNome.textContent;
            const expressao = new RegExp(this.value, "i");

            if (!expressao.test(nomePonto)) {
                ponto.classList.add("invisivel");
            } else {
                ponto.classList.remove("invisivel");
            }
        }
    } else {
        for (let i = 0; i < pontosTuristicos.length; i++) {
            const ponto = pontosTuristicos[i];
            ponto.classList.remove("invisivel");
        }
    }
})

const FilterCity = document.querySelector("#cidade");

FilterCity.addEventListener("input", function() {
    const pontosTuristicos = document.querySelectorAll(".list");

    if (this.value.length > 0) {
        for (let i = 0; i < pontosTuristicos.length; i++) {
            const ponto = pontosTuristicos[i];
            const divCidade = ponto.querySelector(".info-cidade");
            const cidade = divCidade.textContent;
            const expressao = new RegExp(this.value, "i");

            if (!expressao.test(cidade)) {
                ponto.classList.add("invisivel");
            } else {
                ponto.classList.remove("invisivel");
            }
        }
    } else {
        for (let i = 0; i < pontosTuristicos.length; i++) {
            const ponto = pontosTuristicos[i];
            ponto.classList.remove("invisivel");
        }
    }
})

const FilterReference = document.querySelector("#filtro-referencia");

FilterReference.addEventListener("input", function() {
    const pontosTuristicos = document.querySelectorAll(".list");

    if (this.value.length > 0) {
        for (let i = 0; i < pontosTuristicos.length; i++) {
            const ponto = pontosTuristicos[i];
            const divReferencia = ponto.querySelector(".info-referencia");
            const referencia = divReferencia.textContent;
            const expressao = new RegExp(this.value, "i");

            if (!expressao.test(referencia)) {
                ponto.classList.add("invisivel");
            } else {
                ponto.classList.remove("invisivel");
            }
        }
    } else {
        for (let i = 0; i < pontosTuristicos.length; i++) {
            const ponto = pontosTuristicos[i];
            ponto.classList.remove("invisivel");
        }
    }
})

const FilterDescription = document.querySelector("#filtro-sobre");

FilterDescription.addEventListener("input", function() {
    const pontosTuristicos = document.querySelectorAll(".list");

    if (this.value.length > 0) {
        for (let i = 0; i < pontosTuristicos.length; i++) {
            const ponto = pontosTuristicos[i];
            const divSobre = ponto.querySelector(".info-sobre");
            const sobre = divSobre.textContent;
            const expressao = new RegExp(this.value, "i");

            if (!expressao.test(sobre)) {
                ponto.classList.add("invisivel");
            } else {
                ponto.classList.remove("invisivel");
            }
        }
    } else {
        for (let i = 0; i < pontosTuristicos.length; i++) {
            const ponto = pontosTuristicos[i];
            ponto.classList.remove("invisivel");
        }
    }
})