import { criarTabela, criarLinha, criarColuna } from "../tabela.js";
import { enviarPedido } from "./enviar-pedido.js";
export function criarTabelaProdutos() {
    var tabela = criarTabela();

    var cabecalho = criarLinha('cabecalho');

    cabecalho.appendChild(criarColuna('Codigo'));
    cabecalho.appendChild(criarColuna('Descrição'));
    cabecalho.appendChild(criarColuna('Quantidade'));
    cabecalho.appendChild(criarColuna('Valor'));

    tabela.appendChild(cabecalho);

    return tabela;

}

export function criarLinhaProduto(produto) {

    var linha_produto = criarLinha('objeto');

    var codigo = criarColuna(produto.id);
    codigo.id = 'codigo_produto';
    var descricao = criarColuna(produto.descricao);
    descricao.id = 'descricao_produto';
    var quantidade = criarColuna(produto.quantidade);
    quantidade.id = 'quantidade_produto';
    var valor = criarColuna((produto.valor).toFixed(2));
    valor.id = 'valor_produto';
    var quantidadeProdutoCarrinho = criarColuna('0');
    quantidadeProdutoCarrinho.id = 'quantidade_produto_carrinho'


    linha_produto.appendChild(codigo);
    linha_produto.appendChild(descricao);
    linha_produto.appendChild(quantidade);
    linha_produto.appendChild(valor);
    linha_produto.appendChild(tdBotaoAlterarQuantidadeProdutoCarrinho('-'));
    linha_produto.appendChild(quantidadeProdutoCarrinho);
    linha_produto.appendChild(tdBotaoAlterarQuantidadeProdutoCarrinho('+'));

    return linha_produto;
}

function tdBotaoAlterarQuantidadeProdutoCarrinho(texto) {
    var tdBotao = document.createElement('td');
    tdBotao.classList.add('coluna');
    var botao = document.createElement('button');
    botao.classList.add('botao_alterar_quantidade_produto');
    botao.textContent = texto;
    botao.value = texto;
    botao.addEventListener('click', () => {
        var linhaProduto = botao.parentNode.parentNode;
        var quantidade = linhaProduto.querySelector('#quantidade_produto_carrinho');
        if (botao.value === '-' && parseInt(quantidade.textContent) > 0) {
            quantidade.textContent = parseInt(quantidade.textContent) - 1;
        } else if (botao.value === '+') {
            quantidade.textContent = parseInt(quantidade.textContent) + 1;
        }
        atualizarValorTotal();
    })
    tdBotao.appendChild(botao);
    return tdBotao;
}

export function criarBotaoEnviarPedido(tabela) {
    var botao = document.createElement('button')
    botao.classList.add('botao_enviar_pedido');
    botao.textContent = 'Enviar pedido';
    botao.addEventListener('click', () => {
        var idCliente = document.querySelector('#id_cliente_pedido');
        var descricaoPedido = document.querySelector('#descricao_pedido');
        var produtosCarrinho = document.querySelectorAll('.objeto');
        enviarPedido(idCliente, descricaoPedido, produtosCarrinho);
    })
    return botao;
}

function atualizarValorTotal() {
    var valorPedidoElemento = document.querySelector('.valor_pedido');
    var produtosCarrinho = document.querySelectorAll('.objeto');
    var valorPedido = 0;
    produtosCarrinho.forEach(produtoCarrinho => {
        var quantidade = produtoCarrinho.querySelector('#quantidade_produto_carrinho');
        var valorProduto = produtoCarrinho.querySelector('#valor_produto')
        if (parseInt(quantidade.textContent) > 0) {
            valorPedido += parseInt(quantidade.textContent) * parseFloat(valorProduto.textContent);
        }
    })
    valorPedidoElemento.textContent = 'Valor total: R$ ' + valorPedido.toFixed(2);
}
function calcularValorItemPedido(quantidade, valor) {
    return (parseInt(quantidade) * parseFloat(valor)).toFixed(2);
}

export function criarLinhaValorPedido() {
    var tr = document.createElement('h2');
    tr.textContent = 'Valor total: R$ 0.00'
    tr.classList.add('valor_pedido');
    return tr;
}


