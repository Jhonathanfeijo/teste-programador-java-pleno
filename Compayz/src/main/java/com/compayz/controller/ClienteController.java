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

import com.compayz.domain.cliente.Cliente;
import com.compayz.domain.cliente.ClienteMapper;
import com.compayz.domain.cliente.ClienteRepository;
import com.compayz.domain.cliente.DadosCadastroCliente;
import com.compayz.domain.cliente.InfoCliente;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

	@Autowired
	private ClienteRepository clienteRepository;

	@Autowired
	private ClienteMapper clienteMapper;

	@PostMapping
	@Transactional
	public ResponseEntity cadastrarCliente(@RequestBody @Valid DadosCadastroCliente dados,
			UriComponentsBuilder builder) {
		Cliente cliente = clienteMapper.toCliente(dados);
		cliente = clienteRepository.save(cliente);
		URI uri = builder.path("/cliente/{id}").buildAndExpand(cliente.getId()).toUri();
		InfoCliente infoCliente = clienteMapper.toInfoCliente(cliente);
		return ResponseEntity.created(uri).body(infoCliente);
	}

	@GetMapping("/{id}")
	public ResponseEntity obterInfoClientePorId(@PathVariable("id") Long id) {
		Cliente cliente = clienteRepository.getReferenceById(id);
		InfoCliente infoCliente = clienteMapper.toInfoCliente(cliente);
		return ResponseEntity.ok(infoCliente);
	}

}
