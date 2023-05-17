package com.compayz.domain.produto;

import java.math.BigDecimal;

import com.compayz.domain.exception.produto.ProdutoNotAvailableException;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity(name = "Produto")
@Table(name = "produto")
@Data
public class Produto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String descricao;
	private Integer quantidade;
	private BigDecimal valor;
	private boolean ativo;

	public Produto() {
		this.ativo = true;
	}

	public void atualizar(DadosAtualizacaoProduto dados) {
		if (dados.getDescricao() != null)
			this.descricao = dados.getDescricao();
		if (dados.getQuantidade() != null)
			this.quantidade = dados.getQuantidade();
		if (dados.getValor() != null)
			this.valor = dados.getValor();
	}

	public void descontarEstoque(Integer quantidade) {
		this.quantidade -= quantidade;
		if(this.quantidade < 0) {
			throw new ProdutoNotAvailableException();
		}
	}

	public void adicionarEstoque(Integer quantidade) {
		this.quantidade += quantidade;
	}

	public void desativar() {
		this.ativo = false;
	}
	
	public void ativar() {
		this.ativo = true;
	}
}
