--Creating tablespaces, tables, users etc

--1 create a tablespace test_tablespace of size 200mb growing in size of 250mb till unlimited under sys /
Create tablespace test_tablespace 
datafile size 200m 
autoextend on 
next 250m
maxsize unlimited;

--2 Create user and assigning its default tablespace also under sys /
Create user appuser identified by appuser123 default tablespace test_tablespace;

-- Grant appuser with privileges to create these tables /
grant create session to appuser;  --- allows appuser to log in to oracle database
grant create table to appuser;  --- allows appuser to create tables
grant create view to appuser;
grant create sequence to appuser;
grant create procedure to appuser;
alter user appuser quota unlimited on test_tablespace; --- allows appuser to use unlimited storage within the test_table tablespace

--3 exit to then sign in as the new user where we want to create the tables under /
exit

--Setting up tns connections--
--4 Find service name in sqlplus /
show parameter service_names;

--5 Go to network folder /
cd $ORACLE_HOME/network/admin/





--10 check to see that the correct user is connected
show user;

--11 Create table departments with specified columns /
Create table departments (
dept_id NUMBER primary key, -- unique id for each department and can't be null i.e two departments cant have the same id and can't be null
dept_name VARCHAR2(100),
location VARCHAR2(100),
manager_name VARCHAR2(100)
)
tablespace test_tablespace; --- references the tablespace where we want to create the departments table inside

 

--12 Create table employees with specified columns /
Create table employees (
emp_id NUMBER primary key,  --# unique id for each employee and can't be null i.e two employees can't have the same id and ids can't be null
first_name VARCHAR2(50), --# varchar2(50) means maximum of 50 characters for first_name
last_name VARCHAR2(50),
email VARCHAR2(100), --# varchar2(100) means maximum of 100 characters for email
salary NUMBER(10,2), --# NUMBER(10,2) means 10 total digits and 2 digits after the decimal point
hire_date date,
dept_id NUMBER,

constraint fk_dept --- name of a rule
foreign key(dept_id) --- links tables employees and departments with column dept_id
references departments(dept_id) --- values must exist in the dept_id column in the departments table (Parent table)
)
tablespace test_tablespace; --- references the tablespace where we want to create the employees table inside

--13 Insert rows into tables while populating each row the data for employees /
insert all
into employees (emp_id, first_name, last_name, email, salary, hire_date, dept_id)
values (1, 'Michael', 'Jones', 'michael@company.com', 40000, sysdate, 7)
into employees (emp_id, first_name, last_name, email, salary, hire_date, dept_id)
values (2, 'Martin', 'Cash', 'martin@company.com', 40000, sysdate, 5)
into employees (emp_id, first_name, last_name, email, salary, hire_date, dept_id)
values (3, 'Mark', 'Carrington', 'mark@comapny.com', 50000, sysdate, 3)
into employees (emp_id, first_name, last_name, email, salary, hire_date, dept_id)
values (4, 'Sarah', 'Carrington', 'sarah@company.com', 40000, sysdate, 10)
into employees (emp_id, first_name, last_name, email, salary, hire_date, dept_id)
values (5, 'Courtney', 'Bishop', 'courtney@company.com', 35000, sysdate, 6)
into employees (emp_id, first_name, last_name, email, salary, hire_date, dept_id)
values (6, 'Max', 'Devon', 'max@company.com', 65000, sysdate, 1)
into employees (emp_id, first_name, last_name, email, salary, hire_date, dept_id)
values (7, 'Jack', 'Moore', 'jack@company.com', 30000, sysdate, 8)
into employees (emp_id, first_name, last_name, email, salary, hire_date, dept_id)
values (8, 'Chloe', 'Brown', 'chloe@company.com', 25000, sysdate, 2)
into employees (emp_id, first_name, last_name, email, salary, hire_date, dept_id)
values (9, 'Ethan', 'Davis', 'ethan@company.com', 90000, sysdate, 9)
into employees (emp_id, first_name, last_name, email, salary, hire_date, dept_id)
values (10, 'William', 'Smith', 'william@company.com', 120000, sysdate, 4)
SELECT * FROM dual;

--14 Insert rows into tables while populating each row the data for departments /
insert all
into departments(dept_id, dept_name, location, manager_name)
values (1, 'Finance', 'London', 'Clara')
into departments(dept_id, dept_name, location, manager_name)
values (2, 'sales', 'Norwich', 'Martin')
into departments(dept_id, dept_name, location, manager_name)
values (3, 'IT', 'Manchester', 'Mike')
into departments(dept_id, dept_name, location, manager_name)
values (4, 'Operations', 'Leeds', 'Tim')
into departments(dept_id, dept_name, location, manager_name)
values (5, 'Marketing', 'Liverpool', 'Lucy')
into departments(dept_id, dept_name, location, manager_name)
values (6, 'HR', 'Slough', 'Sophia')
into departments(dept_id, dept_name, location, manager_name)
values (7, 'Support', 'Hull', 'Charlotte')
into departments(dept_id, dept_name, location, manager_name)
values (8, 'Engineering', 'Reading', 'Daniel')
into departments(dept_id, dept_name, location, manager_name)
values (9, 'Security', 'Oxford', 'David')
into departments(dept_id, dept_name, location, manager_name)
values (10, 'Analytics', 'Bristol', 'James')
SELECT * FROM dual;

--15 Commits all changes /
COMMIT;