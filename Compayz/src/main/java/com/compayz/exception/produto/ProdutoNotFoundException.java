package com.compayz.exception.produto;

public class ProdutoNotFoundException extends RuntimeException {

	ProdutoNotFoundException() {
		super("Produto não existe");
	}
}
