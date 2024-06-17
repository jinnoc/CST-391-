# Milestone 3

## Executive Summary

- This is a Car Show API application built using Java Spring. It utilizes SQL queries, routes, models, DAOs, and controllers. The application connects to a MySQL service with credentials (IP address, port, username, and password) specified in the .env file.

## Database

- The database contains a single table called cars, which lists various cars. The table fields include car ID, make, model, year, color, and an image.

## Application

### Design Update
- The design has been updated from a pet store to a car show.

### UML
- This is the new UML diagram.

### Challenges
- Property Naming Mismatch: Initially, the variable names in the database did not match those in the application. For example, the database used carId and id, while the queries used car id. - It is crucial to maintain consistent naming conventions across the database and application.
- Update Issue: There was an issue with updating an item in the table because the carId property was not included in the updateCar method in cars.dao.ts. It took some time to identify and - - resolve this.
- SQL Typing Mistake: A comma was mistakenly added in the SQL update query before the WHERE clause, causing issues.

### Pending Bugs
- There are no pending bugs.

### Lessons Learned
- Pay attention to details while typing, as small mistakes can take hours to debug.
- Testing the code step-by-step and using debugging techniques is very helpful.


#### Screenshots
![Screen1](../screenpics/Screenshot 2024-06-16 at 8.40.57 AM.png)
- This screen shows the welcome message of the Car Show API when the user accesses the webpage using shoppingmallauto.com.

![Screen2](../screenpics/Screenshot 2024-06-16 at 8.10.01 PM.png)
- This screen shows the list of cars in the MySQL database, accessible via the URL shoppingmallauto.com/cars.

![Screen3](../screenpics/Screenshot 2024-06-16 at 8.29.26 PM.png)
- This screen shows the selection of one car using its car ID, make amd ,model.


#### Postman
![Screen5](../screenpics/Screenshot 2024-06-16 at 8.10.01 PM.png)
- This screen shows the database with all cars in the cars table.




