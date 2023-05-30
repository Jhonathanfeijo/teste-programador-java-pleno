package com.compayz.domain.cliente.validacao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.compayz.domain.cliente.ClienteRepository;
import com.compayz.domain.cliente.DadosCadastroCliente;
import com.compayz.domain.exception.cliente.DuplicateClienteException;

@Component
public class ClienteCpfDuplicadoValidacao implements ValidacaoCadastroCliente {

	@Autowired
	private ClienteRepository clienteRepository;

	public void validar(DadosCadastroCliente dados) {
		boolean existeCpfCadastrado = clienteRepository.existsByCpf(dados.getCpf());
		if (existeCpfCadastrado)
			throw new DuplicateClienteException("CPF já cadastrado no sistema");
	}

}
