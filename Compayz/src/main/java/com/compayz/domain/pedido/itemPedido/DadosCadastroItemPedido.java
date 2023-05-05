package com.compayz.domain.pedido.itemPedido;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class DadosCadastroItemPedido {
	@NotNull(message = "{campo.quantidade-itempedido.obrigatorio}")
	@Min(value = 1)
	private Integer quantidade;
	@NotNull(message = "{campo.idproduto-itempedido.obrigatorio}")
	private Long idProduto;
}
