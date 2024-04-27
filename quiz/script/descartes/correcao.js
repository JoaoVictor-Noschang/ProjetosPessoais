let pontuacao = 0;

function corrigir(pergunta) {
    respostaUser = document.querySelector('input[name="opcao"]:checked').value;
    //console.log(respostaUser);

    if (pergunta.resposta.includes(respostaUser)){
        pontuacao++;
    } else {
        alert('ERRADA!');
    }

}