package com.compayz.domain.pedido;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface PedidoMapper {
	
	
	InfoPedido toInfoPedido(Pedido pedido);
}
