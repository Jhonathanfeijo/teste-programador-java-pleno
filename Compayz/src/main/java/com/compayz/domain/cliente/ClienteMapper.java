package com.compayz.domain.cliente;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ClienteMapper {

	ClienteMapper instance = Mappers.getMapper(ClienteMapper.class);

	@Mapping(target = "id", ignore = true)
	Cliente toCliente(DadosCadastroCliente dados);

	InfoCliente toInfoCliente(Cliente cliente);
}
