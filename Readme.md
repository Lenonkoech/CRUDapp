# Simple CRUD app developed with react frontend and springboot backend

### Backend Requirements
 *install Java JVM*<br/>
 > run ```java -version ``` to check<br/>
 *install Spring*<br/>
 >  run```spring -version``` to check<br/>
 *install maven*<br/>
 > run ```mvn -version``` to check<br/>
 *install mysql and mysql-client*<br/>
> ```mysql```<br/>
 ### Frontend requirements
1. *install npm package* using ```npm install download```<br/>
     - ```npm add axios --save```
     - ```npm install bootstrap --save``` 
     - ```npm install react-router-dom --save```


***To create project database  run mysql Server command*** <br/>
```create database employee_management_system```

***Make sure mysql server is running by executing on linux***<br/> 
 ``` sudo service mysql status ```
***else if not run*** <br/>
```sudo service mysql start ```

***Open the application.yml file in*** `src/main/java/com/target/classes`<br/>
> Edit it to your mysql server username and password

###  Run the springboot app executing ```mvn spring-boot:run``` under `/CRUDApp` directory
###  Run the React app frontend by executing ```npm start``` under `/ReactFrontEnd/frontend` directory

> [!Note]
> The .yml file might automatically get deleted by the jvm so make sure its available before running the project