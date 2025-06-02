CREATE SCHEMA TP_Prog2_Kelman_Muller;

USE TP_Prog2_Kelman_Muller;

CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
email varchar(100),
contraseña varchar(100),
fecha date,
dni INT UNSIGNED ,
fotoPerfil varchar(10000) default NULL,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp null on update current_timestamp
);

CREATE TABLE products (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
archivoImg text NOT NULL UNIQUE,
nombre text NOT NULL,
descripcion text NOT NULL,
users_id int unsigned,
foreign key (users_id) references users(id),
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp null on update current_timestamp
);

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
users_id int unsigned,
descripcion text NOT NULL,
foreign key (users_id) references users(id),
productos_id int unsigned,
foreign key (productos_id) references products(id),
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp null on update current_timestamp
);
