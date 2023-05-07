package com.compayz.domain.exception.cliente;

public class ClienteNotAvailableException extends RuntimeException {
	public ClienteNotAvailableException(){
		super("Cliente não está disponível");
	}
}
