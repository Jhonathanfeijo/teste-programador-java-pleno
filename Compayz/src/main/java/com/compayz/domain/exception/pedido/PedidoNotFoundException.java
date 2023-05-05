package com.compayz.domain.exception.pedido;

public class PedidoNotFoundException extends RuntimeException {

	public PedidoNotFoundException() {
		super("Pedido não encontrado");
	}
}
