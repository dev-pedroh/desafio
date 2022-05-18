Para utilizar a api (após download do projeto)

Para o back-end:

    Necessário ter o "node.js" instalado na máquina

    Necessário instalar alguns pacotes, para isto utilize o comando:

        npm init (para instalar os modulos nativos)

        npm install nodemon cors body-parser config express fs sqlite e sqlite3 (para instalar recursos adcionais ao projeto)

    Após instaladas as dependencias do projeto, utilize o comando:

        npm start (responsável por subir a api e coloca-la disponível para ser acessada pelo front)

    endereço do servidor "https://localhost:4001/"
        
        rotas:
        consulta filtrada - GET/ponto 
        consulta total - GET/pontos 
        registro - POST/pontos

Para o front-end:
    
    Instalar o pkg lite-server com o comando:
    
        npm install lite-server
    
    executar o comando para subir a page:
        
        npm run lite

Abra a pagina inicial disponível em "http://localhost:3000/" e pagina de cadastro em "http://localhost:3000/cadastro.html"

Nela é possível fazer consultas de pontos turísticos já cadastrados, bem como cadastrar novos pontos na pagina de cadastro.

Regras de negócio não adcionadas ainda (não entregues no prazo):

    - demonstrar nome, descrição e localização após seleção do ponto

Regras cumpridas:

    - listagem paginada para consulta de todos os registros (falta registros filtrados)
    - listagem de apenas nome e localização
    - aplicação de cadastro e listagem
    - pontos com nome, descrição (100 caracteres) e localização com cidade, estado e referencia
    - listagem ordenada de forma decrescente de acordo com a hora de registro no bd
    - filtros de termo de busca por nome, descrição, estado e cidade 
    - estados listados como dropdown
    - cidades listadas como dropdown (dependendo do UF)
    - utilizado api ibge para informações de localidade
    - menu de navegação que alterna entre cadastro e listagem
    - botao back da page de cadastro

    layout:
    - page feita conforme sugestão do layout

Stack:
    - linguagem utilizada JavaScript
    - framework node.js
    - bibliotecas cors(autenticacao), fs(gerenciamento de arquivos), express(estrutura basica de servidor), lite-server(servidor da pagina), nodemon(restart de servidor), body-parser(conversor de parametro body), config(estrutura), sqlite e sqlite3 (banco de dados)
    - sqlite como persistencia de dados
    - insomnia para teste de rotas
    - front js/html/css puro

link do repositório: 

https://github.com/dev-pedroh/desafio.git


