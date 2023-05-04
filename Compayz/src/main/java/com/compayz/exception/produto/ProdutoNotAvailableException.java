package com.compayz.exception.produto;

public class ProdutoNotAvailableException extends RuntimeException {

	ProdutoNotAvailableException() {
		super("Produto não disponível");
	}
}
