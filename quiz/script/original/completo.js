const listaPerguntas = [
    {
        pergunta: "Qual é a função principal de um algoritmo?",
        resposta: "Resolver problemas de forma sistemática e eficiente",
        opcoes: [
            "Gerar código de programação automaticamente",
            "Resolver problemas de forma sistemática e eficiente",
            "Testar programas de computador",
            "Escrever documentação técnica",
            "Nenhuma das alternativas anteriores"
        ]
    },
    {
        pergunta: 'O que é um loop "for" em programação?',
        resposta: "Uma estrutura de repetição",
        opcoes: [
            "Uma estrutura condicional",
            "Uma estrutura de repetição",
            "Uma função matemática",
            "Um operador lógico",
            "Nenhuma das alternativas anteriores"
        ]
    },
    {
        pergunta: "Qual é a diferença entre uma função e um procedimento em programação?",
        resposta: "Uma função retorna um valor, enquanto um procedimento não retorna nada",
        opcoes: [
            "Uma função retorna um valor, enquanto um procedimento não retorna nada",
            "Uma função não retorna nada, enquanto um procedimento retorna um valor",
            "Uma função e um procedimento são a mesma coisa",
            "Uma função e um procedimento não existem em programação",
            "Nenhuma das alternativas anteriores"
        ]
    },
    {
        pergunta: "O que é um algoritmo de ordenação?",
        resposta: "Um algoritmo que organiza dados em uma ordem específica",
        opcoes: [
            "Um algoritmo que organiza dados em uma sequência aleatória",
            "Um algoritmo que transforma dados em uma lista",
            "Um algoritmo que remove itens duplicados de uma lista",
            "Um algoritmo que organiza dados em uma ordem específica",
            "Nenhuma das alternativas anteriores"
        ]
    },
    {
        pergunta: 'Qual é a função do operador lógico "AND" (E) em programação?',
        resposta: "Retorna verdadeiro apenas se todas as expressões forem verdadeiras",
        opcoes: [
            "Retorna verdadeiro se pelo menos uma das expressões for verdadeira",
            "Retorna verdadeiro se nenhuma das expressões for verdadeira",
            "Retorna verdadeiro apenas se todas as expressões forem verdadeiras",
            "Retorna verdadeiro se pelo menos uma das expressões for falsa",
            "Nenhuma das alternativas anteriores"
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
