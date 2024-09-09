# Simple CRUD app developed with react frontend and springboot backend

### Backend Requirements
 * * install Java JVM
 > run ```java -version ``` to check
 * * install Spring
 >  run```spring -version``` to check
 * * install maven
 > run ```mvn -version``` to check
 * * install mysql and mysql-client
> ```mysql```
 ### Frontend requirements
* * install npm package

** ** To create project database  run mysql Server command 
```create database employee_management_system```

** Make sure mysql server is running by executing on linux 
 ``` sudo service mysql status ```
else if not run ```sudo service mysql start ```

#### Open the application.yml file in `src/main/java/com/target/classes` and edit it to your mysql server username and password

###  Run the springboot app executing ```mvn spring-boot:run``` under `/CRUDApp` directory
###  Run the React app frontend by executing ```npm start``` under `/ReactFrontEnd/frontend` directory

