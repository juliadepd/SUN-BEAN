create database sunbean;

use sunbean;

create table cliente (
idCliente int primary key auto_increment,
nomeCliente varchar(45),
email varchar(45) unique,
senha varchar(45),
CPF char(14) unique,
CNPJ char(18) unique,
telCelular char(12) unique,
dataCadastro date
);

create table plantacao (
idPlantacao int primary key auto_increment,
UF char(2),
cidade varchar(45),
qtdSensores int,
qtdHectares double,
fkCliente int,
foreign key (fkCliente) references cliente (idCliente)
);

create table sensor (
idSensor int primary key auto_increment,
tipoSensor varchar(11),
tempIdeal double,
umiIdeal double,
fkPlantacao int,
foreign key (fkPlantacao) references plantacao (idPlantacao)
);

create table dados (
idDados int primary key auto_increment,
temperatura double,
umidade double,
diaHora datetime,
fkSensor int,
foreign key (fkSensor) references sensor (idSensor)
);

insert into cliente values 
(NULL, 'Acclimate', 'acclimate@hotmail.com', 'senhadaacclimate123', NULL, '90.400.888/0001-42', '1193262-1547', '2022-02-12'),
(NULL, 'Boa Safra', 'boasafra@hotmail.com', 'boasafracolheita648', NULL, '28.738.315/0001-52', '1199167-2973', '2022-04-08');

insert into plantacao values
(NULL, 'MG', 'Viçosa', 1, 4, 1),
(NULL, 'MS', 'Três Lagoas', 2, 8, 1),
(NULL, 'MT', 'Sorriso', 1, 4, 2),
(NULL, 'MT', 'Sorriso', 1, 2, 1);

insert into sensor values
(NULL, 'DHT11', 30, 45, 1),
(NULL, 'DHT11', 30, 45, 2),
(NULL, 'DHT11', 30, 45, 2),
(NULL, 'DHT11', 30, 45, 3),
(NULL, 'DHT11', 30, 45, 4);

insert into dados values
(NULL, 27, 43, '2022-04-13 12:53:20', 1),
(NULL, 28, 45, '2022-04-13 12:53:20', 2),
(NULL, 28, 46, '2022-04-13 12:53:20', 3),
(NULL, 30, 48, '2022-04-13 12:53:20', 4),
(NULL, 32, 40, '2022-04-13 12:53:20', 5);

select * from cliente;
select * from plantacao;
select * from sensor;
select * from dados;

select * from dados join sensor on fkSensor = idSensor join plantacao on fkPlantacao = idPlantacao join cliente on fkCliente = idCliente;