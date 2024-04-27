const listaPerguntas = [
    {
        pergunta: "Como podemos definir um Algoritmo?",
        resposta: "Sequência de instruções ordenadas, finitas e não-ambíguas que são empregadas para executar uma tarefa.",
        opcoes: [
            "Sequência de comandos ordenados, infinitos e ambíguos que são empregados para executar uma tarefa.",
            "Sequência de instruções ordenadas, infinitas e não-ambíguas que são empregadas para executar uma tarefa.",
            "Sequência de instruções ordenadas, finitas e não-ambíguas que são empregadas para executar uma tarefa.",
            "Sequência de comandos ordenados, infinitos e não-ambíguos que são empregados para executar uma tarefa.",
            "Sequência de comandos desordenados, infinitos e não-ambivalentes que são empregados para executar uma tarefa."
        ]
    },
    {
        pergunta: "Qual dos seguintes itens possui apenas tipos válidos usados em lógica de programação (tipos primitivos)?",
        resposta: "Inteiro, Booleano, Caractere, Double",
        opcoes: [
            "Inteiro, Temporal, Caractere, Double",
            "Booleano, Real, Inteiro, Irracional",
            "Inteiro, Booleano, Tipografia, Double",
            "Inteiro, Booleano, Caractere, Double",
            "Temporal, Triple, Caractere, Double"
        ]
    },
    {
        pergunta: "Quais são todos os estados possíveis que um tipo lógico pode assumir?",
        resposta: "Verdadeiro, Falso",
        opcoes: [
            "Verdadeiro, Duvidoso",
            "Falso, Duvidoso, Verdadeiro",
            "Incerto, Certo",
            "Verdadeiro, Falso",
            "Verdadeiro, Errado"
        ]
    },
    {
        pergunta: "Qual dos seguintes itens é melhor representado por um valor constante em um algoritmo?",
        resposta: "Valor matemático de Pi",
        opcoes: [
            "Salário de um Funcionário",
            "Valor da Temperatura no final de semana",
            "Valor matemático de Pi",
            "Distância da Terra à Lua",
            "Velocidade de um carro em movimento"
        ]
    },
    {
        pergunta: "O que é Compilação?",
        resposta: "Tradução do código-fonte em um ou mais arquivos que podem ser armazenados e executados quantas vezes se desejar, sem necessitar de nova compilação.",
        opcoes: [
            "Comandos contidos no código-fonte são executados à medida em que são traduzidos, sendo necessária a interpretação toda vez que se quiser rodar o programa.",
            "Tradução do código-fonte em um ou mais arquivos que podem ser armazenados e executados quantas vezes se desejar, sem necessitar de nova compilação.",
            "Junção de comandos do código-fonte em um arquivo empacotado para distribuição por um meio específico para instalação do programa.",
            "Execução das instruções contidas em um script contendo o código-fonte, de forma sequencial.",
            "Organização do código-fonte em uma pasta contendo arquivos em ordem alfabética"
        ]
    }

];

let pontuacao = 0;

let indicePergunta = 0;
let perguntasRespondida = [];


function gerenciarPerguntas() {
    if (indicePergunta < listaPerguntas.length){
        let pergunta  = listaPerguntas[indicePergunta];
        let resultado = `<h2>${pergunta.pergunta}</h2>`;

        for (let i in pergunta.opcoes) {
            resultado += `<label><input name="opcao" type="radio" value="${pergunta.opcoes[i]}"> ${pergunta.opcoes[i]}</label>`;
        }

        resultado += "<button onclick='corrigir()' >Verificar</button>";

        document.getElementById('pergunta').innerHTML = resultado;
    } else {
        quadroPontuacao();
    } 
}


function corrigir() {
    let respostaUser = document.querySelector('input[name="opcao"]:checked').value;

    if (respostaUser === listaPerguntas[indicePergunta].resposta) {
        pontuacao++;
    }

    indicePergunta++;
    gerenciarPerguntas();
}

function quadroPontuacao() {
    let resultado = '<h2>Pontuação Final</h2>';
    if (pontuacao == 5) {
        resultado += `<p>Parabéns, ARRASSOU!</p><p>Acertou ${pontuacao} de ${listaPerguntas.length}`;
    } else if (pontuacao > 2) {
        resultado += `<p>Parabéns, você está indo bem!</p><p>Acertou ${pontuacao} de ${listaPerguntas.length}`;
    } else {
        resultado += `<p>Está precisando melhorar!</p><p>Acertou ${pontuacao} de ${listaPerguntas.length}`;
    }

    indicePergunta = 0;
    pontuacao = 0;

    resultado += `<button onclick="gerenciarPerguntas()" >Recomeçar</button>`;

    document.getElementById('pergunta').innerHTML = resultado;
}

gerenciarPerguntas();
