

export function criarTabela() {
    var tabela = document.createElement('table');
    tabela.classList.add('tabela');
    return tabela;
}

export function criarLinha(nomeClasse) {
    var linha = document.createElement('tr');
    linha.classList.add(nomeClasse);
    return linha;
}

export function criarColuna(conteudo) {
    var coluna = document.createElement('td');
    coluna.classList.add('coluna');
    coluna.textContent = conteudo;
    return coluna;
}
export function criarTdBotaoModificador(valorBotao, textoBotao){
    var tdBotao = document.createElement('td');
    var botao = document.createElement('a');
    botao.classList.add('botaoModificarObjeto');
    botao.value = valorBotao;
    botao.textContent = textoBotao;
    tdBotao.appendChild(botao);
    return tdBotao;
}