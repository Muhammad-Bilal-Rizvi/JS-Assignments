
// 1. Declare an empty array using JS literal notation to store
// student names in future.

// let studentNames = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

// let studentNames = {};

// 3. Declare and initialize a strings array.

// let names = ['ali', 'fahad', 'faizan', 'salman'];

// 4. Declare and initialize a numbers array.

// let numberArray = [10, 20, 30, 40, 50];

// 5. Declare and initialize a boolean array.

// let boolArray = [true, false];

// 6. Declare and initialize a mixed array.

// let mixedArray = [10, 'ali', true,];

// 7. Declare and Initialize an array and store available mobile
// networks in Pakistan.

// let mobileNetwork = ['ufone', 'jazz', 'zong', 'telenore'];

// 8. Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// M. Phil., PhD). Show the listed qualifications in your browser
// like:

// let qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD'];
// document.querySelector('qualifications');


// 9. Declare and initialize an empty array to store top movies of 
// 2015. Add movies one by one in an array. Display the elements 
// & length of array in your browser. (Use array’s length method)

// let moviesArray = [];
// moviesArray[0] = 'Avengers: Age of Ultron';
// moviesArray[1] = 'Spectre';
// moviesArray[2] = 'Jurassic World';
// moviesArray[3] = 'Inside Out';

// console.log('Top movies of 2015');
// console.log(moviesArray);
// console.log(moviesArray.length);

//10. Declare and Initialize an array with your favorite cars. Show 
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// d. Car at last index of the array

// let favoriteCars = ["Audi", "Volvo", "Ford", "Lamborghini"];

// console.log("First index of the array: " + 0);

// console.log("Car at the first index of the array: " + favoriteCars[0]);

// console.log("Last index of the array: " + (favoriteCars.length - 1));

// console.log("Car at the last index of the array: " + favoriteCars[favoriteCars.length - 1]);


//11. Write a program to store 3 student names in an array. Take
// another array to store score of these three students. Assume
// that total marks are 500 for each student, display the scores &
// percentages of students like:

let studentName = ['Michael', 'John', 'Tony'];
let studentMarks = [320, 230, 480];

for (let i = 0; i < studentName.length; i++) {
    // console.log(`Score of Michael is 320. Percentage: 64%`);
    console.log(`Score of ${studentName[i]} is ${studentMarks[i]}. Percentage: ${studentMarks[i]/500 * 100}%`);
}