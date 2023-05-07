package com.compayz.domain.pedido;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.compayz.domain.cliente.Cliente;
import com.compayz.domain.cliente.ClienteRepository;
import com.compayz.domain.exception.pedido.PedidoNotFoundException;
import com.compayz.domain.pedido.itemPedido.ItemPedido;
import com.compayz.domain.pedido.validacoes.cadastro.ValidacaoRegistrarPedido;
import com.compayz.domain.produto.Produto;
import com.compayz.domain.produto.ProdutoRepository;

@Service
public class PedidoService {

	@Autowired
	private ProdutoRepository produtoRepository;

	@Autowired
	private PedidoRepository pedidoRepository;

	@Autowired
	private PedidoMapper pedidoMapper;

	@Autowired
	private ClienteRepository clienteRepository;

	@Autowired
	private List<ValidacaoRegistrarPedido> validacoesRegistroPedido;

	public InfoPedido registrarPedido(DadosCadastroPedido dados) {

		validacoesRegistroPedido.forEach(validacao -> validacao.validar(dados));


		List<ItemPedido> itensPedido = obterListaPedido(dados);
		Cliente cliente = clienteRepository.findById(dados.getIdCliente()).get();
		Pedido pedido = new Pedido(null, cliente, dados.getDescricao(), itensPedido, null, LocalDateTime.now());
		pedido = pedidoRepository.save(pedido);

		return pedidoMapper.toInfoPedido(pedido);
	}

	public InfoPedido obterInfoPedidoPorId(Long id) {
		Pedido pedido = pedidoRepository.findById(id).orElseThrow(() -> new PedidoNotFoundException());
		InfoPedido infoPedido = pedidoMapper.toInfoPedido(pedido);
		return infoPedido;
	}

	private List<ItemPedido> obterListaPedido(DadosCadastroPedido dados) {
		return dados.getItensPedido().stream().map(dadosItem -> {
			Produto produto = produtoRepository.getReferenceById(dadosItem.getIdProduto());
			produto.descontarEstoque(dadosItem.getQuantidade());
			ItemPedido itemPedido = new ItemPedido(produto, dadosItem.getQuantidade());
			return itemPedido;

		}).toList();
	}
}
