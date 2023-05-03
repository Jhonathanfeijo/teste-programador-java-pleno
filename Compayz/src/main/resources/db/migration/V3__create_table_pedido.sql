create table pedido(
id bigint not null auto_increment,
data_emissao datetime not null,
descricao varchar (250),
valor_total decimal,
primary key(id)
)