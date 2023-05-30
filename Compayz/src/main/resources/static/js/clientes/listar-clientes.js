import { criarTabelaClientes, criarLinhaCliente, criarBotaoCadastrarCliente } from "./tabela-clientes.js";

export function criarDivListagemClientes() {

    let conteudoClientes = document.createElement('div');
    conteudoClientes.classList.add('conteudo_objeto')
    var botaoCadastrar = criarBotaoCadastrarCliente()
    var tabela = criarTabelaClientes();

    obterClientes().then(clientes => {
        if (clientes.length != 0) {
            clientes.forEach(cliente => {
                var linhaCliente = criarLinhaCliente(cliente);
                tabela.appendChild(linhaCliente)
            })
            conteudoClientes.appendChild(botaoCadastrar)
            conteudoClientes.appendChild(tabela);
        } else {
            var mensagemClienteNaoDisponivel = document.createElement('h2');
            mensagemClienteNaoDisponivel.classList.add('objeto_indisponivel')
            mensagemClienteNaoDisponivel.textContent = 'Não há clientes cadastrados';
            conteudoClientes.appendChild(mensagemClienteNaoDisponivel)
            botaoCadastrar.classList.add('botaoCadastrarObjetoCentralizado')
            conteudoClientes.appendChild(botaoCadastrar)
        }

    })
    return conteudoClientes;
}

async function obterClientes() {
    return await fetch('http://localhost:8080/cliente').then(res => res.json()).then(res => res.content);
}

