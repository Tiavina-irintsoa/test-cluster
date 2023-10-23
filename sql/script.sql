create database test_cluster;
\c test_cluster
create table employe(
    idEmploye serial primary key, 
    nomEmploye varchar, 
    prenomEmploye varchar,
    email varchar,
    contact varchar,
    dateNaissance date
);