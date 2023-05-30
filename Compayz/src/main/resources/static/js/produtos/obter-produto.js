export async function obterProduto(produtoId) {
   return await fetch('http://localhost:8080/produto/' + produtoId)
    .then(res => res.json())
}