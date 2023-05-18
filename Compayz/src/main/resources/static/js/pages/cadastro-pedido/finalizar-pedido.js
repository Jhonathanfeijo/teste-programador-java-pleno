var botao = document.querySelector('.botao');
var linhas = document.querySelectorAll('.coluna');

export function finalizarPedido(produtos) {
    let itensPedido = [];

    produtos.forEach(produto => {

        var quantidadeProduto = produto.querySelector('#quantidade');
        var id = produto.querySelector('#id');
        var dadosItem = {
            idProduto: parseInt(id.textContent), quantidade: parseInt(quantidadeProduto.textContent)
        }
        if (parseInt(quantidadeProduto.textContent) > 0)
            itensPedido.push({ idProduto: parseInt(id.textContent), quantidade: parseInt(quantidadeProduto.textContent) });

    })
    const idCliente = document.querySelector('#id_cliente');

    fetch('http://localhost:8080/pedido', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            idCliente: parseInt(idCliente.value),
            itensPedido: itensPedido
        })
    }
    ).then(res => {
        if (res.status === 201)
            alert('Pedido realizado')
        else
            alert('Não foi possível realizar o pedido')
    })
}
