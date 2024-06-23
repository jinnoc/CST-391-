# Mile-4

## Executive Summary
Car Show API Application (Milestone 4)

- The Car Show API application, developed as part of Milestone 4, is built using Angular based on Activity 4. It integrates with MAMP and the Express framework to access and manage data stored in MAMP and MySQL Workbench while using hostinger as server for mysql, with Milestone 3 running alongside to provide data access.

## Database

- The database contains a single table called "cars," which includes a list of cars. The table fields are car ID, make, model, year, color, price and an image.

## Application

# Design Update

- The design has been updated from a pet store to a car show.
# UML
![Screen1](mile4image/19.png)
This is the new UML diagram.
# Challenges

- Constructor Error: One challenge was an error message indicating that the constructor was missing arguments. This issue arose because, in the create-car.component.ts, both Math.floor(Math.random() * 1000000) and carId were used. Identifying and correcting this took some time.

- Data Access: Another challenge was forgetting to run the Express build application (Milestone 3) to access data stored in MAMP.

# Pending Bugs

- There are no pending bugs.
# Lessons Learned

- Debugging is essential to identify and resolve errors.
Attention to detail and focus are crucial during coding to avoid mistakes.

#### Screenshots

Screenshots

- This screen shows the welcome message of the Car Show API when the user opens the web page.
![Screen1](mile4image/1.png)

- This screen shows the cars list styled using Bootstrap.
![Screen2](mile4image/6.png)

- This screen shows the add new car page, which is built using a form with Bootstrap.
![Screen3](mile4image/2.png)

- This screen shows a message indicating that the car was added successfully.
![Screen4](mile4image/8.png)

- This screen shows the car list after adding a new car.
![Screen5](mile4image/6.png)

- This is the update page used to update an existing car in the list by using the car ID.
![Screen6](mile4image/3.png)

- This screen shows a message indicating that the car was updated successfully.
![Screen7](mile4image/9.png)

- This screen shows the remove car page, where a car can be removed by providing the ID and clicking the remove button.
![Screen8](mile4image/4.png)

- This screen shows a message indicating that the car was removed successfully.
![Screen9](mile4image/10.png)

- This screen shows the car list after removing a car, where the last car was removed from the list.
![Screen10](mile4image/13.png)

- These pictures show the database before and after adding a car to the database.
![Screen11](mile4image/12.png)

### Backend:

- This screen shows select all car from car's list.
![Screen12](mile4image/13.png)

- This screen shows select car by its ID.
![Screen13](mile4image/14.png)

- This screen shows select cars by its make.
![Screen14](mile4image/15.png)

- This screen shows select cars by its model.
![Screen15](mile4image/16.png)

- This screen shows adding a new car to the table.
![Screen16](mile4image/17.png)

- This screen shows the update of one car using Id. Which the ford F-150 was replaced by ford fusion.
![Screen17](mile4image/18.png)

#### Recording:
    
- 
- This is the vidoe of the Car Show API while running showing the web pages and the postman.
GIT:
- gitlab: git@gitlab.com:cst3912/CST391.git



