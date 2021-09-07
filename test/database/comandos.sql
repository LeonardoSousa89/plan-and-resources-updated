							DCL
							---
psql  -U postgres
psql - U [usuario] -d postgres
psql - U [usuario] -d [database]
\l
\dt
\c
\c [database]
\c [database] [usuario]
\q
\du
\dp
CREATE USER [usuario];
CREATE ROLE [usuario];
CREATE ROLE [group];
CREATE ROLE [group/usuario] WITH LOGIN PASSWORD [password];
ALTER ROLE  [usuario] PASSWORD [password];
ALTER ROLE  [usuario] WITH PASSWORD [password];
ALTER ROLE  [usuario] SUPERUSER;
ALTER ROLE  [usuario] WITH SUPERUSER;
ALTER ROLE  [usuario] NOSUPERUSER PASSWORD [password];
ALTER ROLE  [usuario] WITH NOSUPERUSER PASSWORD [password];
ALTER TABLE [nome_da_tabela] OWNER TO [novo_dono];



no database que se concederá os privilégios:

GRANT [privilegios] ON [tabela] IN SCHEMA [schema] TO [role];
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA PUBLIC TO [usuario];
REVOKE [privileges] ON [table] FROM [usuario];
REVOKE INSERT, UPDATE, DELETE ON [table] FROM [usuario];



                   			DDL
							---   

CREATE DATABASE [database];
DROP DATABASE [database];
CREATE TABLE [table];
ALTER TABLE [table];
ALTER TABLE [table] DROP COLUMN [column]; 
ALTER TABLE [table] ADD COLUMN  [column]; 
DROP TABLE  [table];
CREATE SCHEMA [schema];
CREATE PROCEDURE [procedure];

                    		DML  
							---

INSERT INTO [table] VALUES(table_values);
UPDATE [table] SET [field];
DELETE FROM [table] WHERE [condition];


							DQL
							---

SELECT * FROM [table];
SELECT [condition] FROM [table];
SELECT [condition] FROM [table] WHERE [condition];



referências:

https://www.devmedia.com.br/gerenciando-usuarios-e-permissoes-no-postgresql/14301
https://www.devmedia.com.br/controle-de-acesso-no-postgresql-9-1/25392