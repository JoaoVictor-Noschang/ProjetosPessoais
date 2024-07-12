const cadastros = [];
let cod = cadastros.length > 0 ? cadastros[cadastros.length - 1].id : 0;

const codigoInput = document.querySelector("#codigo");
const produtoInput = document.querySelector("#produto");
const fornecedorInput = document.querySelector("#fornecedor");
const loteInput = document.querySelector("#lote");
const quantidadeInput = document.querySelector("#quantidade");
const vencimentoInput = document.querySelector("#vencimento");

const actionButton = document.querySelector("#submit-button");


function Lote(produto, fornecedor, lote, quantidade, vencimento) {
    this.id = ++cod;
    this.produto = produto;
    this.fornecedor = fornecedor;
    this.lote = lote;
    this.quantidade = quantidade;
    this.vencimento = vencimento;
}

let lote01 = new Lote('Cerveja Local', 'Ambev', '31225-00015', '200', '31-12-2024');
cadastros.push(lote01);


exibirDados();
verificarAcao();


function verificarAcao() {
    actionButton.textContent = codigoInput.value ? "Atualizar" : "Cadastrar";

    actionButton.addEventListener("click", (event) => {
        event.preventDefault();

        if (codigoInput.value) {
            atualizarLote();

        } else {
            const newRegistro = cadastrarLote();

            if (newRegistro) {
                cadastros.push(newRegistro);
                exibirDados();
                clear();

            } else {
                alert("Todos os dados devem ser informados!");
            }
        }
        verificarAcao();
    }, { once: true });
}

function cadastrarLote() {

    const newProduto = produtoInput.value;
    const newFornecedor = fornecedorInput.value;
    const newLote = loteInput.value;
    const newQuantidade = quantidadeInput.value;
    const newVencimento = vencimentoInput.value;


    if (newProduto && newFornecedor && newLote && newQuantidade && newVencimento) {
        return new Lote(newProduto, newFornecedor, newLote, newQuantidade, newVencimento);
    } else {
        return false;
    }

}

function getDadosInInput(loteId) {
    for (let i in cadastros) {
        if (cadastros[i].id == loteId) {
            codigoInput.value = cadastros[i].id;
            produtoInput.value = cadastros[i].produto;
            fornecedorInput.value = cadastros[i].fornecedor;
            loteInput.value = cadastros[i].lote;
            quantidadeInput.value = cadastros[i].quantidade;
            vencimentoInput.value = cadastros[i].vencimento;
            break;
        }
    }
    verificarAcao();
}

function atualizarLote() {
    const loteId = parseInt(codigoInput.value);
    const lote = cadastros.find(l => l.id === loteId);
    if (lote) {
        lote.produto = produtoInput.value;
        lote.fornecedor = fornecedorInput.value;
        lote.lote = loteInput.value;
        lote.quantidade = quantidadeInput.value;
        lote.vencimento = vencimentoInput.value;
        exibirDados();
        clear();
    } else {
        alert("Lote não encontrado!");
    }
}

function excluirCadastro(produtoId) {
    for (let i in cadastros) {
        if (cadastros[i].id == produtoId) {
            cadastros.splice(i, 1);
            alert('Registro deletado');
        }
    }
    exibirDados();
    clear();
}

function exibirDados() {
    let row = '<table><thead><tr>' +
        '<th>Excluir</th>' +
        '<th>Editar</th>' +
        '<th>Código</th>' +
        '<th>Produto</th>' +
        '<th>Fornecedor</th>' +
        '<th>Lote</th>' +
        '<th>Quantidade</th>' +
        '<th>Vencimento</th>'+
        '</tr></thead><tbody>';

    for (let i in cadastros) {

        row += `<tr><td><img onclick='excluirCadastro(${cadastros[i].id})' src='assets/delete.svg' alt='Edit'></td>` +
            `<td><img onclick='getDadosInInput(${cadastros[i].id})' src='assets/edit.svg' alt='Edit' ></td>` +
            `<td>${cadastros[i].id}</td>` +
            `<td>${cadastros[i].produto}</td>` +
            `<td>${cadastros[i].fornecedor}</td>` +
            `<td>${cadastros[i].lote}</td>` +
            `<td>${cadastros[i].quantidade}</td>` +
            `<td>${cadastros[i].vencimento}</td></tr>`;

    }

    row += '</tbody></table>';

    document.getElementById('resultados').innerHTML = row;
}

function clear() {
    codigoInput.value = '';
    produtoInput.value = '';
    fornecedorInput.value = '';
    loteInput.value = '';
    quantidadeInput.value = '';
    vencimentoInput.value = '';
}