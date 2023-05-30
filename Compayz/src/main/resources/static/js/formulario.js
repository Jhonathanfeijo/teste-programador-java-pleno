export function criarDivFormulario(tituloFormulario) {

    var bk_modal = document.createElement('div');
    bk_modal.classList.add('bk_modal');

    var divFormulario = document.createElement('form')
    divFormulario.classList.add('div_formulario')

    var titulo = criarTituloFormulario(tituloFormulario)
    divFormulario.appendChild(titulo)

    var botaoFecharFormulario = criarBotaoFecharFormulario();
    divFormulario.appendChild(botaoFecharFormulario)


    bk_modal.appendChild(divFormulario);
    return bk_modal
}

function criarTituloFormulario(tituloFormulario) {
    var titulo = document.createElement('h1');
    titulo.classList.add('titulo_formulario')
    titulo.textContent = tituloFormulario;
    return titulo;
}

export function criarDivInput(labelTextContent, dadoObjeto) {
    var divInput = document.createElement('div');
    divInput.classList.add('div_input')

    var label = document.createElement('label');
    label.for = dadoObjeto;
    label.textContent = labelTextContent


    var input = document.createElement('input');
    input.classList.add('input_formulario')
    input.id = dadoObjeto;
    input.name = dadoObjeto;

    divInput.appendChild(label);
    divInput.appendChild(input);
    return divInput
}

export function criarDivInputNumber(labelTextContent, dadoObjeto){
    var divInput = criarDivInput(labelTextContent, dadoObjeto);
    var input = divInput.querySelector('input');
    input.setAttribute('type', 'number');
    input.setAttribute('min','0');
    return divInput;
}

export function criarBotaoFormulario() {
    var botao = document.createElement('button');
    botao.textContent = 'Enviar';
    botao.classList.add('botao_formulario')
    return botao;
}

function criarBotaoFecharFormulario() {
    var botao = document.createElement('button');
    botao.classList.add('botao_fechar_formulario');
    botao.textContent = 'x'
    botao.addEventListener('click',()=>{
        botao.parentNode.parentNode.remove();
    })
    return botao;
}