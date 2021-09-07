CREATE DATABASE login;
DROP DATABASE login;

\c login usuarioteste1 

CREATE SEQUENCE more;

CREATE TABLE IF NOT EXISTS account(
    id BIGINT PRIMARY KEY NOT NULL DEFAULT NEXTVAL('more'),
    username VARCHAR(50) NOT NULL
);

DROP TABLE account;

CREATE TABLE IF NOT EXISTS auth(
    id BIGINT PRIMARY KEY NOT NULL,
    nickname VARCHAR(50) NOT NULL,
    pass VARCHAR(15) NOT NULL,
    idauth BIGINT UNIQUE,
    FOREIGN KEY(idauth) REFERENCES account(id) 
);

DROP TABLE auth;

INSERT INTO account VALUES(1,'mendes Sousa');
INSERT INTO account VALUES(2,'Noah Parker');

INSERT INTO auth VALUES(1,'mendesDev','1234',1);
INSERT INTO auth VALUES(2,'noahDev','1234',2);

SELECT * FROM account;
SELECT * FROM auth;

SELECT a.username, h.nickname, h.pass 
FROM account as a
INNER JOIN  auth as h
ON a.id = h.idauth;







