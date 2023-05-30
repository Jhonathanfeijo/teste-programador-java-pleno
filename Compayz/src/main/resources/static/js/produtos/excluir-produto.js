import { atualizarConteudo } from "../index.js";
export async function excluirProduto(produtoId) {
    return await fetch('http://localhost:8080/produto/' + produtoId, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    }).then(res => {
        if (res.status === 204) {
            alert('O produto foi excluido com sucesso!');
            atualizarConteudo();
        } else {
            alert('Não foi possível excluir o produto')
        }
    })
}