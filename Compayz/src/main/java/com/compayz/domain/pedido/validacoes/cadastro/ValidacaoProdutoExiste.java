package com.compayz.domain.pedido.validacoes.cadastro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.compayz.domain.exception.produto.ProdutoNotFoundException;
import com.compayz.domain.pedido.DadosCadastroPedido;
import com.compayz.domain.produto.ProdutoRepository;

@Component
public class ValidacaoProdutoExiste implements ValidacaoRegistrarPedido {

	@Autowired
	private ProdutoRepository produtoRepository;

	@Override
	public void validar(DadosCadastroPedido dados) {
		dados.getItensPedido().forEach(item -> {
			boolean existeProduto = produtoRepository.existsById(item.getIdProduto());
			if (!existeProduto)
				throw new ProdutoNotFoundException();
		});
	}
}
