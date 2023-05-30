import { criarDivFormulario, criarDivInput, criarBotaoFormulario } from "../formulario.js";


export function criarDivFormularioCliente(titulo) {
    var bk_modal = criarDivFormulario(titulo);
    var divFormulario = bk_modal.querySelector('.div_formulario')

    divFormulario.appendChild(criarDivInput('Nome', 'nome_cliente_input'));
    divFormulario.appendChild(criarDivInput('CPF', 'cpf_cliente_input'));
    divFormulario.appendChild(criarDivInput('E-mail', 'email_cliente_input'));
    divFormulario.appendChild(criarDivInput('Telefone', 'telefone_cliente_input'));

    var inputs = divFormulario.querySelectorAll('input');
    inputs.forEach(input => {
        input.setAttribute('required', 'true')
    })

    $(document).ready(function () {
        $("#telefone_cliente_input").inputmask({
            mask: "(99) 99999-9999",
            keepStatic: true
        });
    });

    $(document).ready(function () {
        $("#cpf_cliente_input").inputmask({
            mask: "999.999.999-99",
            keepStatic: true
        });
    });

    var botao_formulario = criarBotaoFormulario();
    divFormulario.appendChild(botao_formulario)

    return bk_modal;
}
