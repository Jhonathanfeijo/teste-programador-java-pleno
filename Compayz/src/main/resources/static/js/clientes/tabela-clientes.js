import { criarTabela, criarLinha, criarColuna, criarTdBotaoModificador } from "../tabela.js";
import { excluirCliente } from "./excluir-cliente.js";
import { criarFormularioCadastroCliente } from "./cadastrar-cliente.js";
import { criarFormularioAtualizacaoCliente } from "./atualizar-cliente.js";
export function criarTabelaClientes() {
    var tabela = criarTabela();

    var cabecalho = criarLinha('cabecalho');

    cabecalho.appendChild(criarColuna('Codigo'));
    cabecalho.appendChild(criarColuna('Nome'));
    cabecalho.appendChild(criarColuna('CPF'));
    cabecalho.appendChild(criarColuna('E-mail'));
    cabecalho.appendChild(criarColuna('Telefone'));

    tabela.appendChild(cabecalho);

    return tabela;

}

export function criarLinhaCliente(cliente) {

    var linha_cliente = criarLinha('objeto');

    var codigo = criarColuna(cliente.id);
    codigo.id = 'codigo_cliente';
    var nome = criarColuna(cliente.nome);
    nome.id = 'nome_cliente';
    var cpf = criarColuna(cliente.cpf);
    cpf.id = 'cpf_cliente';
    var email = criarColuna(cliente.email);
    email.id = 'email_cliente';
    var telefone = criarColuna(cliente.telefone);
    telefone.id = 'telefone_cliente';

    linha_cliente.appendChild(codigo);
    linha_cliente.appendChild(nome);
    linha_cliente.appendChild(cpf);
    linha_cliente.appendChild(email);
    linha_cliente.appendChild(telefone);
    linha_cliente.appendChild(criarBotaoAlterarCliente(cliente.id));
    linha_cliente.appendChild(criarBotaoExcluirCliente(cliente.id))


    return linha_cliente;
}

export function criarBotaoCadastrarCliente() {
    var botao = document.createElement('a');
    botao.classList.add('botaoCadastrarObjeto');
    botao.textContent = "Cadastrar cliente"
    botao.addEventListener('click', () => {
        botao.parentNode.appendChild(criarFormularioCadastroCliente())
    })
    return botao;
}

function criarBotaoAlterarCliente(clienteId) {
    var tdBotao = criarTdBotaoModificador(clienteId, 'Alterar');
    var botao = tdBotao.querySelector('a');
    botao.addEventListener('click', () => {
        botao.parentNode.appendChild(criarFormularioAtualizacaoCliente(clienteId))
    })
    return tdBotao;
}

function criarBotaoExcluirCliente(clienteId) {
    var tdBotao = criarTdBotaoModificador(clienteId, 'Excluir');
    var botao = tdBotao.querySelector('a');
    botao.addEventListener('click', () => {
        excluirCliente(clienteId);
    })
    return tdBotao;
}