package com.compayz.domain.pedido.itemPedido;

import java.math.BigDecimal;

import com.compayz.domain.pedido.Pedido;
import com.compayz.domain.produto.Produto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "ItemPedido")
@Table(name = "item_pedido")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class ItemPedido {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "id_pedido")
	private Pedido pedido;
	@ManyToOne
	@JoinColumn(name = "id_produto")
	private Produto produto;
	private Integer quantidade;
	private BigDecimal valorItem;

	public ItemPedido(Produto produto, Integer quantidade) {
		this.produto = produto;
		this.quantidade = quantidade;
		this.valorItem = produto.getValor().multiply(new BigDecimal(quantidade));
	}
}
