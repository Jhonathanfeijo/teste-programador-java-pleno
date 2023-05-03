package com.compayz.domain.pedido;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.compayz.domain.pedido.itemPedido.ItemPedido;
import com.compayz.domain.pedido.validacoes.ValidacaoRegistrarPedido;
import com.compayz.domain.produto.Produto;
import com.compayz.domain.produto.ProdutoRepository;

@Service
public class PedidoService {

	@Autowired
	private ProdutoRepository produtoRepository;

	@Autowired
	private PedidoRepository pedidoRepository;

	private List<ValidacaoRegistrarPedido> validacoesRegistroPedido;

	public void registrarPedido(DadosCadastroPedido dados) {

		validacoesRegistroPedido.forEach(validacao -> validacao.validar(dados));

		List<ItemPedido> itensPedido = obterListaPedido(dados);
		Pedido pedido = new Pedido(itensPedido, dados.descricao());
		pedido = pedidoRepository.save(pedido);

	}

	private List<ItemPedido> obterListaPedido(DadosCadastroPedido dados) {

		return dados.itens().stream().map(dadosItem -> {
			Produto produto = produtoRepository.getReferenceById(dadosItem.idProduto());
			produto.descontarEstoque(dadosItem.quantidade());
			ItemPedido itemPedido = new ItemPedido(produto, dadosItem.quantidade());
			return itemPedido;

		}).toList();
	}
}
