
//Q1
// function printHello() {
//     console.log("Hello-world");
//     console.log("Hello-world");
//     console.log("Hello-world");
//     console.log("Hello-world");
//     console.log("Hello-world");
//     console.log("Hello-world");
//     console.log("Hello-world");
//     console.log("Hello-world");
//     console.log("Hello-world");
// }
// printHello();

// Q2
// const date = new Date();

// const n = date.toDateString();

// const time = date.toLocaleTimeString();

// console.log('Date: ' + n);
// console.log('Time: ' + time);

// Q3
// function greetUser(firstName, lastName) {
//     let fullName = `Hello ${firstName} ${lastName}`;
//     console.log(fullName);
// }
// greetUser('Mr', "Ali");

// Q4
// function addNumber(num1, num2) {
//     var sum = num1 + num2;
//     console.log(sum);
// }
// addNumber(10,10);

// Q5
// function calculate(num1, num2, operator) {
//     var result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             // Check if dividing by zero
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                 result = "Cannot divide by zero";
//             }
//             break;
//         default:
//             result = "Invalid operator";
//     }
//     return result;
// }

// var num1 = parseInt(prompt("Enter the first number: "));
// var num2 = parseInt(prompt("Enter the second number: "));
// var operator = prompt("Enter the operator (+, -, *, /): ");

// var result = calculate(num1, num2, operator);
// console.log("Result: " + result);


// Q6
// function getSquare(number) {
//     let getValue = number * number;
//     console.log(getValue);
// }
// getSquare(5);   //25

// Q7
// function factorial(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     }
//     let result = 1;
//     for (let i = 2; i <= number; i++) {
//         result *= i;
//     }
//     return result;
// }
// const num = parseInt(prompt("Enter a number to compute its factorial: "));
// const result = factorial(num);
// console.log(`Factorial of ${num} is: ${result}`);

// Q8
// function displayCounting(start, end) {
//     if (start > end) {
//         document.write("Start number should be less than or equal to end number.");
//         return;
//     }
//     for (let i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }
// const startNum = parseInt(prompt("Enter the start number: "));
// const endNum = parseInt(prompt("Enter the end number: "));
// displayCounting(startNum, endNum);



//9.Write a nested function that computes hypotenuse of a right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function square(val){
//     return val * val;
// }
// function hypo(val1, val2){
//     return square(val1)+square(val2)
// }
// console.log(hypo(2,2))

