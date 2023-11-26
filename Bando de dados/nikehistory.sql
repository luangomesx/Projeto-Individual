create database nikehistory;

use nikehistory;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
CPF char(11),
email varchar(45),
senha varchar(45));

desc usuario;

create table resultadoquiz (
idresultadoQuiz int primary key auto_increment,
resultado int,
fkUsuario int,
constraint fkUs foreign key (fkUsuario)
	references usuario(idUsuario));
    
    select * from usuario;
    
    select * from resultadoquiz;
    
select count(fkUsuario) from resultadoquiz where resultado > 20;

    select count(resultado),
    fkUsuario from resultadoquiz where resultado = 80 group by fkUsuario;
    select count(resultado) from resultadoquiz where resultado = 80;