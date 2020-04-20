# restaurant-automation PLEASE READ BEFORE STARTING

When cloning the project make sure you are on staging and not MASTER this is very important, we dont want to break MASTER since it is the most stable version we have of the project. The same thing goes to pushing code into GitHub, we dont want to break MASTER, make sure when you are pushing code that you are pushing it to your branch. After pushing to your branch make a pull request to merge it into staging. Once we test eveything on staging and all the test cases pass we can merge into master.

If this is your first time cloning this project

  1. Before starting the project make sure you have Postgresql installed from here `https://www.postgresql.org/download/`
  2. In terminal run `npm i` to install all dependencies of the project
  3. Open `pgAdmin 4` and create a new database and call it `Restaurant`
  4. Back in your terminal make sure you are on your root folder, and run this script `seqeulize db:migrate`

with this you should be able to run the project, call the API, and interact with the database

If you want to add a new table and model with to the project

  1. go to termial on your root folder and run 
      
      `sequelize model:generate --name [REPLACE WITH THE NAME OF THE MODEL] --attributes [ADD ANY ATTRIBUITES YOU WANT]`
      
      Example:
      
      `sequelize model:generate --name Users --attributes name:String,Username:String`
      
  2. This will create a migration and a model file
  3. In terminal run `sequelize db:migrate` --> this will create your table in the database server
