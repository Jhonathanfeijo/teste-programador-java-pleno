import { criarTabelaProdutos, criarLinhaProduto, criarBotaoCadastrarProduto } from "./tabela-produtos.js";

export function criarDivListagemProdutos() {

    let conteudoProdutos = document.createElement('div');
    conteudoProdutos.classList.add('conteudo_objeto')
    var botaoCadastrar = criarBotaoCadastrarProduto()
    var tabela = criarTabelaProdutos();

    obterProdutos().then(produtos => {
        if (produtos.length > 0) {
            produtos.forEach(produto => {
                var linhaProduto = criarLinhaProduto(produto);
                tabela.appendChild(linhaProduto)
            })
            conteudoProdutos.appendChild(botaoCadastrar)
            conteudoProdutos.appendChild(tabela);
        } else {
            var mensagemProdutoNaoDisponivel = document.createElement('h2');
            mensagemProdutoNaoDisponivel.classList.add('objeto_indisponivel')
            mensagemProdutoNaoDisponivel.textContent = 'Não há produtos cadastrados';
            conteudoProdutos.appendChild(mensagemProdutoNaoDisponivel)
            botaoCadastrar.classList.add('botaoCadastrarObjetoCentralizado')
            conteudoProdutos.appendChild(botaoCadastrar)
        }
    })
    return conteudoProdutos;
}

export async function obterProdutos() {
    return await fetch('http://localhost:8080/produto').then(res => res.json()).then(res => res.content);
}


