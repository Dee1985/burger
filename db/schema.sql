DROP DATABASE IF EXISTS burger_DB;

CREATE DATABASE burger_DB;

USE burger_DB;

CREATE TABLE orders
(
  id INT NOT NULL AUTO_INCREMENT,
  order_text VARCHAR (300) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);