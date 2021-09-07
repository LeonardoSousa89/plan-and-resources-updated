CREATE DATABASE auth;
DROP DATABASE auth;

CREATE TABLE IF NOT EXISTS login(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user VARCHAR(50) UNIQUE NOT NULL,
    pass VARCHAR(15) NOT NULL
);
DROP TABLE login;

SELECT * FROM login;

INSERT INTO login VALUES(NULL,'mendes','1465asd487');

DELIMITER $$

CREATE PROCEDURE authentication()

BEGIN
        SELECT * FROM login;
END $$

DELIMITER ;

DROP PROCEDURE IF EXISTS authentication;

CALL authentication();

DELETE FROM login WHERE user = 'mendesDev';
DELETE FROM login WHERE user = 'mendesSousa';
DELETE FROM login WHERE user = 'test';
DELETE FROM login WHERE user = 'devfull';

