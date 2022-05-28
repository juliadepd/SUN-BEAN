create database sunbean;

use sunbean;

-- criação das tabelas 
-- tabela usuario
CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome_rs VARCHAR(45),
    cpf_cnpj VARCHAR(14),
    telefone VARCHAR(11),
    email VARCHAR(45),
    senha VARCHAR(45),
    fkTitular INT,
    FOREIGN KEY (fkTitular)
        REFERENCES usuario (idUsuario)
);

insert into usuario (nome_rs, cpf_cnpj, telefone, email, senha, fkTitular) values
('Pedro', 47467801814, 11983840686, 'pedro@ht.com', 123, null);

update usuario set senha = 12345678 where idUsuario = 1;
-- tabela plantação
create table Plantacao(
idPlantacao int primary key auto_increment,
nome varchar(45), 
cep char(8),
numero int,
qtdHectares int);

insert into Plantacao (nome, cep, numero, qtdHectares) values
('Pedro', '12345678', 1, 20);

-- tabela sensor
create table sensor (
idSensor int primary key auto_increment,
fkPlantacao int,
foreign key (fkPlantacao) references plantacao(idPlantacao));

insert into sensor values
(null, 1);

-- tebela associativa
create table cliente_plantacao(
idCliente_Plant int auto_increment,
fkUsuario int,
fkPlantacao int,
primary key (idCliente_Plant, fkUsuario, fkPlantacao));

insert into cliente_plantacao(fkUsuario, fkPlantacao) values
(1, 1);

-- tabela medida
create table medida (
	idMedida INT PRIMARY KEY AUTO_INCREMENT,
	umidade DECIMAL,
	temperatura DECIMAL,
	data_hora DATETIME default current_timestamp,
    fkSensor INT,
    fkPlantacao INT,
    FOREIGN KEY (fkPlantacao) REFERENCES plantacao (idPlantacao),
    FOREIGN KEY (fkSensor) REFERENCES sensor (idSensor)
);

insert into medida(umidade, temperatura, fkSensor, fkPlantacao) values
(33, 22, 1, 1),
(34, 25, 1, 1),
(39, 34, 1, 1),
(40, 15, 1, 1),
(30, 13, 1, 1),
(12, 27, 1, 1);




