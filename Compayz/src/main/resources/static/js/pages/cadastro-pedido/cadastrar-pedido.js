import { obterProdutos } from './buscar-produtos.js';
import { criarTabelaProdutos } from './tabela-produto.js'
import { finalizarPedido } from './finalizar-pedido.js'

export function adicionarInteraçoesTabela(tabela, valorPedido, botao) {

    obterProdutos().then(produtos => {
        tabela = criarTabelaProdutos(produtos, tabela)
    }).then(
        () => {
            var valorTotal = document.querySelector('.valor_total');
            var linhasProduto = document.querySelectorAll('.produto');
            linhasProduto.forEach(linha => {
                var interadores = linha.querySelectorAll('.coluna_interador');
                var quantidadeProduto = linha.querySelector('#quantidade');
                interadores.forEach(interador => {
                    interador.addEventListener('click', () => {
                        quantidadeProduto.textContent = interarQuantidade(quantidadeProduto, interador);
                        valorTotal.textContent = 'Valor total: R$ ' + calcularPedido(linhasProduto);
                    })
                })
            })
        }).then(
            () => {
                var linhasProduto = document.querySelectorAll('.produto');
                ListenerClicarBotao(botao, linhasProduto);
            })
    return tabela;
}

function interarQuantidade(quantidade, interador) {
    if (parseInt(quantidade.textContent) > 0 && interador.textContent === '-')
        return parseInt(quantidade.textContent) - 1;
    if (interador.textContent === '+')
        return parseInt(quantidade.textContent) + 1;
    return quantidade.textContent
}

function calcularPedido(linhas) {
    var valorPedido = 0;
    linhas.forEach(linha => {
        var quantidade = linha.querySelector('#quantidade');
        var valor = linha.querySelector('#valor');
        valorPedido += parseFloat(quantidade.textContent) * parseFloat(valor.textContent);
    })
    return valorPedido;
}

function ListenerClicarBotao(botao, linhasProduto) {
    botao.addEventListener('click', () => finalizarPedido(linhasProduto));
}

export function gerarCampoIdCliente() {

    var div = document.createElement('div');
    var input = document.createElement('input');
    var label = document.createElement('label');

    div.classList.add('field_dados');
    input.classList.add('input_dados');
    input.id = "id_cliente"
    label.classList.add('label_dados');
    label.textContent = 'ID cliente'
    div.appendChild(label);
    div.appendChild(input);
    return div;


}