package com.compayz.domain.produto;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class InfoProduto{
	private Long id;
	private String descricao;
	private BigDecimal valor;
	private Integer quantidade;
}
