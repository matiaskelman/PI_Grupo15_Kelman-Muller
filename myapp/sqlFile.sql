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
foreign key (users_id) references users(id),
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp null on update current_timestamp
);

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
foreign key (users_id) references users(id),
foreign key (productos_id) references productos(id),
descripcion text NOT NULL,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp null on update current_timestamp
);

INSERT INTO users VALUES (DEFAULT, "a@gmail.com", "12345675!", 2008-11-11, 12345678, DEFAULT);
INSERT INTO users VALUES (DEFAULT, "b@gmail.com", "12345675!", 2008-11-11, 12345678, DEFAULT);
INSERT INTO users VALUES (DEFAULT, "c@gmail.com", "12345675!", 2008-11-11, 12345678, DEFAULT);
INSERT INTO users VALUES (DEFAULT, "d@gmail.com", "12345675!", 2008-11-11, 12345678, DEFAULT);
INSERT INTO users VALUES (DEFAULT, "e@gmail.com", "12345675!", 2008-11-11, 12345678, DEFAULT);

INSERT INTO products VALUES (DEFAULT,"img2.png", "Plancha", "aaaaaa", 1);
INSERT INTO products VALUES (DEFAULT,"img3.png", "Jarra", "aaaaaa", 2);
INSERT INTO products VALUES (DEFAULT,"img4.png", "Plastico", "aaaaaa", 3);
INSERT INTO products VALUES (DEFAULT,"img5.png", "Goma", "aaaaaa", 4);
INSERT INTO products VALUES (DEFAULT,"img6.png", "Mouse", "aaaaaa", 5);
INSERT INTO products VALUES (DEFAULT,"img7.png", "Computadora", "aaaaaa", 1);
INSERT INTO products VALUES (DEFAULT,"img8.png", "Licuadora", "aaaaaa", 2);
INSERT INTO products VALUES (DEFAULT,"img9.png", "Teclado", "aaaaaa", 3);
INSERT INTO products VALUES (DEFAULT,"img10.png", "usb", "aaaaaa", 4);
INSERT INTO products VALUES (DEFAULT,"img1.png", "usb-c", "aaaaaa", 5);

INSERT INTO comentarios VALUES (DEFAULT,1,1, "1user 1post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,2,1, "2user 1post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,1, "aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,2, "aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,2, "1user 2post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,2,2, "2user 2post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,3, "1user 3post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,2,3, "2user 3post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,3, "aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,4, "1user 4post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,2,4, "2user 4post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,4, "aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,5, "1user 5post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,2,5, "2user 5post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,5, "aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,6, "1user 6post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,2,6, "2user 6post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,6, "aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,7, "1user 7post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,2,7, "2user 7post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,7, "aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,8, "1user 8post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,2,8, "2user 8post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,8, "aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,9, "1user 9post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,2,9, "2user 9post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,9, "aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,10, "1user 10post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,2,10, "2user 10post aaaaaa");
INSERT INTO comentarios VALUES (DEFAULT,1,10, "aaaaaa");