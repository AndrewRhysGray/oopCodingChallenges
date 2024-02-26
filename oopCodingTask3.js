// Coding Task 3 - Inheritance (Subclass and Superclass)
// In this task your are required to create an Admin class, which is a child class of the User  class:

// 1. Create a  User class:
// § Add to the class a property with the name of username.
class User {
    constructor(username) {
      this.numberOfArticles = 0;
      this._username = username;
    }
    
   
  
  
// § Create a setter method that can set the value of the username.

set username(newUsername) {
    this._username = 'Andy';
  }
}

// 2. Create the Admin class that inherits the User class:
class Admin extends User {
    constructor (username) {
        super(username);
        this.username = username;
    }
    expressYourRole() {
        return "Admin";
    }
    sayHello() {
        return "Hello admin ", admin
    }
}

const admin = new Admin("David John")
const role = admin.expressYourRole();
helloSayer = admin.sayHello()

// console.log(role)
// console.log(helloSayer)
// § Add a method by the name of expressYourRole(), and make it return the string: "Admin".


// § Add to the Admin class another method, sayHello(), that returns the string "Hello admin, XXX" with the username instead of XXX.

// 3. Create an object admin out of the class Admin:
// § Set its name to "Balthazar" and say hello to the user.


// Coding Task 4 - Polymorphism
// In order to implement the polymorphism principle, you will create a User class that commits the classes that inherit from it to calculate the number of scores that a user has depending on the number of articles that he has authored or edited.

// On the basis of the User class, we are going to create the Author and Editor classes, and both will calculate the number of scores with the method calcScores(), although the calculated value will differ between the two classes.

// This is the skeleton for the User class:

// Example:


// 1. Add to the User class the methods to set and get the number of articles:

// setNumberOfArticles(int numberOfArticles)
// getNumberOfArticles() 


// 2. Add to the User class a third method: 

// calcScores(), that performs the scores calculations separately for each class.


// 3. Create an Author class that inherits from the User class. 

// In the Author create a calcScores() method that returns the number of scores from the following calculation: 

// numberOfArticles * 10 + 20


// 4. Create an Editor class that inherits from the User class. 

// In the Editor create a calcScores() method that returns the number of scores from the following calculation: 

// numberOfArticles * 6 + 15


// 5. Create an object, author, from the Author class, set the number of articles to 8, and print the scores that the author gained.



// 6. Create another object, editor, from the Editor class, set the number of articles to 15, and print the scores that the editor gained.


// Coding Task 5 - Abstraction
// In this task , we will create an abstract User class and two child classes (Admin and Viewer classes) that inherit from the abstract class.

// 1. Create an abstract class with the name of User: 

// Add to the class, a property with the name of username. 
// Add to the class, an abstract method with the name of stateYourRole().
// Add to the class, the setter and getter methods to set and get the username.


// 2. Create an Admin class that inherits the User abstract class: 

// Add to the class a method stateYourRole() and let it return the string "admin".


// 3. Create another class, Viewer that inherits the User abstract class: 

// Add to the class a method stateYourRole() and let it return the string "viewer".


// 4. Create an object, admin, from the Admin class, set the username to "Balthazar", and make it return the string "admin".



// 5. Create an object, viewer, from the Viewer class, set the username to "Melchior", and make it return the string "viewer".