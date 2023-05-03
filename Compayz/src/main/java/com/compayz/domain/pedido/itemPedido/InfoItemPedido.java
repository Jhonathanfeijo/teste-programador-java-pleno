package com.compayz.domain.pedido.itemPedido;

import java.math.BigDecimal;

public record InfoItemPedido(String descricao, BigDecimal valorUnitario, Integer quantidade) {
	public InfoItemPedido(ItemPedido item) {
		this(item.getProduto().getDescricao(), item.getProduto().getValor(), item.getQuantidade());
	}
}
