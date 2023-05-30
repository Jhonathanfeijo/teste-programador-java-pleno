export async function obterCliente(clienteId) {
   return await fetch('http://localhost:8080/cliente/' + clienteId)
    .then(res => res.json())
    
}