create database sensor;
use sensor;

create table medida(
	id int primary key auto_increment,
	temp decimal,
	umi int,
	lux int,
	temp2 decimal,
    chave tinyint,
	dataCaptura datetime default current_timestamp
);
select * from medida;
truncate medida;
