// This is a simple JavaScript function that adds two numbers together



function add(a, b) {              // Defines a function named 'add' that takes two parameters, a and b
    return a + b;                // Adds a and b together and returns the result to the caller
}                                // Ends the function definition

const result = add(2, 3);        // Calls the add function with 2 and 3, and stores the returned value (5) in result
console.log(result);             // Logs the value of result to the console (5)



// This function calculates the total price given a price and quantity

function calculatePrice(price, quantity) { // Defines a function named 'calculatePrice' that takes price and quantity as parameters
    return price * quantity;               // Multiplies price by quantity and returns the total price
}                                         // Ends the function definition

const total = calculatePrice(9.99, 3);     // Calls calculatePrice with 10 and 4, storing the result (40) in total
console.log(total);                        // Logs the value of total to the console (29.97)


// This function checks if a user can checkout based on the number of items in their cart

function canCheckout(cartItems) { // Defines a function named 'canCheckout' that takes cartItems as a parameter
    return cartItems > 0; // Returns true if cartItems is greater than 0, otherwise returns false

}


let cartItems = prompt("Enter the number of items in the cart:"); // Prompts the user to enter the number of items in their cart
console.log(canCheckout(cartItems)); // true



// This function validates if a user is old enough to access a certain feature

function validateAge(age) { // Defines a function named 'validateAge' that takes age as a parameter
    if (age < 18) { // Checks if age is less than 18
        return "Too Young"; // Returns "Too Young" if age is less than 18
    }
    return "Access Granted"; // Returns "Access Granted" if age is 18 or older
    
}

// This function validates if a user is old enough to access a certain feature

function validateAge(age) { // Defines a function named 'validateAge' that takes age as a parameter
    if (age < 18) { // Checks if age is less than 18
        return "Too Young"; // Returns "Too Young" if age is less than 18
    }
    return "Access Granted"; // Returns "Access Granted" if age is 18 or older
    
}


function checkGoal (views, goal) { // Defines a function named 'checkGoal' that takes views and goal as parameters
    return views >= goal; // Returns true if views is greater than or equal to goal, otherwise returns false
}

// checkGoal(120, 100); // true

console.log(checkGoal(120, 100)); // true





