package com.compayz.domain.cliente;

import org.hibernate.validator.constraints.br.CPF;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DadosCadastroCliente {
	@NotBlank
	String nome;
	@NotBlank
	@CPF
	private String cpf;
	@NotBlank
	String telefone;
	@NotBlank
	@Email
	private String email;
}
