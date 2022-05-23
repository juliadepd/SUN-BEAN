create database sunbean;

use sunbean;

-- criação das tabelas 
-- tabela usuario
create table usuario (
idUsuario int primary key auto_increment,
nome_rs varchar(45),
cpf_cnpj varchar(14),
telefone varchar(11),
email varchar(45),
senha varchar(45),
fkTitular int,
foreign key(fkTitular) references usuario(idUsuario));

-- tabela plantação
create table Plantacao(
idPlantacao int primary key auto_increment,
nome varchar(45), 
cep char(8),
numero int,
qtdHectares int);

-- tabela sensor
create table sensor (
idSensor int primary key auto_increment,
fkPlantacao int,
foreign key (fkPlantacao) references plantacao(idPlantacao));

-- tebela associativa
create table cliente_plantacao(
idCliente_Plant int auto_increment,
fkUsuario int,
fkPlantacao int,
primary key (idCliente_Plant, fkUsuario, fkPlantacao));

-- tabela medida
create table medida(
idMedida int primary key auto_increment,
temperatura decimal,
umidade decimal,
data_hora datetime,
fkSensor int,
fkPlantacao int,
foreign key (fkPlantacao) references plantacao(idPlantacao),
foreign key (fkSensor) references sensor(idSensor));



