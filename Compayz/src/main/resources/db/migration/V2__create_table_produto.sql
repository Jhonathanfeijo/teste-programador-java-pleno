create table produto(
id bigint not null auto_increment,
descricao varchar(150) not null,
quantidade bigint not null,
valor decimal(10,2) not null,
primary key (id)
)