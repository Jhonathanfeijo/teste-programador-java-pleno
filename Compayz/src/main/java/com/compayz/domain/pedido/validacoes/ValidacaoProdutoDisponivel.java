package com.compayz.domain.pedido.validacoes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.compayz.domain.pedido.DadosCadastroPedido;
import com.compayz.domain.produto.Produto;
import com.compayz.domain.produto.ProdutoRepository;

@Component
public class ValidacaoProdutoDisponivel implements ValidacaoRegistrarPedido {

	@Autowired
	private ProdutoRepository produtoRepository;

	@Override
	public void validar(DadosCadastroPedido dados) {
		dados.getItensPedido().forEach(item -> {
			Produto produto = produtoRepository.getReferenceById(item.getIdProduto());
			boolean produtoDisponivel = item.getQuantidade() <= produto.getQuantidade();
			if (!produtoDisponivel)
				throw new RuntimeException("Produto não disponível");
		});
	}
}
