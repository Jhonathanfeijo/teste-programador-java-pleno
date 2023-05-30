import { criarTabelaProdutos, criarLinhaProduto, criarLinhaValorPedido, criarBotaoEnviarPedido } from "./tabela-pedido.js";
import { obterProdutos } from "../produtos/listar-produtos.js";
import { criarDivInput, criarDivInputNumber } from './../formulario.js'
import { atualizarConteudo } from "../index.js";

export function criarDivCadastroPedido() {

    let conteudoPedidos = document.createElement('div');
    conteudoPedidos.classList.add('conteudo_objeto')
    var tabela = criarTabelaProdutos();

    obterProdutos()
        .then(produtos => {
            produtos.forEach(produto => {
                if (parseInt(produto.quantidade) > 0) {
                    var linhaProduto = criarLinhaProduto(produto);
                    tabela.appendChild(linhaProduto)
                }
            })
        })
        .then(() => {
            var produtos = tabela.querySelectorAll('.objeto');
            if (produtos.length === 0) {
                var mensagemProdutoNaoDisponivel = document.createElement('h2');
                mensagemProdutoNaoDisponivel.classList.add('objeto_indisponivel')
                mensagemProdutoNaoDisponivel.textContent = 'Não há produtos disponíveis';
                conteudoPedidos.appendChild(mensagemProdutoNaoDisponivel)
            } else {
                var campoCodigoCliente = criarDivInputNumber('Código do cliente', 'id_cliente_pedido');
                campoCodigoCliente.classList.add('input_pedido');
                var campoDescricaoPedido = criarDivInput('Descrição do pedido', 'descricao_pedido');
                campoDescricaoPedido.classList.add('input_pedido');
                conteudoPedidos.appendChild(campoCodigoCliente);
                conteudoPedidos.appendChild(campoDescricaoPedido)
                conteudoPedidos.appendChild(tabela);
                conteudoPedidos.appendChild(criarLinhaValorPedido());
                conteudoPedidos.appendChild(criarBotaoEnviarPedido());
            }
        })
    return conteudoPedidos;
}

