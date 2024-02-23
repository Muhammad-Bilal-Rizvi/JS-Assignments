
// Write Program ?
// user sa loga uski age| agar age uski 15 sa choti hogi to usko gym ma admission 
// nahi milaiga agar uski age 15 sa 18 ka darmiyaan ma hogi to "500 zyada daa or aja gym maa" 
// or jo 18 sa bara hoga usko gym ma admission milaiga. agar user ki age 50 sa uper hogi to usko 
// bhi admission nahi dena ha

var age = +prompt('Enter your age');
if (age < 15) {
    console.log('No entry in gym');
} else if (age >= 15 && age <= 18) {
    console.log('give 500 and come to gym');
} else if (age > 18 && age < 50) {
    console.log('get admission in gym');
}
else {
    console.log('No admission in gym');
}


// let age = parseInt(prompt("Enter your age:"));

// if (age <= 15) {
//     console.log("Sorry, you are too young for gym admission.");
// } else if (age > 15 && age <= 18) {
//     console.log("You are eligible for gym admission, but you need to pay an extra 500 and come to the gym.");
// } else if (age > 18 && age <= 50) {
//     console.log("Congratulations! You are eligible for gym admission.");
// } else {
//     console.log("Sorry, we cannot admit individuals aged 50 and above.");
// }

