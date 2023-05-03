package com.compayz.domain.pedido;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import com.compayz.domain.pedido.itemPedido.ItemPedido;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "Pedido")
@Table(name = "pedido")
@EqualsAndHashCode(of = "id")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Pedido {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private LocalDateTime dataEmissao;
	private String descricao;
	private BigDecimal valorTotal;
	@OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL)
	private List<ItemPedido> itensPedido;

	public Pedido(List<ItemPedido> itens, String descricao) {
		this.id = null;
		this.descricao = descricao;
		this.dataEmissao = LocalDateTime.now();
		this.itensPedido = atribuirPedidoEmItens(itens);
		calcularValorTotalPedido(this.itensPedido);
	}

	public List<ItemPedido> atribuirPedidoEmItens(List<ItemPedido> itens) {
		itens.forEach(item -> {
			item.setPedido(this);
		});
		return itens;
	}

	public void calcularValorTotalPedido(List<ItemPedido> itens) {
		this.valorTotal = new BigDecimal("0.0");
		itens.forEach(item -> {
			this.valorTotal = this.valorTotal.add(item.getValorItem());
		});
	}
}
