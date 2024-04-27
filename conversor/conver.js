/*algoritmo para converter o material de tonelada
para metros cúbicos de acordo com o material
selecionado pelo usuário */


// verificando se a tecla ENTER foi pressionada.
document.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
      converterMaterial();
    }

    //Para rolar a tela até a sessão de resultados 
    var mov = document.getElementById('res');
    mov.scrollIntoView({ behavior: 'smooth' }); 

}, false);

function converterMaterial(){

    // verifica se tem algo no input, se estiver vazio, retorna sem fazer nada
    var input = document.getElementById('tonelada');
    if (input.value.trim() === '') {
    return; 
    }

    //Para rolar a tela até a sessão de resultados 
    var mov = document.getElementById('res');
    mov.scrollIntoView({ behavior: 'smooth' });

    var conv = material();
    var ton = document.getElementById('tonelada').value;
    converter(ton, conv);

    
}

// para encontrar a unidade de conversão de acordo com o material
function material(){

    var mate = document.getElementsByName('material');
    var uni = 0;

    mate[0].checked ? uni = Number(1.5) 
    : mate[1].checked ? uni = Number(1.41) 
    : mate[2].checked ? uni = Number(1.37) 
    : alert('![ERROR]!');

    return uni;
}

// faz a conversão e ampresenta os resultado necessários
function converter(tonelada, conversor){

    var resposta = `<p>O seu valor atual é: <span>${tonelada}</span> toneladas</p>`;

    var arredonda = Math.round(tonelada / conversor);
    resposta += `<p>Em M³ o valor é: ${arredonda} m³</p>`;

    var valFrac = parseFloat(arredonda / tonelada);
    resposta += `<p class="cop_res">Para o multiplicadr o valor é <span>${valFrac.toLocaleString('pt-BR', { minimumFractionDigits: 8, maximumFractionDigits: 8 })}</span></p>`;

    //verifica qual a unidade de conversão para calcular o frete
        //Areia = 1.5 = R$ 48,00 por tonelada
        //Pedras = restante dos valores = R$ 32,00 por tonelada
    if( conversor === 1.5 ){
        var frete = (tonelada * 48);
        resposta += `<p class="cop_res">O valor do frete será <span>R$ ${frete.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></p>`
    } else {
        var frete = (tonelada * 32);
        resposta += `<p class="cop_res">O valor do frete será <span>R$ ${frete.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></p>`
    }

    document.getElementById("res").innerHTML = resposta;
    document.getAnimations("tonelada").innerHTML = "";

    /*  VERIFICAÇÃO 
    valFrac = valFrac * ton;
    console.log(valFrac);
    */
}

//colocar um CLEAR ao selecionar o tipo do material;
