
-- regra de negócio:

	-- A tabela usuário comporta tanto usuários titulares da conta como os secundários, que tem permissão para acessar os mesmos dados 
	-- através de um login diferente. O secundários possuem em sua fkTitular o id de seu usuário titular, enquanto os titulares propriamente ditos
	-- apresentam neste mesmo campo "null". 
	-- Desse modo, a tabela Usuário possui relação de recursividade. Seu id é referenciado nela mesma em forma de uma fk apelidada.

	-- A tabela de plantação não poderia ter relação de dependência com a tabela Usuário, pois assim presumiria-se que a plantação ou sensor 
	-- de um cliente dependeria de cada usuário vinculado para existir, o que não é o caso. a plantação do titular Emporio da Soja continua existindo 
	-- caso venhamos a excluir do banco o Marcos Baldin, um dos usuarios secundarios vinculados. 
    -- Relação 1 para N: uma plantação pode ter 1 ou muitos usuários cadastrados.

	-- Já a tabela sensor, possui relação de dependência com a tabela Sensores, pois sem plantação não há sensor conectado e em funcionamento.
    -- Da mesma forma, sem sensor não há medida alguma, por isso a relação de dependência nesse caso também.


create database SunBean;

use SunBean;

create table Plantacao (
idPlantacao int primary key auto_increment,
cep char(8),
numero int,
qtdHectares int,
qtdSensores int
);

insert into plantacao values 
(null, '02404010','225', 100, 50),
(null, '02344663','1025', 50 , 25),
(null, '08644432','11', 75, 20);

create table Usuario (
idUsuario int primary key auto_increment,
nome_rs varchar(45),
cpf_cnpj varchar(14) not null,
telefone char(11),
email varchar(50),
senha varchar(45),
confSenha varchar(45),
fkPlantacao int,
fkTitular int,
foreign key (fkTitular) references Usuario (idUsuario),
foreign key (fkPlantacao) references Plantacao (idPlantacao)
);

desc usuario;

insert into Usuario values 
(null,'Empório da Soja','19513382869529','11980144388','negocio@emporiosoja.com','SS245255!@','SS245255!@', 1, null),
(null,'Safra Century','24452682869523','11957247658','safra@century.com','Emp#2594','Emp#2594', 2, null),
(null,'Marcos Baldin','19513382869','12954916705','marcos.baldin@emporiosoja.com','MARCOS25041970','MARCOS25041970', 1, 1),
(null,'Barbara Ferrari','19713382860','92954916705','ba.ferrari@emporiosoja.com','BA2501955','BA2501955', 1, 1),
(null,'Sergio Ramos','52903134863','2199452462','sergio.ramos@outlook.com','@9644555210!','@9644555210!', 3, null),
(null,'Andreia Palmito','32903134860','2189453461','andreia.palmito@outlook.com','!641555210@','!641555210@', 2, 2);

select * from usuario;

-- selecionar usuários secundários e não secundários + titulares
select * from usuario left join usuario as titular on usuario.fkTitular = titular.idUsuario;

-- selecionar somente os usuarios secundários e seus titulares
select * from usuario join usuario as titular on usuario.fkTitular = titular.idUsuario;

-- selecionar nome dos secundarios, nome dos titulares, email dos secundarios, email do titulares
select usuario.nome_rs, titular.nome_rs as nomeTitular, usuario.email, titular.email from usuario 
join usuario as titular on usuario.fkTitular = titular.idUsuario;

-- selecionar nome do titular, nome do usuario, email e cep da plantação
select titular.nome_rs as nomeTitular, usuario.nome_rs, usuario.email, cep from usuario 
left join usuario as titular on usuario.fkTitular = titular.idUsuario join plantacao on fkOwner = Usuario.idUsuario;

-- selecionar todos os dados das plantações e seus respectivos usuários
select * from plantacao join usuario on idPlantacao = fkPlantacao;

create table Sensor (
idSensor int auto_increment,
fkPlantacao int ,
foreign key (fkPlantacao) references Plantacao (idPlantacao),
primary key (idSensor, fkPlantacao)
);

insert into sensor values 
(null, 1),
(null, 1),
(null, 1),
(null, 1),
(null, 2),
(null, 2),
(null, 3),
(null, 3),
(null, 3);

select * from sensor;

-- selecionar as plantacoes e os respectivos sensores e os usuarios correspondentes
select * from plantacao join sensor on idPlantacao = fkPlantacao join usuario left join usuario as titular on usuario.fkTitular = titular.idUsuario;

create table medida (
idMedida int auto_increment,
temp decimal,
umid decimal,
time datetime,
fkSensor int,
foreign key (fkSensor) references sensor (idSensor),
primary key (idMedida, fkSensor)
);

insert into medida values 
(null, 22, 70, '2022-05-04 09:05:10', 2),
(null, 24, 65 , '2022-05-04 10:05:10', 2),
(null, 25, 60, '2022-05-04 11:05:10', 2),
(null, 28, 45, '2022-05-04 09:05:10', 1);

select * from usuario join sensor on idUsuario = fkOwner join medida on idSensor = fkSensor;

insert into medida values 
(null, 23, 69, '2022-05-04 09:05:10', 3),
(null, 24, 64 , '2022-05-04 10:05:10', 3),
(null, 25, 59, '2022-05-04 11:05:10', 3);

-- selecionar os usuarios, o respectivo sensor, o id da medida, e as medidas (todas)
select nome_rs, idSensor, idMedida, temp, umid, time from usuario join plantacao on idPlantacao = fkPlantacao join sensor on 
sensor.fkPlantacao = idPlantacao join medida on idSensor = fkSensor;

-- sensores diferentes captam medidas diferentes no mesmo horario
select nome_rs, idSensor, idMedida, temp, umid, time from usuario join plantacao on idPlantacao = fkPlantacao join sensor on 
sensor.fkPlantacao = idPlantacao join medida on idSensor = fkSensor where time ='2022-05-04 10:05:10';

-- medidas de um sensor especifico
select nome_rs, idSensor, idMedida, temp, umid, time from usuario join plantacao on idPlantacao = fkPlantacao join sensor on 
sensor.fkPlantacao = idPlantacao join medida on idSensor = fkSensor where idSensor = 3;




















