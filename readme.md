# node-postgres

Node Js and PostgresSQL server

### **_FILTERING DATA_**

- WHERE CLAUSE, AND & OR
  > "SELECT \* FROM students WHERE age = 18 AND class = 10"  
  > "SELECT \* FROM students WHERE age = 18 AND (class = 10 OR class = 12)"
- LIMIT, OFFSET
  > "SELECT \* FROM students LIMIT 10"  
  > "SELECT \* FROM students OFFSET 5 LIMIT 10"
- IN
  > "SELECT \* FROM students WHERE gender IN ("Male", "Female")"
- BETWEEN
  > "SELECT \* FROM students WHERE age BETWEEN 15 AND 18"
- LIKE
  > "SELECT \* FROM students WHERE email LIKE "%@google.%""
