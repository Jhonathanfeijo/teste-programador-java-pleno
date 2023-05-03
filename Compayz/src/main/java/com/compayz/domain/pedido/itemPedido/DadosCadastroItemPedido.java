package com.compayz.domain.pedido.itemPedido;

import jakarta.validation.constraints.NotNull;

public record DadosCadastroItemPedido(@NotNull Integer quantidade, @NotNull Long idProduto) {

}
