CREATE DATABASE dio_mysql;

USE dio_mysql;

CREATE TABLE pessoas (
nome varchar(20), 
nascimento date
);

CREATE TABLE pessoa (
id int NOT NULL AUTO_INCREMENT, 
nome varchar(30),
nascimento date,
PRIMARY KEY (id)
);

SELECT * from pessoas;

SELECT * from pessoa;

INSERT INTO pessoas (nome, nascimento) VALUES
('Eduardo', '1989-07-03');

SELECT * from pessoas;

INSERT INTO pessoa (nome, nascimento) VALUES
('Eduardo', '1989-07-03');

INSERT INTO pessoa (nome, nascimento) VALUES
('Pedro', '1995-07-17');

INSERT INTO pessoa (nome, nascimento) VALUES
('Marcela', '2000-04-05');

INSERT INTO pessoa (nome, nascimento) VALUES
('Flávio', '2002-12-01');

SELECT * from pessoa;
