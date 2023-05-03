package com.compayz.domain.pedido.validacoes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.compayz.domain.pedido.DadosCadastroPedido;
import com.compayz.domain.produto.ProdutoRepository;

@Component
public class ValidacaoProdutoExiste implements ValidacaoRegistrarPedido {

	@Autowired
	private ProdutoRepository produtoRepository;
	
	@Override
	public void validar(DadosCadastroPedido dados) {
		dados.getItensPedido().forEach(item ->{
			boolean existeProduto = produtoRepository.existsById(item.idProduto());
			if(!existeProduto)
				throw new RuntimeException("Produto não existe");
		});
		
	}

}