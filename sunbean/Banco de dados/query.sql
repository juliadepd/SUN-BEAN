create table usuario (
idUsuario int primary key identity,
nome_Ra varchar(45),
cpf_cnpj varchar(14),
telefone varchar(11),
email varchar(45),
senha varchar(45),
confirma_senha varchar(45),
fkTitular int,
foreign key(fkTitular) references usuario(idUsuario));

-- tabela plantação
create table plantacao(
idPlantacao int primary key identity,
nome varchar(45),
cep char(8),
numero int,
qtdHectares int);

-- tabela sensor
create table sensor (
idSensor int primary key identity,
fkPlantacao int,
foreign key (fkPlantacao) references plantacao(idPlantacao));

-- tebela associativa
create table cliente_plantacao(
fkUsuario int,
fkPlantacao int identity,
foreign key (fkUsuario) references usuario(idUsuario),
foreign key (fkPlantacao) references plantacao(idPlantacao),
primary key(fkUsuario,fkPlantacao)
);

-- tabela medida
create table medida(
idMedida int primary key identity,
temperatura decimal,
umidade decimal,
data_hora datetime default current_timestamp,
fkSensor int,
fkPlantacao int,
foreign key (fkPlantacao) references plantacao(idPlantacao),
foreign key (fkSensor) references sensor(idSensor));