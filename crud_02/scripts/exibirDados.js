import { Produto, listProdutos } from "./Produto.js"

// Não está aparecendo AINDA!

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

    for(let i in listProdutos) {

        row += `<tr><td><img onclick='excluir(${listProdutos[i].id})' src='assets/delete.svg' alt='Edit'></td>` +
                    `<td><img onclick='atualizar(${listProdutos[i].id})' src='assets/edit.svg' alt='Edit' ></td>` +
                    `<td>${listProdutos[i].id}</td>` +
                    `<td>${listProdutos[i].produto}</td>` +
                    `<td>${listProdutos[i].fornecedor}</td>` +
                    `<td>${listProdutos[i].lote}</td>` +
                    `<td>${listProdutos[i].quantidade}</td>` +
                    `<td>${listProdutos[i].vencimento}</td></tr>`;

    }

    row += '</tbody></table>';

    document.querySelector("#resultados").innerHTML = row;
}