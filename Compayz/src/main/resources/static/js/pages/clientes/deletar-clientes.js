export async function deletarCliente(botao){
    return await fetch('http://localhost:8080/cliente/'+botao.value,{
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    }).then(res =>{
        if(res.status === 204){
            alert('O cliente foi deletado');
            botao.parentNode.parentNode.classList.add('invisivel')
        }else{
            alert('Não foi possível excluir o cliente')
        }
    })
}