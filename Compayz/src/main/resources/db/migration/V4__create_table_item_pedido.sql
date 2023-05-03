create table item_pedido(
id bigint not null auto_increment,
id_pedido bigint not null,
id_produto bigint not null,
quantidade int not null,
valor_item decimal not null,
primary key(id),
constraint fk_item_pedido_id_produto foreign key (id_produto) references produto (id),
constraint fk_item_pedido_id_pedido foreign key (id_pedido) references pedido (id)
)