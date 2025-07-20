CREATE DATABASE task2_employee_db;

USE task2_employee_db;

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  department VARCHAR(100),
  salary DOUBLE
);