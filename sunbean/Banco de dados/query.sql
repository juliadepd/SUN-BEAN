create table usuario (
idUsuario int primary key identity(1,1),
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
idPlantacao int primary key identity(10,1),
nomePlantaca varchar(45),
cep char(8),
numero int,
qtdHequitares int);

-- tabela sensor
create table sensor (
idSensor int primary key identity(100,1),
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
idMedida int primary key identity(200,1),
temperatura decimal,
umidade decimal,
dthora datetime,
fkSensor int,
fkPlantacao int,
foreign key (fkPlantacao) references plantacao(idPlantacao),
foreign key (fkSensor) references sensor(idSensor));