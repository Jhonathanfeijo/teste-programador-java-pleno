package com.compayz.domain.pedido;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import com.compayz.domain.pedido.itemPedido.InfoItemPedido;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class InfoPedido {

	private Long id;
	private String descricao;
	private LocalDateTime dataEmissao;
	private BigDecimal valorTotal;
	private List<InfoItemPedido> itensPedido;
}
