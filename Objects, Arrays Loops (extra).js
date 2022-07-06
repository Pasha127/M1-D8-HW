/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

//let exercise01 = [1,2,3,4,5];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let exercise02 = {
    "Name":"Paul",
    "Surname":"Levitsky",
    "Email": "pasha.account@gmail.com",
    "Address":"Prague",
    "Age":30
}
console.log(exercise02);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

exercise02.canDrive = true;
console.log(exercise02);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete exercise02.Age;
console.log(exercise02);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let exercise05 = {
    Name: 'Paul',
    Surname: 'Levitsky', 
    Email: 'pasha.account@gmail.com', 
    Address: 'Prague', 
    Age: 30
}
let emailsDifferent = toString(exercise02.Email) === toString(exercise05.Email);
console.log("Emails different?", emailsDifferent);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* let totalShoppingCart=56;
let minimumShippingTotal =50
let cost = totalShoppingCart>minimumShippingTotal? totalShoppingCart : (totalShoppingCart+10);
console.log(cost);  */

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let preSaleShoppingCart=56;
let sale = .2;
let salePrice = preSaleShoppingCart * sale;
let minimumShippingTotal =50
let cost = salePrice>minimumShippingTotal? salePrice : (salePrice+10);
console.log(cost); 

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let car01 = {
    "Make":"BMW",
    "Model":"E34",
    "licensePlate":"N0Signa15"
}
let car02={};
Object.assign(car02,car01);
car02.licensePlate ="60F457";
let car03={};
Object.assign(car03,car01);
car03.licensePlate ="N02S10W";
let car04={};
Object.assign(car04,car01);
car04.licensePlate ="1110101";
let car05={};
Object.assign(car05,car01);
car05.licensePlate ="C47ND0G";
let car06={};
Object.assign(car06,car01);
car06.licensePlate ="H1C0P5";
console.log(car01,"\n",car02,"\n",car03,"\n",car04,"\n",car05,"\n",car06);




/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent = [car01,car02,car03,car04,car05,car06];

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent = carsForRent.slice(1,(carsForRent.length-1));
console.log(carsForRent[0],carsForRent[3]);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log("The car is an object, the license plate is a string and so is the brand.")

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/


let car07={};
Object.assign(car07,car01);
car07.licensePlate ="1337C4R";
let car08={};
Object.assign(car08,car01);
car08.licensePlate ="W473RBUG";
let car09={};
Object.assign(car09,car01);
car09.licensePlate ="B47M4N";
let carsForSale = [{car07},{car08},{car09}];
console.log(carsForSale[0],carsForSale[1],carsForSale[2]);
let totalCars = carsForSale.length + carsForRent.length;
console.log(totalCars, "cars total.");


/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for(i=0;i<carsForSale.length;i++){
    console.log(`Car #${i+1} for sale is:`, carsForSale[i]);
}
