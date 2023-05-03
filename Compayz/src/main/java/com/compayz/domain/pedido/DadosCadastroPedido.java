package com.compayz.domain.pedido;

import java.util.List;

import com.compayz.domain.pedido.itemPedido.DadosCadastroItemPedido;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class DadosCadastroPedido {

	private String descricao;
	@Valid
	@NotNull
	private List<DadosCadastroItemPedido> itensPedido;
}
