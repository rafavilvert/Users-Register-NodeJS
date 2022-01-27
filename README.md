# Users-Register-NodeJS

This project was developed with Node js.<br>

### Built With

* [NodeJs](https://nodejs.org/en/)
* [Knex Js](https://knexjs.org/)
* [Express](https://expressjs.com/pt-br/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [BCrypt](https://yarnpkg.com/package/bcrypt)
* [JWT](https://jwt.io/)
* [PostgreSQL](https://www.postgresql.org/)

## Project: 

This is a Rest API based on Node with postgresql connection.

## Require:

* Node Js
* Express
* Yarn
* Postgres SQL

## 📦 Usage:

* After clone go into the project directory, open it with your favorite IDE and run.
* Run yarn command to install the necessary dependencies.
```
yarn 
```
* Install postgre SQL and create database 'api_users'.
```
CREATE DATABASE api_users; 
```
```
CREATE TABLE users (id SERIAL PRIMARY KEY, name varchar(60) NOT NULL, email varchar(150) NOT NULL UNIQUE, password varchar(255) NOT NULL, role INT );
```
```
CREATE TABLE passwordtokens (passwordtokens_id SERIAL PRIMARY KEY, token VARCHAR(255) NOT NULL, used INT NOT NULL ,   user_id INT NOT NULL, CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(id)
	  ON DELETE CASCADE
	  ON UPDATE CASCADE );
```

### Next improvements:

- [ ] Implementing Front end
