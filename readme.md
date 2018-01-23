# OSTHUS API

## Requeriments
* Node js 8.9(LTS)
* Postgres


### Instructions

1 - clone the project through terminal or download it as a zipfile [here](https://github.com/Rhuansantos/OSTHUS/archive/master.zip)

`git clone https://github.com/Rhuansantos/OSTHUS.git`


2 - enter into the folder's project that you just cloned

`cd OSTHUS`

3 - install the dependencies using

`npm run get`

4 - bring the server up by just typing `npm run start`

`npm run start`



### Database

you will find the database configuration on `cd client/server/src/db/config`
use the development object to change your database configuration, after setup you configuration

use on the root folder

`npm run data-create` to create the database

`npm run data-migrate` to migrate the database

`npm run data-seed` to seed the database 


Now you can acess the application

> 
API Documentation `http://localhost:4000/`

> 
APP `http://localhost:3000/`