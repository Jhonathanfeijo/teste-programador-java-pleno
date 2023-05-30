import { criarDivFormulario, criarDivInput, criarBotaoFormulario, criarDivInputNumber } from "../formulario.js";


export function criarDivFormularioProduto(titulo) {
  var bk_modal = criarDivFormulario(titulo);

  var divFormulario = bk_modal.querySelector('.div_formulario')
  divFormulario.appendChild(criarDivInput('Descrição', 'descricao_produto_input'));
  divFormulario.appendChild(criarDivInputNumber('Quantidade', 'quantidade_produto_input'));
  divFormulario.appendChild(criarDivInput('Valor', 'valor_produto_input'));

  var inputs = divFormulario.querySelectorAll('input');
  inputs.forEach(input => {
    input.setAttribute('required', 'true');
  })


  $(document).ready(function () {
    $('#valor_produto_input').mask('999999999999999.99', { reverse: true });

    $('#valor_produto_input').on('input', function () {
      var inputValue = $(this).val();
      var digitsOnly = inputValue.replace(/[^0-9]/g, '');

      if (digitsOnly.length > 0) {
        var valorAtual = parseFloat(digitsOnly) / 100;
        $(this).val(valorAtual.toFixed(2));
      } else {
        $(this).val('0.00');
      }
    });
  });

  var botao_formulario = criarBotaoFormulario();
  divFormulario.appendChild(botao_formulario)

  return bk_modal;
}
