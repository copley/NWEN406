
import { ReqSqlObj } from './ReqSqlObj';
export const sqlobj: ReqSqlObj = {
   sqlStatement:

   
`  drop  table IF EXISTS COMPANY ; drop table IF EXISTS department ; 
   
   CREATE TABLE department(
   ID INT PRIMARY KEY     NOT NULL,
   state text not null  
   ); 
   
   INSERT INTO department (ID , state ) VALUES 
   (1,  'FL' ),
   (2,   'CA'),
   (3,  'AL' );
   
   CREATE TABLE COMPANY(
   ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL,
   JOIN_DATE	  DATE,
   departmentID   int    NOT NULL references department(ID)
   ); 
   
   INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE,departmentID) VALUES (1, 'Paul', 32, 'California', 20000.00,'2001-07-13' ,1);
   INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,JOIN_DATE,departmentID) VALUES (2, 'Allen', 25, 'Texas', '2007-12-13',1);
   INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE,departmentID) VALUES (3, 'Teddy', 23, 'Norway', 20000.00, DEFAULT,2 );
   INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE,departmentID) VALUES (4, 'Mark', 25, 'Rich-Mond ', 65000.00, '2007-12-13' ,2), (5, 'David', 27, 'Texas', 85000.00, '2007-12-13' ,3 );
   
   select name , state from department inner join COMPANY on department.ID = COMPANY.departmentID;
   select * from department inner join COMPANY on department.ID = COMPANY.departmentID limit 2`
   
   
   
   

};




