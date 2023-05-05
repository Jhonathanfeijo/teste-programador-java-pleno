package com.compayz.domain.exception.produto;

public class ProdutoNotAvailableException extends RuntimeException {

	public ProdutoNotAvailableException() {
		super("Produto não disponível");
	}
}
