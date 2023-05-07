package com.compayz.domain.pedido.validacoes.cadastro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.compayz.domain.cliente.ClienteRepository;
import com.compayz.domain.exception.cliente.ClienteNotAvailableException;
import com.compayz.domain.pedido.DadosCadastroPedido;

@Component
public class ValidacaoClienteAtivo implements ValidacaoRegistrarPedido {

	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private ValidacaoClienteExiste validadorClienteExiste;

	@Override
	public void validar(DadosCadastroPedido dados) {

		validadorClienteExiste.validar(dados);

		boolean clienteAtivo = clienteRepository.getReferenceById(dados.getIdCliente()).isAtivo();
		if (!clienteAtivo) {
			throw new ClienteNotAvailableException();
		}

	}

}
