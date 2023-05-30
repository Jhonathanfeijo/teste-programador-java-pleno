package com.compayz.domain.cliente.validacao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.compayz.domain.cliente.ClienteRepository;
import com.compayz.domain.cliente.DadosCadastroCliente;
import com.compayz.domain.exception.cliente.DuplicateClienteException;

@Component
public class ClienteEmailDuplicadoValidacao implements ValidacaoCadastroCliente {

	@Autowired
	private ClienteRepository clienteRepository;

	@Override
	public void validar(DadosCadastroCliente dados) {
		boolean existeEmailCadastrado = clienteRepository.existsByEmail(dados.getEmail());
		if (existeEmailCadastrado)
			throw new DuplicateClienteException("Esse e-mail já está cadastrado");
	}

}
