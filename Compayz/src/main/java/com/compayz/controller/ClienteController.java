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

import com.compayz.domain.cliente.Cliente;
import com.compayz.domain.cliente.ClienteMapper;
import com.compayz.domain.cliente.ClienteRepository;
import com.compayz.domain.cliente.DadosAtualizacaoCliente;
import com.compayz.domain.cliente.DadosCadastroCliente;
import com.compayz.domain.cliente.InfoCliente;
import com.compayz.domain.exception.cliente.ClienteNotFoundException;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/cliente")
@CrossOrigin(value = "*")
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

	@PutMapping("/{id}")
	@Transactional
	public ResponseEntity atualizarCliente(@PathVariable("id") Long idCliente,
			@RequestBody @Valid DadosAtualizacaoCliente dados) {
		Cliente cliente = obterCliente(idCliente);
		cliente.atualizar(dados);
		InfoCliente infoCliente = clienteMapper.toInfoCliente(cliente);
		return ResponseEntity.ok().body(infoCliente);
	}

	@DeleteMapping("/{id}")
	@Transactional
	public ResponseEntity desativarCliente(@PathVariable("id") Long idCliente) {
		Cliente cliente = obterCliente(idCliente);
		cliente.desativar();
		return ResponseEntity.noContent().build();
	}

	@PatchMapping("/{id}")
	@Transactional
	public ResponseEntity reativarCliente(@PathVariable("id") Long idCliente) {
		Cliente cliente = obterCliente(idCliente);
		cliente.ativar();
		InfoCliente infoCliente = clienteMapper.toInfoCliente(cliente);
		return ResponseEntity.ok().body(infoCliente);
	}

	@GetMapping("/{id}")
	public ResponseEntity obterInfoClientePorId(@PathVariable("id") Long idCliente) {
		Cliente cliente = obterCliente(idCliente);
		InfoCliente infoCliente = clienteMapper.toInfoCliente(cliente);
		return ResponseEntity.ok(infoCliente);
	}
	
	@GetMapping
	public ResponseEntity<Page<InfoCliente>> obterClientes(@PageableDefault(size = 10) Pageable paginacao) {
		Page<InfoCliente> pagina = clienteRepository.findAllByAtivoTrue(paginacao).map(cliente -> {
			return clienteMapper.toInfoCliente(cliente);
		});
		return ResponseEntity.ok(pagina);
	}

	private Cliente obterCliente(Long id) {
		if (!clienteRepository.existsById(id))
			throw new ClienteNotFoundException();
		return clienteRepository.getReferenceById(id);
	}
}
