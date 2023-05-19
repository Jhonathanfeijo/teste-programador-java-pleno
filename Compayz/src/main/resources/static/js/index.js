import home from './pages/index/index.js'
import { adicionarInteraçoesTabela, gerarCampo } from './pages/cadastro-pedido/cadastrar-pedido.js';
import { criarFormularioProduto } from './pages/cadastro-produto/cadastro-produto.js';
import {criarFormularioCliente} from './pages/cadastro-cliente/cadastrar-cliente.js'
var titulo = document.querySelector('.titulo');
var conteudo = document.querySelector('.conteudo');

const init = () => {

    window.addEventListener('hashchange', () => {
        conteudo.innerHTML = '';

        switch (window.location.hash) {
            case '':
                conteudo.appendChild(home());
                titulo.textContent = 'Compay Z'
                break;

            case '#cadastrar_produto': 
                var formulario = criarFormularioProduto();
                conteudo.appendChild(formulario);
                titulo.textContent = 'Cadastrar produto';
                break;

            case '#cadastrar_cliente': 
                titulo.textContent = 'Cadastrar cliente'
                var formulario = criarFormularioCliente();
                conteudo.appendChild(formulario);
                break;

            case '#cadastrar_pedido': 
                titulo.textContent = 'Cadastrar pedido'

                var tabela = document.createElement('table');

                var botao = document.createElement('button');
                botao.classList.add('botao')
                botao.textContent = 'Finalizar pedido'

                var valorTotal = document.createElement('p');
                valorTotal.classList.add('valor_total')
                valorTotal.textContent = 'Valor total: R$ 00.00'

                var campoCliente = gerarCampo('Código do cliente','id_cliente')
                var campoDescricaoPedido = gerarCampo('Descrição do pedido','descricao_pedido')

                tabela = adicionarInteraçoesTabela(tabela, botao);
                conteudo.appendChild(campoCliente);
                conteudo.appendChild(campoDescricaoPedido)
                conteudo.appendChild(tabela);
                conteudo.appendChild(valorTotal);
                conteudo.appendChild(botao);
                break;

            default: conteudo.appendChild(home());
                titulo.textContent = 'Compay z'
                break;

        }
    })
}

window.addEventListener('load', () => {
    titulo.textContent = 'Compay Z'
    conteudo.appendChild(home());
    init();
})