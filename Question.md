<!-- prisma related question -->

1. What is Prisma ORM and why is it used in backend development?
answer: Prisma ORM is a modern ORM (Object Relational Mapper) for Node.js and TypeScript applications.
It helps developers communicate with databases using JavaScript/TypeScript instead of writing raw SQL queries manually.

2. What is the difference between findUnique() and findFirst() in Prisma?
answer:Both are used to find a single record, but they work differently.
findUnique():Used when searching by a UNIQUE field.
findFirst():Used when searching with normal conditions.

3. What is Prisma Migration and why is prisma migrate dev used?
answer: Migration means updating the database structure automatically from Prisma schema changes.

4. Explain the difference between select and include in Prisma with examples.
answer: Both are used to control returned data.But they work differently.
select:Used to choose specific fields.
include:Used to include related models (relations).

5. What is the purpose of the Prisma schema file (schema.prisma) and what are its main sections?
answer: The schema.prisma file is the main configuration file of Prisma.
  1. Generator Section Defines Prisma Client generation.
  2. Datasource Section Defines database connection.
  3. Model Section Defines database tables.

  
<!-- daraz add product ER diagram -->

Link : https://drive.google.com/file/d/124Ds-zAef5QSzAEZmnNACk_V9EU6JGKm/view?usp=sharing




1. What is the difference between:DELETE, TRUNCATE, DROP
   answer:The difference between:DELETE, TRUNCATE, DROP =
   DELETE: Erases specific lines (rows) using a pencil. You can undo it (Rollback), and you can choose to erase only certain lines using a WHERE clause.

TRUNCATE: Rips out all the pages but leaves the binder intact. It’s much faster than DELETE because it doesn't log every single row removal, but it clears the entire table at once.

DROP: Throws the entire notebook into a paper shredder. The data and the table structure are gone forever.

2. What is a PRIMARY KEY?
   answer: A PRIMARY KEY is a column (or a set of columns) that uniquely identifies each row in a table.
   It must contain unique values.
   It cannot contain NULL values.
   Each table can have only one primary key.

3.What is the difference between:PRIMARY KEY, UNIQUE KEY
answer:In database management, both PRIMARY KEY and UNIQUE KEY are constraints used to ensure that a column (or a set of columns) contains only unique values. However, they serve different purposes in terms of table structure and data integrity.

4.What is a FOREIGN KEY?
answer: A FOREIGN KEY is a column (or a group of columns) in one table that provides a link between data in two tables. It acts as a cross-reference between tables because it points to the PRIMARY KEY of another table.
The main purpose of a Foreign Key is to maintain referential integrity—ensuring that the relationship between two tables remains consistent.

5.What is JOIN in SQL?
Explain:INNER JOIN, LEFT JOIN
answer: In SQL, a JOIN clause is used to combine rows from two or more tables based on a related column between them. While a Foreign Key creates the link between tables, a JOIN is the tool you use to actually query and see that linked data together in a single result.

    INNER JOIN :The INNER JOIN is the most common type of join. It returns records only when there is a match in both tables. If a row in the first table does not have a matching row in the second table, it will not appear in the result.

    LEFT (OUTER) JOIN:A LEFT JOIN returns all records from the left table (the first table mentioned), and the matched records from the right table.

6.What is normalization?
Explain:1NF,2NF,3NF
answer: Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. The goal is to ensure that each piece of data is stored in only one place and that related data is stored together logically.
    First Normal Form (1NF)
    The objective of 1NF is to ensure the table looks like a proper relation and has no "hidden" data structures.

    Rules:
    Each column must contain atomic (indivisible) values. No lists or sets.
    Each record must be unique (usually identified by a Primary Key).
    Each column must have a unique name.

    Second Normal Form (2NF)
    To reach 2NF, a table must first be in 1NF. 2NF focuses on removing "partial dependencies."
    Rules:
    Must be in 1NF.
    Every non-key column must depend on the entire Primary Key.
    This is mostly relevant when using Composite Keys (a Primary Key made of two or more columns).

    Third Normal Form (3NF)
    To reach 3NF, a table must be in 2NF. 3NF focuses on removing "transitive dependencies."
    Rules:
    Must be in 2NF.
    Non-key columns must not depend on other non-key columns. Everything must depend only on the Primary Key.

7.What is indexing?Why do we use index?
answer:Technically, an index is a separate data structure (usually a B-Tree) that stores the values of a specific column and a pointer to the physical location of the corresponding row in the table.
The primary reason is Performance. Without an index, the database must perform a Full Table Scan, checking every row from top to bottom.

8.What is the difference between:WHERE, HAVING
answer:Both WHERE and HAVING are used to filter data in SQL, but they operate at different stages of the query execution. The simplest way to remember the difference is that WHERE filters individual rows, while HAVING filters groups.

9.9.What is a transaction in SQL? Explain:COMMIT,ROLLBACK
answer: A Transaction in SQL is a single unit of work that consists of one or more database operations (like INSERT, UPDATE, or DELETE). The core philosophy of a transaction is "All or Nothing." Either every command in the group succeeds, or none of them are applied.

This ensures Data Integrity, preventing the database from ending up in a "half-finished" or corrupted state if a system error or crash occurs mid-process.

COMMIT
The COMMIT command is used to permanently save all changes made during the current transaction to the database.
Once a COMMIT is executed, the changes are written to the disk and become visible to all other database users.

ROLLBACK
The ROLLBACK command is the "undo" button. It is used to cancel all changes made during the current transaction and return the database to the state it was in before the transaction began.

This is typically triggered when an error occurs or if a specific condition (like a balance check) isn't met.
It ensures that "partial" data never stays in the database.

10.Write a query to find the second highest salary.
answer:Using LIMIT and OFFSET (MySQL, PostgreSQL, SQLite)
This is the most straightforward approach. You sort the salaries from highest to lowest and use OFFSET 1 to skip the top record.
<!-- *** -->
SELECT DISTINCT Salary 
FROM Employees 
ORDER BY Salary DESC 
LIMIT 1 OFFSET 1;
DISTINCT: Ensures that if multiple people have the exact same top salary, you still get the actual second unique value.
LIMIT 1: Returns only one row.
OFFSET 1: Skips the first row (the highest salary).