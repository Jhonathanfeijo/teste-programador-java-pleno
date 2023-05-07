package com.compayz.domain.pedido.validacoes.cadastro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.compayz.domain.cliente.ClienteRepository;
import com.compayz.domain.exception.cliente.ClienteNotFoundException;
import com.compayz.domain.pedido.DadosCadastroPedido;

@Component
public class ValidacaoClienteExiste implements ValidacaoRegistrarPedido {

	@Autowired
	private ClienteRepository clienteRepository;

	@Override
	public void validar(DadosCadastroPedido dados) {
	
		boolean existeCliente = clienteRepository.existsById(dados.getIdCliente());
		if (!existeCliente)
			throw new ClienteNotFoundException();
	}

}
