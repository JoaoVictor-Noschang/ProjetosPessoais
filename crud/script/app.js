const produtos = [];
let cod = 0;

class Produto {
    constructor(produto, fornecedor, lote, quantidade, vencimento) {
        this.id = ++cod;
        this.produto = produto;
        this.fornecedor = fornecedor;
        this.lote = lote;
        this.quantidade = quantidade;
        this.vencimento = vencimento;
    }
}

let p1 = new Produto('Cerveja Local', 'Ambev', '31225-00015', '200', '2024-12-31');
produtos.push(p1);

function cadastrarLote(event) {
    event.preventDefault();

    let newProduto = document.getElementById('produto').value;
    let newFornecedor = document.getElementById('fornecedor').value;
    let newLote = document.getElementById('lote').value;
    let newQuantidade = document.getElementById('quantidade').value;
    let newVencimento = document.getElementById('vencimento').value;

    if(newProduto != '' && newFornecedor != '' && newLote != '' && newQuantidade != '' && newVencimento != ''){
        const produtoAtual = new Produto(newProduto, newFornecedor, newLote, newQuantidade, newVencimento);
        produtos.push(produtoAtual);
        alert('Registro salvo!');
        exibirDados();
        clear();
    } else {
        alert("Todos os dados devem ser informado!");
    }

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
                '<th>Vencimento</th>+'
            '</tr></thead>'+
            '<tbody>';

    for(let i in produtos) {

        row += `<tr><td><img onclick='excluir(${produtos[i].id})' src='assets/delete.svg' alt='Edit'></td>` +
                    `<td><img onclick='atualizar(${produtos[i].id})' src='assets/edit.svg' alt='Edit' ></td>` +
                    `<td>${produtos[i].id}</td>` +
                    `<td>${produtos[i].produto}</td>` +
                    `<td>${produtos[i].fornecedor}</td>` +
                    `<td>${produtos[i].lote}</td>` +
                    `<td>${produtos[i].quantidade}</td>` +
                    `<td>${produtos[i].vencimento}</td></tr>`;

    }

    row += '</tbody></table>';

    document.getElementById('resultados').innerHTML = row;
}

function clear() {
    document.getElementById('produto').value = '';
    document.getElementById('fornecedor').value = '';
    document.getElementById('lote').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('vencimento').value = '';
}

function excluir(produtoId) {
  for (let i in produtos) {
    if (produtos[i].id == produtoId) {
      produtos.splice(i, 1);
      alert('Registro deletado');
    }
  }

  exibirDados();
}

function atualizar(produtoId){
    for (let i in produtos) {
        if (produtos[i].id == produtoId) {
            document.getElementById('codigo').value = produtoId;
            document.getElementById('produto').value = produtos[i].produto;
            document.getElementById('fornecedor').value = produtos[i].fornecedor;
            document.getElementById('lote').value = produtos[i].lote;
            document.getElementById('quantidade').value = produtos[i].quantidade;
            document.getElementById('vencimento').value = produtos[i].vencimento;
        }
      }
    
      exibirDados();
}




