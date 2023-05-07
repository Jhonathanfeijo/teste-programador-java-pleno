package com.compayz.domain.pedido;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import com.compayz.domain.cliente.Cliente;
import com.compayz.domain.pedido.itemPedido.ItemPedido;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "Pedido")
@Table(name = "pedido")
@NoArgsConstructor
@Data
public class Pedido {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "id_cliente")
	private Cliente cliente;
	private String descricao;
	@OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL)
	private List<ItemPedido> itensPedido;
	private BigDecimal valorTotal;
	private LocalDateTime dataEmissao;

	public Pedido(Long id, Cliente cliente, String descricao, List<ItemPedido> itensPedido, BigDecimal valorTotal,
			LocalDateTime dataEmissao) {
		this.cliente = cliente;
		this.descricao = descricao;
		this.itensPedido = atribuirPedidoEmItens(itensPedido);
		this.valorTotal = calcularValorTotalPedido(itensPedido);
		this.dataEmissao = dataEmissao;
	}

	private List<ItemPedido> atribuirPedidoEmItens(List<ItemPedido> itensPedido) {
		if (itensPedido != null) {
			itensPedido.forEach(item -> {
				item.setPedido(this);
			});
			return itensPedido;
		}
		return null;
	}

	public BigDecimal calcularValorTotalPedido(List<ItemPedido> itensPedido) {
		if (itensPedido == null)
			return null;
		BigDecimal valorTotal = new BigDecimal("0.0");
		for (ItemPedido item : itensPedido) {
			valorTotal = valorTotal.add(item.getValorItem());
		}
		return valorTotal;
	}
}
