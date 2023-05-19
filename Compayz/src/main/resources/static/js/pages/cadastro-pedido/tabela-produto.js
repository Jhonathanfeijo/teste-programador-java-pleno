
import { criarTd, criarTr } from './../../tabela.js';

function CriarLinhaCabecalhoProduto() {
    var tr = criarTr('cabecalho_produtos');

    tr.appendChild(criarTd('Código', 'coluna', 'codigo'));
    tr.appendChild(criarTd('Descrição', 'coluna', 'descricao'));
    tr.appendChild(criarTd('Quantidade em estoque', 'coluna', 'quantidade_estoque'));
    tr.appendChild(criarTd('Valor', 'coluna', 'valor'));

    return tr;
}

function CriarLinhaProduto(produto) {
    var tr = criarTr('produto');

    tr.appendChild(criarTd(produto.id, 'coluna', 'id'));
    tr.appendChild(criarTd(produto.descricao, 'coluna', 'nome'));
    tr.appendChild(criarTd(produto.quantidade, 'coluna', 'quantidade_estoque_produto'));
    tr.appendChild(criarTd(produto.valor.toFixed(2), 'coluna', 'valor'));
    tr.appendChild(criarTd('-', 'coluna_interador', 'menos'));
    tr.appendChild(criarTd('0', 'coluna', 'quantidade'));
    tr.appendChild(criarTd('+', 'coluna_interador', 'mais'));

    return tr;
}

export function criarTabelaProdutos(produtos, tabela) {
    tabela.classList.add('tabela');
    tabela.appendChild(CriarLinhaCabecalhoProduto());
    produtos.forEach(produto => {
        if (produto.quantidade > 0) {
            var linhaProduto = CriarLinhaProduto(produto);
            tabela.appendChild(linhaProduto);
        }
    }
    )
    return tabela;
}
