# E-Commerce Backend

  ## Description

  This is a backend application built for an e-commerce site, using Node.js, Express.js, MySQL and Sequelize. The application allows the user to view, post, update and delete items in the e-commerce database using Insomnia.


  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Credit](#credit)
  
  * [Tests](#tests)
  
  
  ## Installation
  
  To install neccessary dependencies, run the following command in your terminal:
  
  ```
  npm i
  ```

  To download Insomnia:  

 [Download Insomnia](https://insomnia.rest/download)


  ## Usage 

  To use this application, run the following in your terminal:
   ```
   mysql -u root -p 
   ```
   and enter your `MySQL` password to access `MySQL` shell

   type:
   ```
   quit
   ``` 
   this will quit `MySQL` shell

   Run:
   ```
   source db/schema.sql
   ```
   this will run the `schema.sql` file in the `db` folder
   
  Then run:
   ```
   npm run seed 
   ```
  this will seed data to the database

Finally, run:
```
npm start
```
this will now start the application

Open `Insomnia` and use the respective API routes to `GET`, `POST`, `UPDATE` or `DELETE` an item in the database.

  ## License

  N/A

  ## Credit

  AskBCS tutors  

  W3Schools   

  ## Tests

 The following video shows the application's functionality:
 [Walkthrough Video](https://watch.screencastify.com/v/WAclOMbHCfgJGSpXC6QW)
