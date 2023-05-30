import { atualizarConteudo } from "./../index.js";

export async function enviarPedido(idCliente, descricaoPedido, produtos) {
    var itensPedido = [];

    produtos.forEach(produto => {
        var quantidadeProduto = produto.querySelector('#quantidade_produto_carrinho');
        var id = produto.querySelector('#codigo_produto');
        if (parseInt(quantidadeProduto.textContent) > 0)
            itensPedido.push({ idProduto: parseInt(id.textContent), quantidade: parseInt(quantidadeProduto.textContent) });
    });

    fetch('http://localhost:8080/pedido', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            idCliente: parseInt(idCliente.value),
            descricao: descricaoPedido.value,
            itensPedido: itensPedido
        })
    }).then(async res => {
        if (res.status === 201) {
            alert('Pedido realizado');
            atualizarConteudo();
        } else {
            const errorText = await res.text();
            alert(errorText);
        }
    });
}
