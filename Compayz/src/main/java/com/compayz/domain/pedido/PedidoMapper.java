package com.compayz.domain.pedido;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.compayz.domain.pedido.itemPedido.InfoItemPedido;
import com.compayz.domain.pedido.itemPedido.ItemPedido;

@Mapper(componentModel = "spring")
public interface PedidoMapper {

	public InfoPedido toInfoPedido(Pedido pedido);

	public List<InfoItemPedido> toInfoItemPedidoList(List<ItemPedido> itensPedido);

	@Mapping(source = "itemPedido.produto.descricao", target = "descricao")
	@Mapping(source = "itemPedido.produto.valor", target = "valorProduto")
	public InfoItemPedido toInfoItemPedido(ItemPedido itemPedido);

}
