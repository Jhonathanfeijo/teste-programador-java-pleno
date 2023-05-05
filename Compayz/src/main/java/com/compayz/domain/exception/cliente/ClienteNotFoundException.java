package com.compayz.domain.exception.cliente;

public class ClienteNotFoundException extends RuntimeException {
	public ClienteNotFoundException() {
		super("Cliente não encontrado");
	}
}
