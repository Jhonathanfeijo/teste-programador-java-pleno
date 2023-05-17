import { criarFormularioCliente } from "./formulario-cliente.js";
const url = "http://localhost:8080/cliente"

var formulario = criarFormularioCliente();
var nomeForm = formulario.querySelector('#nome');
var cpfForm = formulario.querySelector('#cpf');
var telefoneForm = formulario.querySelector('#telefone');
var emailForm = formulario.querySelector('#email');

function cadastrar() {

  fetch("http://localhost:8080/cliente", {

    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    , method: "POST",
    body: JSON.stringify({
      nome: nomeForm.value,
      cpf: cpfForm.value,
      telefone: telefoneForm.value,
      email: emailForm.value
    })
  }).then(res => {
    if (res.status === 201)
      alert('Cliente cadastrado');
    if(res.status === 400)
      alert('Não foi possível cadastrar cliente')
  })
};


export function obterFormularioCliente() {

  $(document).ready(function () {
    $("#telefone").inputmask({
      mask: "(99) 99999-9999",
      keepStatic: true
    });
  });

  $(document).ready(function () {
    $("#cpf").inputmask({
      mask: "999.999.999-99",
      keepStatic: true
    });
  });
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    cadastrar()
  })
  return formulario;
}
