CREATE DATABASE demo_data_test

USE demo_data_test

CREATE TABLE IF NOT EXISTS data(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
); 

DROP TABLE data;

INSERT INTO data VALUES(NULL, 'Mohinda Suresh');
INSERT INTO data VALUES(NULL, 'Noah Bennet');
INSERT INTO data VALUES(NULL, 'Claire Bennet');
INSERT INTO data VALUES(NULL, 'Peter Petrelli');
INSERT INTO data VALUES(NULL, 'Nathan Petrelli');
INSERT INTO data VALUES(NULL, 'Gabriel Sylar');
INSERT INTO data VALUES(NULL, 'Matt Parkman');
INSERT INTO data VALUES(NULL, 'Nikky  Sanders');
INSERT INTO data VALUES(NULL, 'Micah Sanders');

SELECT * FROM data;



