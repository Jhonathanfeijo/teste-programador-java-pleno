package com.compayz.domain.pedido.itemPedido;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ItemPedidoMapper {

	@Mapping(source = "item.produto.descricao", target = "descricao")
	@Mapping(source = "item.produto.valor", target = "valorProduto")
	 public List<InfoItemPedido> toInfoItemPedidoList(List<ItemPedido> item);
	
	@Mapping(source = "item.produto.descricao", target = "descricao")
	@Mapping(source = "item.produto.valor", target = "valorProduto")
	public InfoItemPedido toInfoItemPedido(ItemPedido item);

}
