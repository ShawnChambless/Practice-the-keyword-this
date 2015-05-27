//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      /*
            *Helps to maintain a cleaner global scope
            *Allows the use of dynamic funcitons
      */

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer

      /*
            *Implicit - thing to the left of the '.' is what 'this' is bound to
            *Explicit - must use .call(), .apply(), or .bind()
            *New - We didn't cover it...
            *Default - If 'this' isn't bond to anything, it will default to the window object
      */

  // 3) What is the difference between call and apply?

      //Answer
      //You have to pass arguments one by one with .call(), with .apply() they are passed as arrays.

  // 4) What does .bind do?

      //Answer
      //Creates a new function that is always bound to whatever you put in the .call()

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
        username: 'ShawnChambless',
        email: 'shawn.chambless@gmail.com',
        getUsername: function(){
            return this.username;
        }
    };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

// Write the function definitions which will make the following function invocations function properly.
var Car = function(make, model, year) {
    return {
        make: make,
        model: model,
        year: year,
        moveCar: move,
        move: 0
    }
}

var move = function() {
    var newMove = this.move + 10;
    this.move = newMove;
    return this.move;
}

var prius = Car('Toyota', 'Prius', 2011);
var mustang = Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here

getYear.call(prius);
getYear.call(mustang);

//New Problem

var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //The window object

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Nothing

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
setTimeout(getUsername.bind(user), 5000);
