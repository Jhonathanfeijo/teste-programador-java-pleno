package com.compayz.domain.pedido.validacoes.cadastro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.compayz.domain.exception.produto.ProdutoNotAvailableException;
import com.compayz.domain.pedido.DadosCadastroPedido;
import com.compayz.domain.produto.ProdutoRepository;

@Component
public class ValidacaoProdutoAtivo implements ValidacaoRegistrarPedido {

	@Autowired
	private ProdutoRepository produtoRepository;
	
	@Autowired
	private ValidacaoProdutoExiste validadorProdutoExiste;

	@Override
	public void validar(DadosCadastroPedido dados) {

		validadorProdutoExiste.validar(dados);

		dados.getItensPedido().forEach(item -> {
			var produtoAtivo = produtoRepository.getReferenceById(item.getIdProduto()).isAtivo();
			if (!produtoAtivo)
				throw new ProdutoNotAvailableException();
		});
	}
}
