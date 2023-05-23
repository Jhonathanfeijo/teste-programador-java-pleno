

export function criarFormularioProduto() {
    var formulario = document.createElement('form');
    formulario.classList.add('formulario');

    var descricao = criarCampoDados('Descrição', 'campo_descricao', 'text');
    var valor = criarCampoDados('Valor', 'campo_valor', 'text');
    var quantidade = criarCampoDados('Quantidade', 'campo_quantidade', 'number');

    var valorInput = valor.querySelector('.input_dados');
    valorInput.setAttribute('min', 0);

    var quantidadeInput = quantidade.querySelector('.input_dados');
    quantidadeInput.setAttribute('min', 0);

    formulario.appendChild(descricao);
    formulario.appendChild(valor);
    formulario.appendChild(quantidade);
    formulario.appendChild(criarBotao());

    formulario.addEventListener('submit', enviarProduto);
    return formulario;
}

function criarBotao() {
    var botao = document.createElement('button');
    botao.classList.add('botao_formulario');
    botao.textContent = 'Enviar';

    return botao;
}

function criarCampoDados(textContent, dadoProduto, type) {
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
    input.setAttribute('type', type);
    input.setAttribute('required', 'true');

    div.appendChild(label);
    div.appendChild(input);

    return div;
}

function enviarProduto(event) {
    event.preventDefault();
    var formulario = document.querySelector('.formulario');
    var valor = document.querySelector('#campo_valor');
    var quantidade = document.querySelector('#campo_quantidade');
    var descricao = document.querySelector('#campo_descricao');
    console.log(valor.value);

    fetch('http://localhost:8080/produto', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            descricao: descricao.value,
            quantidade: parseInt(quantidade.value),
            valor: parseFloat(valor.value).toFixed(2)
        })
    }).then(res => {
        if (res.status === 201) {
            alert('Produto cadastrado');
            formulario.reset();
            window.location.href = '/#produtos'
        } else {
            alert('Não foi possível cadastrar o produto');
        }
    });
}
