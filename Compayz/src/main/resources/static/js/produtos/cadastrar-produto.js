import { criarDivFormularioProduto } from "./formulario-produto.js";
import { atualizarConteudo } from "../index.js";

export async function cadastrarProduto() {
    var descricaoProduto = document.querySelector('#descricao_produto_input');
    var quantidadeProduto = document.querySelector('#quantidade_produto_input');
    var valorProduto = document.querySelector('#valor_produto_input');

    return await fetch('http://localhost:8080/produto', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            descricao: descricaoProduto.value,
            quantidade: quantidadeProduto.value,
            valor: valorProduto.value,
        })
    }).then(async res => {
        if (res.status === 201) {
            alert('Produto foi cadastrado com sucesso');
            var modal = document.querySelector('.bk_modal');
            modal.remove();
            atualizarConteudo();
        } else {
            const errorText = await res.text();
            alert(errorText);
        }
    });
}

export function criarFormularioCadastroProduto() {
    var divFormularioProduto = criarDivFormularioProduto('Cadastrar produto');
    divFormularioProduto.addEventListener('submit', (event) => {
        event.preventDefault();
        cadastrarProduto();
    });
    return divFormularioProduto;
}
