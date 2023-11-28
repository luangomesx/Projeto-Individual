-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

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
    select count(fkusuario) qtdusuario,
    resultado as resultado from resultadoquiz where resultado <= 60;
    
    -- quantidade de usuario da média pra cima
    select count(fkusuario) qtdusuario,
    resultado as resultado from resultadoquiz where resultado >= 60
    group by resultado;
    


/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
