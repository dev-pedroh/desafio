const inputFilter = document.querySelector("#filtro-nome");

inputFilter.addEventListener("input", function() {
    const pontosTuristicos = document.querySelectorAll(".pontoTuristico");

    if (this.value.length > 0) {
        for (let i = 0; i < pontosTuristicos.length; i++) {
            const ponto = pontosTuristicos[i];
            const tdNome = ponto.querySelector(".info-nome");
            const nomePonto = tdNome.textContent;
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
});

