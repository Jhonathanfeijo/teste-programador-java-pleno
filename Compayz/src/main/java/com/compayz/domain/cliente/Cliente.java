package com.compayz.domain.cliente;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity(name = "Cliente")
@Table(name = "cliente")
@Data
public class Cliente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private String cpf;
	private String telefone;
	private String email;
	private boolean ativo;
	
	public Cliente() {
		this.ativo = true;
	}

	public void atualizar(DadosAtualizacaoCliente dados) {
		if (dados.getNome() != null)
			this.nome = dados.getNome();
		if (dados.getEmail() != null)
			this.email = dados.getEmail();
		if (dados.getTelefone() != null)
			this.telefone = dados.getTelefone();
	}
	
	public void desativar() {
		this.ativo = false;
	}
	
	public void  ativar() {
		this.ativo = true;
	}
}
