package com.compayz.domain.pedido;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import com.compayz.domain.pedido.itemPedido.InfoItemPedido;
import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class InfoPedido {

	private Long id;
	private String descricao;
	@JsonFormat(pattern = "dd/MM/yyyy HH:mm")
	private LocalDateTime dataEmissao;
	private BigDecimal valorTotal;
	private List<InfoItemPedido> itensPedido;
}
