package com.compayz.exception.pedido;

public class PedidoNotFoundException extends RuntimeException {

	PedidoNotFoundException() {
		super("Pedido não encontrado");
	}
}
