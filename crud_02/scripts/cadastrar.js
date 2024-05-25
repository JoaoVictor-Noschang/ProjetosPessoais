import { Produto, listProdutos } from "./Produto.js"

const produtoInput = document.querySelector("#produto");
const fornecedorInput = document.querySelector("#fornecedor");
const loteInput = document.querySelector("#lote");
const quantidadeInput = document.querySelector("#quantidade");
const vencimentoInput = document.querySelector("#vencimento");

function cadastrarLote(event) {
    event.preventDefault();

    const produtoValue = produtoInput.value;
    const fornecedorValue = fornecedorInput.value;
    const loteValue = loteInput.value;
    const quantidadeValue = quantidadeInput.value;
    const vencimentoValue = vencimentoInput.value;

    if(produtoValue != '' && fornecedorValue != '' && loteValue != '' && quantidadeValue != '' && vencimentoValue != ''){
        
        const loteAtual = new Produto(produtoValue, fornecedorValue, loteValue, quantidadeValue, vencimentoValue);
        listProdutos.push(loteAtual);

        console.log(listProdutos);
    } else {
        console.log("deu ruimm");
    }
}

const cadastroButton = document.querySelector("#submit-button");
cadastroButton.addEventListener('click', (e) => {
    cadastrarLote(e);
})