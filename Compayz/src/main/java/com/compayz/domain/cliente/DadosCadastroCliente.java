package com.compayz.domain.cliente;

import org.hibernate.validator.constraints.br.CPF;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DadosCadastroCliente {
	
	@NotBlank(message = "{campo.nome.obrigatorio}")
	String nome;
	@NotBlank(message = "{campo.cpf.obrigatorio}")
	@CPF(message = "{campo.cpf.invalido}")
	private String cpf;
	@Pattern(regexp = "\\(\\d{2}\\)\\s\\d{5}-\\d{4}")
	@NotBlank(message = "{campo.telefone.obrigatorio}")
	String telefone;
	@NotBlank(message = "{campo.email.obrigatorio}")
	@Email(message = "{campo.email.invalido}")
	private String email;
}
