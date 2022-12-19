// WelCome to JavaScript Lecture!
// Stage One will Be completed Today!

// Datatypes => number, string, boolean, Null and undefined.
// Array and Object

// OPerators
// Condtions
// If, If else, Switch and Ternary Cond
// Loops => do while, while loop and For Loop
// Math and Date
// Array and method => Assignment to write article
// for of  => Array and for in => Object

// Function=> block of function , when require we call that and that perform the action and return the result
// Topic : Function

// function sum(value1, value2) {
    // definition of function
    // let num1;
    // let num2;
    //  console.log('addition of the two value', value1 + value2);
// }

// sum(120, 25); // calling of the function
// sum(12, 20);
// sum(45, 40);
// sum(21, 30);
// sum(26, 35);
// sum(18, 31);
// sum(28, 39);
// sum(15, 45);

// Normal function and funtion with parameter

// function with return type


// function sum(val1, val2){
//     let result= (val1 + val2);
//     return result;
// } 

// let add = sum(15, 30);
// console.log(add);

// function subtract(val1, val2){
//     let result = (val1 - val2);
//     return result;
// }

// let minus = subtract(20, 10);
// console.log(minus)

// function multiplication(val1, val2){
//     let result = ( val1*val2);
//     return result;
// }

// let multiply = multiplication(10, 5);
// console.log(multiply);

// function division (val1, val2){
//     let result = (val1 / val2);
//     return result;
// }

// let devide = division(50, 5);
// console.log(devide);

// function module(val1, val2){
// let result = (val1 % val2);
// return result;
// }

// let mod = module(100, 10);
// console.log(mod);


// String

// function URL (url, domain){
//     let con = 'https://';
//     let result = (con + url + domain);
//     return result;
// }
// let site = URL('azharfirstproject', '.netlify.app');
// console.log(URL('azharfirstproject', '.netlify.app'));
// console.log(site);


// function sum(arr){
//     let sum =0;
//     for (let i=0; i<arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// let sumarray=[1,2,3,4,5,6,7,8];
// let add = sum(sumarray);
// console.log(add);

// function azhar (){
//     // arguments
//    let sum =0;
//    for (let i=0; i<arguments.length; i++){
//     sum = sum+arguments[i];
//    }
// return sum;
// }

// console.log(azhar(10,11,45,23,88,75,));

// arrow function

// let azhar = (val1, val2) => {
//     console.log('mai bhagwan nhi hun',val1 , val2);
// };

// azhar(1, 2);

// let azhar = () => {
//     console.log('kuch bhi');
// };
// azhar();


// object
let username ={
    firstname :'azhar',
    lastname:'ansari',
    role: 'admin',
    logincount:25,
};

// console.log(username);
// console.log(username.role);
// username.role = 'metor';
// console.log(username.role);
// console.log(username);

// for in

for(let x in username){
    console.log(username[x]);
}