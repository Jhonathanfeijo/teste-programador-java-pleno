package com.compayz.domain.cliente;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InfoCliente {
	private Long id;
	private String nome;
	private String cpf;
	private String email;
	private String telefone;
}
