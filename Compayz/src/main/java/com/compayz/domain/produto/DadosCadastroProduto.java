package com.compayz.domain.produto;

import java.math.BigDecimal;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DadosCadastroProduto {
	@NotBlank
	private String descricao;
	@NotNull
	private Long quantidade;
	@NotNull
	private BigDecimal valor;

}
