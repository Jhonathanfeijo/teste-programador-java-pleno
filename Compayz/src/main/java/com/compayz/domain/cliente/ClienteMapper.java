package com.compayz.domain.cliente;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ClienteMapper {

	@Mapping(target = "id", ignore = true)
	public Cliente toCliente(DadosCadastroCliente dados);

	public InfoCliente toInfoCliente(Cliente cliente);
}
