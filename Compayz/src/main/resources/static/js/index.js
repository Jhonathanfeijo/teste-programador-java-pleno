
import { criarDivListagemClientes } from "./clientes/listar-clientes.js";
import { criarDivListagemProdutos } from "./produtos/listar-produtos.js";
import { criarDivCadastroPedido } from "./pedido/cadastrar-pedido.js";
import { subtituloCompayz } from "./compayz/compayz.js";
var titulo = document.querySelector('.titulo');
var conteudo = document.querySelector('.conteudo');

const init = () => {

    window.addEventListener('hashchange', () => {
        conteudo.innerHTML = '';

        switch (window.location.hash) {
            case '':
                conteudo.appendChild(subtituloCompayz());
                titulo.textContent = 'Compay Z'
                break;

            case '#clientes':
                titulo.textContent = 'Clientes'
                conteudo.appendChild(criarDivListagemClientes())
                break;
            case '#produtos':
                titulo.textContent = 'Produtos'
                conteudo.appendChild(criarDivListagemProdutos())
                break;
            case '#cadastrar_pedido':
                titulo.textContent = 'Cadastrar pedido';
                conteudo.appendChild(criarDivCadastroPedido());
                break;
            default:
                break;
        }
    })
}


window.addEventListener('load', () => {
    titulo.textContent = 'Compay Z'
    conteudo.appendChild(subtituloCompayz())
    init();
})

export function atualizarConteudo() {
    const url = window.location.href;
    window.location.href = url + '/';
    window.location.href = url
}