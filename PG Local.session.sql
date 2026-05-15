-- inser user data

INSERT INTO employees(id, name, email, salary, department, created_at)
VALUES
(101, 'salman hossain', 'salman@gmail.com', 30000, 'IT', '2026-05-15 08:00:00'),
(102, 'salman', 'salmanhossain@gmail.com', 40000, 'Finance', '2026-05-16 10:00:00'),
(103, 'hossain', 'hossain@gmail.com', 50000, 'Technical', '2026-05-17 02:30:45'),
(104, 'shofiq', 'shofiq@gmail.com', 45000, 'IT', '2026-05-18 08:08:40'),
(105, 'user-5', 'user@gmail.com', 20000, 'HR', '2026-05-20 08:00:00'),
(106, 'user-6', 'user6@gmail.com', 15000, 'IT', '2026-05-15 08:00:00');

-- select all data
SELECT * FROM employees;

--  Select Specific Columns

SELECT name, salary
FROM employees;

-- Use WHERE Condition
SELECT *
FROM employees
WHERE salary > 40000;

-- . Use ORDER BY
SELECT * 
FROM employees
ORDER BY salary DESC;

-- Use LIMIT
-- SELECT *
-- FROM employees
-- ORDER BY salary DESC
-- LIMIT 3;

-- Update Data

UPDATE employees
 SET salary = 20000
 WHERE
  id=106;

-- Delete Data
DELETE FROM employees
WHERE id=105

-- Use BETWEEN
SELECT *
FROM employees
WHERE salary BETWEEN 30000 AND 60000

-- Use IN

SELECT *
FROM employees
WHERE department IN ('IT','HR')


-- Use COUNT
SELECT COUNT (*) as total_employees
FROM employees

--  Use AVG
SELECT AVG(salary) as avg_salary
FROM employees

-- Use GROUP BY

SELECT department, COUNT(*) as total
FROM employees
GROUP BY department

-- Use HAVING
SELECT department, COUNT(*) AS total
FROM employees
GROUP BY department
HAVING COUNT(*) > 2;

-- Add Constraints
CREATE TABLE constraintsEmployees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    salary INT DEFAULT 10000,
    department VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- . Add Foreign Key
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);
INSERT INTO users (name, email)
VALUES
('Salman', 'salman@gmail.com'),
('Hossain', 'Hossain@gmail.com');

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT,
    amount DECIMAL(10,2),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
INSERT INTO orders (user_id, amount)
VALUES
(1, 500.00),
(2, 1200.00);

-- Use INNER JOIN
SELECT 
    users.name,
    orders.amount
FROM users
INNER JOIN orders
ON users.id = orders.user_id;