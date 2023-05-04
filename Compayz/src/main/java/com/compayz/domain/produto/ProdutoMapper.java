package com.compayz.domain.produto;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProdutoMapper {

	@Mapping(target = "id", ignore = true)
	public Produto toProduto(DadosCadastroProduto dados);

	public InfoProduto toInfoProduto(Produto produto);
}
