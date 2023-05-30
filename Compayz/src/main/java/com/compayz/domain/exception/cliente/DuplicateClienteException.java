package com.compayz.domain.exception.cliente;

public class DuplicateClienteException extends RuntimeException{

	public DuplicateClienteException(String erro){
		super(erro);
	}
}
