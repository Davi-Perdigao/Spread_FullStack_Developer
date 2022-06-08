USE dio_mysql;

SELECT * FROM pessoa;

SELECT nome FROM pessoa;


SELECT nome, nascimento FROM pessoa;


UPDATE pessoa SET nome = 'Eduardo Monteiro';

SELECT * FROM pessoa;


UPDATE pessoa SET nome = 'Davi Perdigão' WHERE id=1;

UPDATE pessoa SET nome = 'Pedro' WHERE id=2;

UPDATE pessoa SET nome = 'Marcela' WHERE id=3;

UPDATE pessoa SET nome = 'Flávio' WHERE id=5;

SELECT * FROM pessoa WHERE id=5;

DELETE FROM pessoa WHERE id=5;

SELECT * FROM pessoa;

INSERT INTO pessoa (nome, nascimento) VALUES ('Flávio', '2002-12-01');

SELECT * FROM pessoa ORDER BY nome;

ALTER TABLE pessoa ADD genero varchar(1) NOT NULL AFTER nascimento;

SELECT * FROM pessoa;

UPDATE pessoa SET genero='M' WHERE id=1;
UPDATE pessoa SET genero='M' WHERE id=2;
UPDATE pessoa SET genero='F' WHERE id=3;
UPDATE pessoa SET genero='M' WHERE id=6;

SELECT COUNT(id), genero FROM pessoa GROUP BY genero;

SELECT COUNT(genero), genero FROM pessoa GROUP BY genero;

INSERT INTO pessoa (nome, nascimento, genero) VALUES ('Paula', '1998-10-22', 'F');
