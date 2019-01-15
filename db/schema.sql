-- Remove burgers_db if it already exists
DROP DATABASE IF EXISTS burgers_db;
-- Create burgers_db --
CREATE DATABASE burgers_db;

-- Use burgers_db for table named burgers --
USE burgers_db;

-- Create Table 'burgers' --
CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);