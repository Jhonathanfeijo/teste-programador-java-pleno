package com.compayz.domain.produto;

import java.math.BigDecimal;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
public class DadosAtualizacaoProduto {

	private String descricao;
	@Min(value = 1, message = "{campo.quantidade-produto.invalido}")
	private Integer quantidade;
	@PositiveOrZero(message = "{campo.valor-produto.invalido}")
	private BigDecimal valor;
}
