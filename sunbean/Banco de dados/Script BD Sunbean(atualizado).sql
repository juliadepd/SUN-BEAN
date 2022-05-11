create database sunbean;

use sunbean;

-- criação das tabelas 
-- tabela usuario
create table usuario (
idUsuario int primary key auto_increment,
nome_Ra varchar(14),
cpf_cnpj varchar(14),
telefone varchar(11),
email varchar(45),
senha varchar(45),
confirma_senha varchar(45),
fkTitular int,
foreign key(fkTitular) references usuario(idUsuario));

-- tabela plantação
create table plantacao(
idPlantacao int primary key auto_increment,
cep char(8),
numero int,
qtdHequitares int,
qtdSensores int);

-- tabela sensor
create table sensor (
idSensor int primary key auto_increment,
fkPlantacao int,
foreign key (fkPlantacao) references plantacao(idPlantacao));

-- tebela associativa
create table chamado(
fkUsuario int,
fkPlantacao int,
dt_acesso varchar(45),
atividade varchar(45),
foreign key (fkUsuario) references usuario(idUsuario),
foreign key (fkPlantacao) references plantacao(idPlantacao));

-- tabela medida
create table medida(
idMedida int primary key auto_increment,
temperatura decimal,
umidade decimal,
dthora datetime,
fkSensor int,
fkPlantacao int,
foreign key (fkPlantacao) references plantacao(idPlantacao),
foreign key (fkSensor) references sensor(idSensor));



