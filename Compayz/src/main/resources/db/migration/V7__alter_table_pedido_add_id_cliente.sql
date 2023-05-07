alter table pedido add id_cliente bigint not null;
alter table pedido add constraint fk_pedido_id_cliente foreign key (id_cliente) references cliente (id);