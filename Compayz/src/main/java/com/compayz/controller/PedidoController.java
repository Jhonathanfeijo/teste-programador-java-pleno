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

import com.compayz.domain.pedido.DadosCadastroPedido;
import com.compayz.domain.pedido.InfoPedido;
import com.compayz.domain.pedido.Pedido;
import com.compayz.domain.pedido.PedidoMapper;
import com.compayz.domain.pedido.PedidoRepository;
import com.compayz.domain.pedido.PedidoService;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/pedido")
public class PedidoController {

	@Autowired
	private PedidoService pedidoService;

	@PostMapping
	@Transactional
	public ResponseEntity cadastrarPedido(@RequestBody @Valid DadosCadastroPedido dados, UriComponentsBuilder builder) {
		InfoPedido infoPedido = pedidoService.registrarPedido(dados);
		URI uri = builder.path("/pedido/{id}").buildAndExpand(infoPedido.getId()).toUri();
		return ResponseEntity.created(uri).body(infoPedido);
	}

	@GetMapping("/{id}")
	public ResponseEntity obterInfoPedido(@PathVariable("id") Long id) {
		InfoPedido infoPedido = pedidoService.obterInfoPedidoPorId(id);
		return ResponseEntity.ok(infoPedido);
	}
}
