CREATE DATABASE IF NOT EXISTS mi_basededatos;
CREATE USER IF NOT EXISTS 'usuario'@'%' IDENTIFIED BY 'usuario_password';
GRANT ALL PRIVILEGES ON mi_basededatos.* TO 'usuario'@'%';
FLUSH PRIVILEGES;

USE mi_basededatos;
CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO clientes (nombre, email) VALUES ('Juan Pérez', 'juan@example.com');
INSERT INTO clientes (nombre, email) VALUES ('Ana López', 'ana@example.com');
