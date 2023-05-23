import { criarTd, criarTr } from "../../tabela.js";
import { deletarCliente } from "./deletar-clientes.js";

async function obterClientes() {
    return await fetch('http://localhost:8080/cliente').then(
        res => res.json()
    ).then(clientes => clientes.content).catch(error => console.log(error))
}


function criarTabelaCliente() {
    var tabela = document.createElement('table');
    tabela.classList.add('tabela');

    var tr = criarTr('linha');

    tr.appendChild(criarTd('Código', 'coluna', 'codigo_cabecalho'));
    tr.appendChild(criarTd('Nome', 'coluna', 'nome_cabecalho'));
    tr.appendChild(criarTd('CPF', 'coluna', 'cpf_cabecalho'));
    tr.appendChild(criarTd('E-mail', 'coluna', 'email_cabecalho'));
    tr.appendChild(criarTd('Telefone', 'coluna', 'telefone_cabecalho'));

    tabela.appendChild(tr);

    return tabela;
}

function adicionarCliente(cliente) {

    var trCliente = criarTr('linha')

    var tdBotaoAlterar = criarTd('', 'coluna', 'alterar');
    tdBotaoAlterar.appendChild(criarBotaoModificadorCliente(cliente.id, 'Alterar'))

    
    var tdBotaoExcluir = criarTd('', 'coluna', 'excluir');
    var botaoExcluir = criarBotaoModificadorCliente(cliente.id, 'Excluir')
    tdBotaoExcluir.appendChild(botaoExcluir);
    botaoExcluir.addEventListener('click', ()=>{
        deletarCliente(botaoExcluir);
    })
    
    trCliente.appendChild(criarTd(cliente.id, 'coluna', 'codigo_cliente'));
    trCliente.appendChild(criarTd(cliente.nome, 'coluna', 'nome_cliente'));
    trCliente.appendChild(criarTd(cliente.cpf, 'coluna', 'cpf_cliente'));
    trCliente.appendChild(criarTd(cliente.email, 'coluna', 'email_cliente'));
    trCliente.appendChild(criarTd(cliente.telefone, 'coluna', 'telefone_cliente'));
    trCliente.appendChild(tdBotaoAlterar);
    trCliente.appendChild(tdBotaoExcluir);
    
    return trCliente;
    
}

function criarBotaoModificadorCliente(valor, textContent) {
    var botao = document.createElement('a');
    botao.classList.add('botao_tabela');
    botao.value = valor;
    botao.textContent = textContent
    return botao;
}

function adicionarClientesTabela(tabela) {
    obterClientes().then(clientes => {
        clientes.forEach(cliente => {
            tabela.appendChild(adicionarCliente(cliente));
        })
    })
    return tabela;
}

export function criarConteudoListagemClientes() {
    var div = document.createElement('div');
    div.classList.add('conteudo');
    var tabela = criarTabelaCliente();
    tabela = adicionarClientesTabela(tabela);
    return tabela;
}

export function criarBotaoCadastrarCliente() {
    var botao = document.createElement('a');
    botao.classList.add('botao_formulario');
    botao.textContent = 'Cadastrar cliente'
    botao.href = "/#cadastrar_cliente"
    botao.id = 'botao_cadastrar_cliente'
    return botao;
}
