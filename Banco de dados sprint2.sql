create database sprint2;
use sprint2;

-- CADASTRO

create table cadastro(
	idCadastro int primary key auto_increment,
	nome varchar(50) not null,
	email varchar(100) not null,
	cpf char(11),
	cnpj char(14),
	senha varchar(50) not null
);

insert into cadastro (nome, email, cpf, cnpj, senha) values
('Reginaldo Dos Santos', 'reginaldo.santos@sptech.school', '79794861328', null, 'regis2019'),
('Julia Duran', 'julia.duarte@sptech.school', '61794863367', null, 'juju56791'),
('Matheus Hideki', 'matheus.hideki@sptech.school', '50707263791', null, 'Mati@hideki123'),
('Mythras Freitas', 'mythras.freitas@sptech.school', '56057868726', null, 'mythr4s7892'),
('Pedro Henrique', 'pedro.mendonca@sptech.school', '97670909871', null, 'pedrinho87534'),
('Safra', 'Safra@gmail.com', null, '98357890645616', 'Safra@327244'),
('AMBEV', 'ambev@gmail.com', null, '17890654899441', 'amb474653636');

select * from cadastro; 

desc cadastro;

-- Selecionar em ordem crescente 

select * from cadastro order by nome;

-- Selecionar em ordem decrescente

select * from cadastro order by email desc;

-- Mostrar apenas nomes da tabela

select nome from cadastro;

-- Selecionar nomes que começam com 'a'

select * from cadastro where nome like 'm_%';

-- Selecionar cpf onde tem como o penúltimo número '9'

select * from cadastro where cpf like '%2_';

-- Selecionar email onde tem como a última letra é 'l'

select * from cadastro where email like '%l';

-- Mostrar apenas o cnpj da tabela

select cnpj from cadastro;

-- PROPOSTA

create table plantacao(
idPlantacao int primary key auto_increment,
HectaresPlantados int,
UF char(2),
ProducaoUltimaSafra int,
fkCadastro int, foreign key (fkCadastro) references cadastro (idCadastro)
);

insert into plantacao (HectaresPlantados, UF, ProducaoUltimaSafra,fkCadastro) values
	(140, 'RS', 40,1),
    (170, 'MT', 60,2),
    (190, 'GO', 30,3),
    (190, 'PR', 50,4);
    
select * from plantacao; 
select * from cadastro join plantacao on fkCadastro = idCadastro;

desc plantacao;

-- Selecionar em ordem crescente 

select * from plantacao order by UF;

-- Selecionar em ordem decrescente

select * from plantacao order by ProducaoUltimaSafra desc;

-- Mostrar apenas Hectares plantados da tabela

select ProducaoUltimaSafra from plantacao;

-- Selecionar UF que começam com 'g'

select * from plantacao where UF like 'g%';

-- Selecionar Produtividade Da UltimaSafra onde número começa com '5'

select * from plantacao where ProducaoUltimaSafra like '5%';

-- Selecionar Hectares Plantados onde tem como o penúltimo número '5'

select * from plantacao where HectaresPlantados like '%9_';

-- Mostrar apenas a UF da tabela

select UF from plantacao;
    
    
    -- SENSORES
    
    create table sensores(
    idSensores int primary key auto_increment,
    SensorUmidade int,
    SensorTemperatura int,
    Data_Hora datetime,
    fkPlantacao int, foreign key (fkPlantacao) references plantacao (idPlantacao)
    );
    
    insert into sensores (SensorUmidade, SensorTemperatura, Data_Hora, fkPlantacao) values
		(48, 28, '2020-05-31 12:27:59',1),
        (42, 26, '2020-03-23 05:36:55',2),
        (45, 23, '2020-11-10 14:22:12',3),
        (47, 30, '2021-10-05 13:10:33',4);
        
select * from sensores; 
select * from sensores join plantacao on fkPlantacao = idPlantacao;

desc sensores;

-- Selecionar em ordem crescente 

select * from sensores order by Data_Hora;

-- Selecionar em ordem decrescente

select * from sensores order by SensorTemperatura desc;

-- Mostrar apenas o Sensor de Umidade da tabela

select SensorUmidade from sensores;

-- Selecionar Data e hora que tem como o terceiro número  '1'

select * from sensores where Data_Hora like '__2%';

-- Selecionar Sensor de temperatura onde tem como o último número '2'

select * from sensores where SensorTemperatura like '%6';

-- Mostrar apenas o Sensor de umidade da tabela

select SensorUmidade from sensores;