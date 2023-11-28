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

-- qtd de usuarios acima da média
    select count(fkUsuario) qtdUsuarios
    from resultadoquiz where resultado > 60;

-- qtd de usuarios na média
    select count(fkUsuario) qtdUsuarios
    from resultadoquiz where resultado = 60; 
    
    -- qtd de usuarios abaixo da média
    select count(fkUsuario) qtdUsuarios
    from resultadoquiz where resultado < 60; 
    
    -- usuarios com 20
    select count(fkUsuario) qtdUsuarios from resultadoquiz
    where resultado = 20;
    
    -- usuarios com 40
    select count(fkusuario) qtdUsuarios
    from resultadoquiz where resultado = 40;
    
    -- usuarios com 60
    select count(fkusuario) qtdUsuarios
    from resultadoquiz where resultado = 60;
    
    -- usuarios com 80
    select count(fkusuario) qtdUsuarios
    from resultadoquiz where resultado = 80;
    
    -- usuarios com 100
    select count(fkusuario) qtdUsuarios
    from resultadoquiz where resultado = 100;
    
    -- quantidade de usuarios da média pra baixo
    select count(fkusuario) qtdUsuario,
    resultado as resultado from resultadoquiz where resultado <= 60
    group by resultado;
    
    -- quantidade de usuario da média pra cima
    select count(fkusuario) qtdUsuario,
    resultado as resultado from resultadoquiz where resultado >= 60
    group by resultado; 