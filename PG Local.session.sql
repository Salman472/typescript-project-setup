-- inser user data

INSERT INTO employees(id,name,email,salary,department,created_at)
VALUES
(101, 'salman hossain', 'salman@gmail.com', 30000, 'IT', '2026-05-15 08:00:00'),
(102, 'salman', 'salmanhossain@gmail.com', 40000, 'Finance', '2026-05-16 10:00:00'),
(103,  'hossain', 'hossain@gmail.com', 50000, 'Technical', '2026-05-17 02:30:45'),
(104, 'shofiq', 'shofiq@gmail.com', 45000, 'IT', '2026-05-18 08:08:40'),
(105, 'user-5', 'user@gmail.com', 20000, 'Finance', '2026-05-20 08:00:00'),
(106, 'user-6', 'user6@gmail.com', 15000, 'IT', '2026-05-15 08:00:00')

-- select all data
SELECT * FROM employees

--  Select Specific Columns

SELECT name, salary
FROM employees


