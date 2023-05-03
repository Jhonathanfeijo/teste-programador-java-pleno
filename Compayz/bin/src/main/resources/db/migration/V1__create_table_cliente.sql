CREATE TABLE cliente(
	id bigint not null auto_increment,
	nome varchar(150) not null,
	cpf varchar(15) not null, 
	telefone varchar(20) not null,
	email varchar(50) not null,
	primary key (id)
)
