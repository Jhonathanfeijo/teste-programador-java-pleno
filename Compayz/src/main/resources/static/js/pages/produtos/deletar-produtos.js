export async function deletarProduto(botao){
    return await fetch('http://localhost:8080/produto/'+ botao.value,{
        headers:{
            'Content-Type': 'application/json'
        },
        method:'DELETE'
    }).then(res =>{
        if(res.status===204){
            alert('O produto foi excluido')
            botao.parentNode.parentNode.classList.add('invisivel')
        }
        else{
            alert('Não foi possível excluir o produto')
        }
    })
}