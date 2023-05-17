export function criarTr(nomeClasse) {
    const tr = document.createElement("tr");
    tr.classList.add(nomeClasse)
    return tr;
}

export function criarTd(elemento, nomeClasse, nomeId){
    const td = document.createElement("td");
    td.classList.add(nomeClasse)
    td.id = nomeId;
    td.textContent = elemento;
    return td
}