import { criarDivFormularioCliente } from "./formulario-cliente.js";
import { atualizarConteudo } from "../index.js";

export async function cadastrarCliente() {
    var nomeCliente = document.querySelector('#nome_cliente_input');
    var cpfCliente = document.querySelector('#cpf_cliente_input');
    var emailCliente = document.querySelector('#email_cliente_input');
    var telefoneCliente = document.querySelector('#telefone_cliente_input');

    return await fetch('http://localhost:8080/cliente', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            nome: nomeCliente.value,
            cpf: cpfCliente.value,
            email: emailCliente.value,
            telefone: telefoneCliente.value
        })
    }).then(async res => {
        if (res.status === 201) {
            alert('Cliente foi cadastrado com sucesso');
            var modal = document.querySelector('.bk_modal');
            modal.remove();
            atualizarConteudo();
        } else {
            const errorText = await res.text();
            alert(errorText);
        }
    });
}


export function criarFormularioCadastroCliente() {
    var divFormularioCliente = criarDivFormularioCliente('Cadastrar cliente');
    divFormularioCliente.addEventListener('submit', (event) => {
        event.preventDefault();
        cadastrarCliente();
    });
    return divFormularioCliente;
}
