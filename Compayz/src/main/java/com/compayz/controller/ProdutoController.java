package com.compayz.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.compayz.domain.produto.DadosCadastroProduto;
import com.compayz.domain.produto.InfoProduto;
import com.compayz.domain.produto.Produto;
import com.compayz.domain.produto.ProdutoMapper;
import com.compayz.domain.produto.ProdutoRepository;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

	@Autowired
	private ProdutoRepository produtoRepository;

	@Autowired
	private ProdutoMapper produtoMapper;

	@PostMapping
	@Transactional
	public ResponseEntity cadastrarProduto(@RequestBody @Valid DadosCadastroProduto dados, UriComponentsBuilder builder) {
		Produto produto = produtoMapper.toProduto(dados);
		produto = produtoRepository.save(produto);
		URI uri = builder.path("/produto/{id}").buildAndExpand(produto.getId()).toUri();
		InfoProduto infoProduto = produtoMapper.toInfoProduto(produto);
		return ResponseEntity.created(uri).body(infoProduto);
	}

	@GetMapping("/{id}")
	public ResponseEntity obterInfoProdutoPorId(@PathVariable("id") Long id) {
		Produto produto = produtoRepository.getReferenceById(id);
		InfoProduto infoProduto = produtoMapper.toInfoProduto(produto);
		return ResponseEntity.ok(produto);
	}
}
