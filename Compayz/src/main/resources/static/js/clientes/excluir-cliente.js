import { atualizarConteudo } from "./../index.js";
export async function excluirCliente(clienteId) {
    return await fetch('http://localhost:8080/cliente/' + clienteId, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    }).then(res => {
        if (res.status === 204) {
            alert('O cliente foi excluido com sucesso!');
            atualizarConteudo();
        } else {
            alert('Não foi possível excluir o cliente')
        }
    })
}