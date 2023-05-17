
export function criarFormularioCliente() {
    var formulario = document.createElement('form');
    formulario.classList.add('formulario')

    var nomeCliente = criarCampoDados('Nome', 'nome');
    var cpf = criarCampoDados('CPF', 'cpf');
    var telefone = criarCampoDados('Telefone', 'telefone');
    var email = criarCampoDados('E-mail', 'email');

    var botao = criarBotao();

    formulario.appendChild(nomeCliente);
    formulario.appendChild(cpf);
    formulario.appendChild(email);
    formulario.appendChild(telefone);
    formulario.appendChild(botao);

    return formulario;
}

function criarBotao() {

    var botao = document.createElement('button');
    botao.classList.add('botao_formulario');
    botao.textContent = 'Enviar'

    return botao;

}

function criarCampoDados(textContent, dadoCliente) {
    var div = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');

    div.classList.add('field_dados');

    label.classList.add('label_dados');
    label.setAttribute('for', dadoCliente);
    label.textContent = textContent;

    input.classList.add('input_dados');
    input.setAttribute('id', dadoCliente);
    input.setAttribute('name', dadoCliente);

    div.appendChild(label);
    div.appendChild(input);

    return div;

}