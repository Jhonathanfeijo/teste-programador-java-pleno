package com.compayz.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.compayz.domain.exception.produto.ProdutoNotFoundException;
import com.compayz.domain.produto.DadosAtualizacaoProduto;
import com.compayz.domain.produto.DadosCadastroProduto;
import com.compayz.domain.produto.InfoProduto;
import com.compayz.domain.produto.Produto;
import com.compayz.domain.produto.ProdutoMapper;
import com.compayz.domain.produto.ProdutoRepository;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(value = "*")
@RequestMapping("/produto")
public class ProdutoController {

	@Autowired
	private ProdutoRepository produtoRepository;

	@Autowired
	private ProdutoMapper produtoMapper;

	@PostMapping
	@Transactional
	public ResponseEntity cadastrarProduto(@RequestBody @Valid DadosCadastroProduto dados,
			UriComponentsBuilder builder) {
		Produto produto = produtoMapper.toProduto(dados);
		produto = produtoRepository.save(produto);

		URI uri = builder.path("/produto/{id}").buildAndExpand(produto.getId()).toUri();

		InfoProduto infoProduto = produtoMapper.toInfoProduto(produto);
		return ResponseEntity.created(uri).body(infoProduto);
	}

	@GetMapping("/{id}")
	public ResponseEntity obterInfoProdutoPorId(@PathVariable("id") Long idProduto) {
		Produto produto = obterProduto(idProduto);
		InfoProduto infoProduto = produtoMapper.toInfoProduto(produto);
		return ResponseEntity.ok(infoProduto);
	}

	@GetMapping
	public ResponseEntity<Page<InfoProduto>> obterProdutos(@PageableDefault Pageable paginacao) {
		Page<InfoProduto> pagina = produtoRepository.findAllByAtivoTrue(paginacao).map(produto -> {
			return produtoMapper.toInfoProduto(produto);
		});
		return ResponseEntity.ok().body(pagina);
	}

	@PutMapping("/{id}")
	@Transactional
	public ResponseEntity atualizarProduto(@PathVariable("id") Long idProduto,
			@RequestBody @Valid DadosAtualizacaoProduto dados) {
		Produto produto = obterProduto(idProduto);
		produto.atualizar(dados);
		InfoProduto infoProduto = produtoMapper.toInfoProduto(produto);
		return ResponseEntity.ok().body(infoProduto);
	}

	@DeleteMapping("/{id}")
	@Transactional
	public ResponseEntity desativarProduto(@PathVariable("id") Long idProduto) {
		Produto produto = obterProduto(idProduto);
		produto.desativar();
		return ResponseEntity.noContent().build();
	}

	@PatchMapping("/{id}")
	@Transactional
	public ResponseEntity reativarProduto(@PathVariable("id") Long idProduto) {
		Produto produto = obterProduto(idProduto);
		produto.ativar();
		return ResponseEntity.ok().build();
	}

	private Produto obterProduto(Long id) {
		if (!produtoRepository.existsById(id))
			throw new ProdutoNotFoundException();
		return produtoRepository.getReferenceById(id);
	}
}
