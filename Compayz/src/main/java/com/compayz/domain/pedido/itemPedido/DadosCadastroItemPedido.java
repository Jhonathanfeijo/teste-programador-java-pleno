package com.compayz.domain.pedido.itemPedido;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class DadosCadastroItemPedido {
	@NotNull
	private Integer quantidade;
	@NotNull
	private Long idProduto;
}
