

export function criarFormularioCliente(cliente) {
    var formulario = document.createElement('form');
    formulario.classList.add('formulario');

    var nomeCliente = criarCampoDados('Nome', 'nome');
    var cpf = criarCampoDados('CPF', 'cpf');
    var email = criarCampoDados('E-mail', 'email');
    var telefone = criarCampoDados('Telefone', 'telefone');

    formulario.appendChild(nomeCliente);
    formulario.appendChild(cpf);
    formulario.appendChild(email);
    formulario.appendChild(telefone);
    formulario.appendChild(criarBotao());

    $(document).ready(function () {
        $("#telefone").inputmask({
            mask: "(99) 99999-9999",
            keepStatic: true
        });
    });

    $(document).ready(function () {
        $("#cpf").inputmask({
            mask: "999.999.999-99",
            keepStatic: true
        });
    });

    formulario.addEventListener('submit', enviarCliente);
    return formulario;
}

function criarBotao() {
    var botao = document.createElement('button');
    botao.classList.add('botao_formulario');
    botao.textContent = 'Enviar';

    return botao;
}

function criarCampoDados(textContent, dadoProduto) {
    var div = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');

    div.classList.add('field_dados');

    label.classList.add('label_dados');
    label.setAttribute('for', dadoProduto);
    label.textContent = textContent;

    input.classList.add('input_dados');
    input.setAttribute('id', dadoProduto);
    input.setAttribute('name', dadoProduto);
    input.setAttribute('required', 'true')

    div.appendChild(label);
    div.appendChild(input);

    return div;
}

function enviarCliente(event) {
    event.preventDefault();

    var formulario = document.querySelector('.formulario')
    var nome = document.querySelector('#nome');
    var cpf = document.querySelector('#cpf');
    var email = document.querySelector('#email');
    var telefone = document.querySelector('#telefone');

    fetch('http://localhost:8080/cliente', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            nome: nome.value,
            cpf: cpf.value,
            email: email.value,
            telefone: telefone.value
        })
    }).then(res => {
        if (res.status === 201) {
            alert('Cliente cadastrado')
            formulario.reset();
            window.location.href = '/#clientes'
        }
        else
            alert('Não foi possível cadastrar o cliente')
    })
}
