package com.compayz.domain.cliente;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

	public Page<Cliente> findAllByAtivoTrue(Pageable paginacao);

	public boolean existsByCpf(String cpf);

	public boolean existsByEmail(String email);

}
