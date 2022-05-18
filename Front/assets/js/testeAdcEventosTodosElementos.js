const getHtml = {
    getAll(elements){
        return document.getElementsByClassName(elements);
    },
    getAllClass(element, element2, element3){
        return document.getElementsByClassName(element, element2, element3)
    }
}

function testeParaAdcEventosEmTodosOsElementos(){
    function atribuirEvento(className, className2){
        const botao = document.getElementsByClassName(className);
        function rem(){
            const info = document.getElementsByClassName(className2);
            info.classList.remove("invisible");
        }
        botao.addEventListener('click', function() { rem(); });
    }
    const classButtons = getHtml.getAll('buttonDetails');
    const classInfos = getHtml.getAllClass('info-referencia', 'info-sobre', 'info-data')
    for (let i = 0; i < classButtons.length; i++){
        for (let x = 0; x < classInfos.length; x++){
        
            atribuirEvento(classButtons[i], classInfos[x])
        }
            
    }
}

testeParaAdcEventosEmTodosOsElementos();