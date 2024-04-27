let perguntaAtual;
let perguntasRespondida = [];

function exibirPergunta(lista) {



    let resultado = '';

    const i = parseInt(Math.random() * lista.length);
    //console.log(indiceAleatorio);

    if (!perguntasRespondida.includes(lista[i])) {
        resultado = `<h2>${lista[i].pergunta}</h2>`;

        for (j in lista[i].opcoes) {
            resultado += `<p><input name="opcao" type="radio" value="${lista[i].opcoes[j]}"> ${lista[i].opcoes[j]}</p>`;
        }

        perguntasRespondida.push(lista[i]);
    }

    perguntaAtual = lista[i];

    resultado += "<button onclick='corrigir(perguntaAtual)' >Verificar</button>";

    document.getElementById('pergunta').innerHTML = resultado;



}
