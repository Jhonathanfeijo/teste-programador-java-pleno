import { criarDivFormularioCliente } from "./formulario-cliente.js";
import { atualizarConteudo } from "../index.js";
import { obterCliente } from "./obter-cliente.js";

async function atualizarCliente(clienteId, cliente) {
    return await fetch('http://localhost:8080/cliente/' + clienteId, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(cliente)
    }).then(async res => {
        if (res.status === 200) {
            alert('Cliente atualizado com sucesso!');
            var modal = document.querySelector('.bk_modal');
            modal.remove();
            atualizarConteudo();
        } else {
            const errorText = await res.text();
            alert(errorText);
        }
    });
}


export function criarFormularioAtualizacaoCliente(clienteId) {
    var formulario = criarDivFormularioCliente('Atualizar cliente', clienteId);

    var nomeInput = formulario.querySelector('#nome_cliente_input');
    var cpfInput = formulario.querySelector('#cpf_cliente_input');
    cpfInput.setAttribute('readonly', 'true');
    cpfInput.classList.add('input_readonly');
    var emailInput = formulario.querySelector('#email_cliente_input');
    var telefoneInput = formulario.querySelector('#telefone_cliente_input');

    obterCliente(clienteId).then((cliente) => {
        nomeInput.value = cliente.nome;
        cpfInput.value = cliente.cpf;
        emailInput.value = cliente.email;
        telefoneInput.value = cliente.telefone;
    });

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        var clienteAtualizado = {
            nome: nomeInput.value,
            email: emailInput.value,
            telefone: telefoneInput.value
        };

        atualizarCliente(clienteId, clienteAtualizado);
    });

    return formulario;
}
