import listaPerguntas from "../script/perguntas.js";

let pontuacao = 0;

let indicePergunta = 0;

document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'verificar') {
        console.log('Evento de clique adicionado ao botão Verificar');
        corrigir();
    } else if (event.target && event.target.id === 'recomecar') {
        console.log('recomecar');
        gerenciarPerguntas();
    }
});

function gerenciarPerguntas() {
    if (indicePergunta < listaPerguntas.length) {
        let pergunta = listaPerguntas[indicePergunta];
        let resultado = `<h2>${pergunta.pergunta}</h2>`;

        for (let i in pergunta.opcoes) {
            resultado += `<label><input name="opcao" type="radio" value="${pergunta.opcoes[i]}"> ${pergunta.opcoes[i]}</label>`;
        }

        resultado += "<button id='verificar' >Verificar</button>";

        let a = document.getElementById('verificar');

        document.getElementById('pergunta').innerHTML = resultado;
    } else {
        quadroPontuacao();
    }
}


function corrigir() {
    console.log('Função corrigir() foi chamada');
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

    resultado += `<button id="recomecar">Recomeçar</button>`;

    document.getElementById('pergunta').innerHTML = resultado;
}

gerenciarPerguntas();
