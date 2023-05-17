 export async function obterProdutos(){
    return await fetch("http://localhost:8080/produto").then(res => res.json()).then(res => res.content)
}