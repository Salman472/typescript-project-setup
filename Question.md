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