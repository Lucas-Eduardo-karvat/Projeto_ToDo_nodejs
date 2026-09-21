create database todo_db;
use todo_db;

create table tasks (id int auto_increment primary key,
tarefa varchar(225) not null, 
realizada boolean default false);
