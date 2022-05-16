Para utilizar a api (após download do projeto)


    Necessário ter o "node.js" instalado na máquina

    Necessário instalar alguns pacotes, para isto utilize o comando:

    npm init (para instalar os modulos nativos)

    npm install nodemon cors body-parser config express fs sqlite e sqlite3 (para instalar recursos adcionais ao projeto)

    Após instaladas as dependencias do projeto, utilize o comando:

    npm start (responsável por subir a api e coloca-la disponível para ser acessada pelo front)


Abra a pagina inicial disponível em "../front/home.html"

Nela é possível fazer consultas de pontos turísticos já cadastrados, bem como cadastrar novos pontos na pagina de cadastro disponível em "../front/cadastro.html"


Regras de negócio não adcionadas ainda (não entregues a prazo):

    - listagem paginada
    - listagem de apenas nome e localização
    - demonstrar nome, descrição e localização após seleção do ponto
    - filtros de descrição, estado e cidade
    - botao back da page de cadastro

Regras cumpridas:

    front:
    - aplicação de cadastro e listagem
    - pontos com nome, descrição (100 caracteres) e localização com cidade, estado e referencia
    - listagem ordenada de forma decrescente de acordo com a hora de registro no bd
    - filtros de termo de busca por nome do ponto
    
    back:
    - estados listados como dropdown
    - cidades listadas como dropdown (dependendo do UF)
    - utilizado api ibge para informações de localidade
    - menu de navegação que alterna entre cadastro e listagem

    layout:
    - page feita conforme sugestão do layout

Stack:
    - linguagem utilizada JavaScript
    - framework node.js
    - bibliotecas cors(autenticacao), fs(gerenciamento de arquivos), express(estrutura basica de servidor), nodemon(restart de servidor), body-parser(conversor de parametro body), config(estrutura), sqlite e sqlite3 (banco de dados)
    - sqlite como persistencia de dados
    - insomnia para teste de rotas
    - front js/html/css puro

link do repositório: 

https://github.com/dev-pedroh/desafio.git


