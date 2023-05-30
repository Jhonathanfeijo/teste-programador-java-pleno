import { criarDivFormularioProduto } from "./formulario-produto.js";
import { atualizarConteudo } from "../index.js";
import { obterProduto } from "./obter-produto.js";

async function atualizarProduto(produtoId, produto) {
    return await fetch('http://localhost:8080/produto/' + produtoId, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(produto)
    }).then(async res => {
        if (res.status === 200) {
            alert('O produto atualizado com sucesso!');
            var modal = document.querySelector('.bk_modal');
            modal.remove();
            atualizarConteudo();
        } else {
            const errorText = await res.text();
            alert(errorText);
        }
    });
}

export function criarFormularioAtualizacaoProduto(produtoId) {
    var formulario = criarDivFormularioProduto('Atualizar produto', produtoId);

    var descricaoInput = formulario.querySelector('#descricao_produto_input');
    var quantidadeInput = formulario.querySelector('#quantidade_produto_input');
    var valorInput = formulario.querySelector('#valor_produto_input');

    obterProduto(produtoId).then((produto) => {
        descricaoInput.value = produto.descricao;
        quantidadeInput.value = produto.quantidade;
        valorInput.value = produto.valor;
    });

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        var produtoAtualizado = {
            descricao: descricaoInput.value,
            quantidade: quantidadeInput.value,
            valor: valorInput.value
        };

        atualizarProduto(produtoId, produtoAtualizado);
    });

    return formulario;
}
