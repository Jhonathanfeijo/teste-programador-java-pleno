package com.compayz.domain.produto;

import java.math.BigDecimal;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DadosCadastroProduto {
	
	@NotBlank(message = "{campo.descricao-produto.obrigatorio}")
	private String descricao;
	@Min(value = 1)
	@NotNull(message = "{campo.quantidade-produto.obrigatorio}" )
	private Long quantidade;
	@PositiveOrZero(message = "{campo.valor-produto.invalido}")
	@NotNull(message = "{campo.valor-produto.obrigatorio}")
	private BigDecimal valor;
}
