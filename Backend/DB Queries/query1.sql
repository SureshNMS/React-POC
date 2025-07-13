create database courseManagement;
use courseManagement;
create table Users(
ID int primary key auto_increment,
Name varchar(50),
EmailAddress varchar(100),
Password varchar(150),
ConfirmPassword varchar(250),
CreatedDate datetime default now()
);

insert into Users(Name, Role, EmailAddress, Password, ConfirmPassword)
values("Suresh", "Admin", "suresh@gmail.com", "123456", "123456")

alter table Users
modify column email varchar(100) after role;

alter table Users
drop column EmailAddress

SELECT * FROM Users;
