CREATE TABLE cliente(
	id bigint not null auto_increment,
	nome varchar(150) not null,
	cpf varchar(15) unique not null, 
	telefone varchar(20) not null,
	email varchar(50) unique not null,
	primary key (id)
)
