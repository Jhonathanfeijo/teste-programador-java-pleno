package com.compayz.domain.cliente;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;

@Getter
public class DadosAtualizacaoCliente {
	@Size(min = 2, message = "{campo.nome.invalido}")
	private String nome;
	@Pattern(regexp = "\\(\\d{2}\\)\\s\\d{5}-\\d{4}", message = "{campo.telefone.invalido}")
	private String telefone;
	@Email(message = "{campo.email.invalido}")
	private String email;
}
