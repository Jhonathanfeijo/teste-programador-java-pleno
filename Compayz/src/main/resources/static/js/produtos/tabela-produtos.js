import { criarTabela, criarLinha, criarColuna, criarTdBotaoModificador } from "./../tabela.js";
import { excluirProduto } from "./excluir-produto.js";
import { criarFormularioCadastroProduto } from "./cadastrar-produto.js";
import { criarFormularioAtualizacaoProduto} from "./atualizar-produto.js";
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


    linha_produto.appendChild(codigo);
    linha_produto.appendChild(descricao);
    linha_produto.appendChild(quantidade);
    linha_produto.appendChild(valor);
    linha_produto.appendChild(criarBotaoAlterarProduto(produto.id));
    linha_produto.appendChild(criarBotaoExcluirProduto(produto.id))


    return linha_produto;
}

export function criarBotaoCadastrarProduto() {
    var botao = document.createElement('a');
    botao.classList.add('botaoCadastrarObjeto');
    botao.textContent = "Cadastrar produto"
    botao.addEventListener('click', () => {
        botao.parentNode.appendChild(criarFormularioCadastroProduto())
    })
    return botao;
}

function criarBotaoAlterarProduto(produtoId) {
    var tdBotao = criarTdBotaoModificador(produtoId, 'Alterar');
    var botao = tdBotao.querySelector('a');
    botao.addEventListener('click', ()=>{
        botao.parentNode.appendChild(criarFormularioAtualizacaoProduto(produtoId))
    })
    return tdBotao;
}

function criarBotaoExcluirProduto(produtoId) {
    var tdBotao = criarTdBotaoModificador(produtoId, 'Excluir');
    var botao = tdBotao.querySelector('a');
    botao.addEventListener('click', () => {
        excluirProduto(produtoId);
    })
    return tdBotao;
}