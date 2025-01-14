package com.compayz.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.compayz.domain.exception.cliente.ClienteNotAvailableException;
import com.compayz.domain.exception.cliente.ClienteNotFoundException;
import com.compayz.domain.exception.cliente.DuplicateClienteException;
import com.compayz.domain.exception.pedido.PedidoNotFoundException;
import com.compayz.domain.exception.produto.ProdutoNotAvailableException;
import com.compayz.domain.exception.produto.ProdutoNotFoundException;

@RestControllerAdvice
public class ControllerAdvice {

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity handleValidationException(MethodArgumentNotValidException ex) {
		BindingResult result = ex.getBindingResult();
		List<FieldError> fieldErrors = result.getFieldErrors();
		String mensagemErro = obterMensagemPadraoValidationException(fieldErrors);
		return ResponseEntity.badRequest().body(mensagemErro);
	}
	
	@ExceptionHandler(ClienteNotFoundException.class)
	public ResponseEntity handleClienteNotFoundException(ClienteNotFoundException ex) {
		return ResponseEntity.notFound().build();
	}

	@ExceptionHandler(ClienteNotAvailableException.class)
	public ResponseEntity handleClienteNotAvailableException(ClienteNotAvailableException ex) {
		return ResponseEntity.badRequest().body(ex.getMessage());
	}
	@ExceptionHandler(DuplicateClienteException.class)
	public ResponseEntity handleDuplicateClienteException(DuplicateClienteException ex) {
		return ResponseEntity.badRequest().body(ex.getMessage());
	}

	@ExceptionHandler(ProdutoNotFoundException.class)
	public ResponseEntity handleProdutoNotFoundException(ProdutoNotFoundException ex) {
		return ResponseEntity.notFound().build();
	}

	@ExceptionHandler(ProdutoNotAvailableException.class)
	public ResponseEntity handleProdutoNotAvailableException(ProdutoNotAvailableException ex) {
		return ResponseEntity.badRequest().body(ex.getMessage());
	}

	@ExceptionHandler(PedidoNotFoundException.class)
	public ResponseEntity handlePedidoNotFoundException(PedidoNotFoundException ex) {
		return ResponseEntity.notFound().build();
	}


	private String obterMensagemPadraoValidationException(List<FieldError> errors) {
		String mensagemErro = "";
		for (FieldError fieldError : errors)
			mensagemErro += fieldError.getDefaultMessage() + "\n";
		return mensagemErro;
	}
}
