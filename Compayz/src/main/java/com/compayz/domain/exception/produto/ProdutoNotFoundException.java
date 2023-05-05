package com.compayz.domain.exception.produto;

public class ProdutoNotFoundException extends RuntimeException {

	public ProdutoNotFoundException() {
		super("Produto não existe");
	}
}
