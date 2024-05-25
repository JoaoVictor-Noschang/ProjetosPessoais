export const listProdutos = [];
let cod =  listProdutos.lenght > 0 ? listProdutos[listProdutos.lenght - 1].id : 0;

 export class Produto {
    constructor(produto, fornecedor, lote, quantidade, vencimento) {
        this.id = ++cod;
        this.produto = produto;
        this.fornecedor = fornecedor;
        this.lote = lote;
        this.quantidade = quantidade;
        this.vencimento = vencimento;
    }
}

let p1 = new Produto('Cerveja Local', 'Ambev', '31225-00015', '200', '31 - 12 - 2024');
listProdutos.push(p1);

//console.log(listProdutos);

