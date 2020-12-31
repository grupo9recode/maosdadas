create database maosdadas;
use maosdadas;

create table usuarios(
id_usuarios int auto_increment,
nome varchar (50),
sobrenome varchar (50),
email varchar (100),
senha varchar (50),
primary key (id_usuarios)
);

select * from usuarios;