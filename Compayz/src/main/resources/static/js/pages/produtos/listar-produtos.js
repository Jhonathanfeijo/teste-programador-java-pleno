import { criarTd, criarTr } from "../../tabela.js";

async function obterProdutos() {
    return await fetch('http://localhost:8080/produto').then(
        res => res.json()
    ).then(produtos =>  produtos.content).catch(error => console.log(error))
}


function criarTabelaProdutos() {
    var tabela = document.createElement('table');
    tabela.classList.add('tabela');

    var tr = criarTr('linha');

    tr.appendChild( criarTd('Código', 'coluna', 'codigo_cabecalho'));
    tr.appendChild( criarTd('Descrição', 'coluna', 'descricao_cabecalho'));
    tr.appendChild( criarTd('Quantidade em estoque', 'coluna', 'quantidade_estoque_cabecalho'));
    tr.appendChild( criarTd('Valor', 'coluna', 'valor_cabecalho'));

    tabela.appendChild(tr);

    return tabela;
}

function adicionarProduto(produto) {

    var trProduto = criarTr('linha')

    var tdBotaoAlterar = criarTd('','coluna','alterar');
    tdBotaoAlterar.appendChild(criarBotaoModificadorProduto(produto.id, 'alterar'))

    var tdBotaoExcluir = criarTd('','coluna','excluir');
    tdBotaoExcluir.appendChild(criarBotaoModificadorProduto(produto.id, 'excluir'));

    trProduto.appendChild(criarTd(produto.id, 'coluna', 'codigo_produto'));
    trProduto.appendChild(criarTd(produto.descricao, 'coluna', 'descricao_produto'));
    trProduto.appendChild(criarTd(produto.quantidade, 'coluna', 'quantidade_estoque_produto'));
    trProduto.appendChild(criarTd(('R$ ' + parseFloat(produto.valor).toFixed(2)), 'coluna', 'valor_produto'));
    trProduto.appendChild(tdBotaoAlterar);
    trProduto.appendChild(tdBotaoExcluir);

    return trProduto;

}

function criarBotaoModificadorProduto(valor, textContent) {
    var botao = document.createElement('a');
    botao.classList.add('botao_tabela');
    botao.value = valor;
    botao.textContent = textContent
    return botao;
}

function adicionarProdutosTabela(tabela) {
    obterProdutos().then(produtos => {
        produtos.forEach(produto => {
            tabela.appendChild(adicionarProduto(produto));
        })
    })
    return tabela;
}

export function criarConteudoListagemProdutos() {
    var div = document.createElement('div');
    div.classList.add('conteudo');
    var tabela = criarTabelaProdutos();
    tabela = adicionarProdutosTabela(tabela);
    return tabela;
}

export function criarBotaoCadastrarProduto(){
    var botao = document.createElement('a');
    botao.classList.add('botao_formulario');
    botao.textContent = 'Cadastrar produto'
    botao.href = "/#cadastrar_produto"
    botao.id = 'botao_cadastrar_produto'
    return botao;
}