package com.compayz.domain.pedido.itemPedido;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InfoItemPedido {

	private String descricao;
	private BigDecimal valorProduto;
	private Integer quantidade;
	private BigDecimal valorItem;
}
