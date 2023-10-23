create database test_cluster;
\c test_cluster
create table employe(
    idEmploye serial primary key, 
    nomEmploye varchar, 
    email varchar,
    dateNaissance date,
    motDePasse varchar
);