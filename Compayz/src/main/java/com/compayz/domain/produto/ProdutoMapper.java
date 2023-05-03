package com.compayz.domain.produto;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProdutoMapper {
	
	@Mapping(target = "id", ignore = true)
	Produto toProduto(DadosCadastroProduto dados);
	
	InfoProduto toInfoProduto(Produto produto);
}
