// -----------(1)---------------

// var x = Number(prompt("please enter number"));
// alert("output" + ' '.repeat(3) + x);



// -----------(2)---------------


// var x = Number(prompt("please enter number"));
// if ((x % 3 == 0) && (x % 4 == 0)) {

//     alert("yes");
// } else { alert("no") }

// -----------(3)---------------


// var x = Number(prompt("please enter first number"));
// var y = Number(prompt("please enter second number"));
// if (x > y) {
//     alert("max number is" + " ".repeat(3) + x)
// } else { alert("max number is" + ' '.repeat(3) + y) }


// -----------(4)---------------

// var x = Number(prompt("please enter positive number"));
// if (x >= 0) {
//     alert("your number is  positive number ")
// } else {
//     alert("your number is  negative number ")
// }


// (5) Write a program that take 3 integers from user then print the max element and the min element.


// var x = Number(prompt("please enter first number"));
// var y = Number(prompt("please enter second number"));
// var z = Number(prompt("please enter third number"));
// if (x > y && x > z) {
//     alert("max number is" + " ".repeat(3) + x)
// } else if (y > x && y > z) {
//     alert("max number is" + ' '.repeat(3) + y)
// } else if (z > x && z > y) {
//     alert("max number is" + ' '.repeat(3) + z)
// }

// 6- Write a program that allows the user to insert integer number then check If a number is even or odd

// var x = Number(prompt("please enter  number"));
// if (x % 2 == 0) {
//     alert("your number is  even ")
// } else {
//     alert("your number is  odd ")
// }

// 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

// var x = prompt("please enter  character");
// if ((x == "a" || x == "A") || (x == "e" || x == "E") || (x == "i" || x == "I") || (x == "o" || x == "O") || (x == "u" || x == "U")) {
//     alert("your character is  vowel ")
// } else {
//     alert("your character is  consonant ")
// }


//9- Write aprogram that allows user to insert integer then print allnumbers between 1 to that’ s number

// var x = Number(prompt("please enter  number"));
// for (let y = 1; y <= x; y++) {
//     console.log(y);
// }


//10- Write a program that allows user to insert integer then print a multiplication table up to 12.

// var x = Number(prompt("please enter  number"));
// for (let y = 1; y <= 12; y++) {
//     console.log(y * x);
// }


//11- Write aprogram that allows to user to insert number then print all even numbers between 1 to this number

// var x = Number(prompt("please enter  number"));
// for (let y = 1; y <= x; y++) {
//     if (y % 2 == 0) {
//         console.log(y);
//     }
// }


//12- Write aprogram that take two integers then print the power

// ---------- solution 1 --------

// var x = Number(prompt("please enter  number"));
// var y = Number(prompt("please enter  power"));
// var result = x;
// for (let z = 1; z < y; z++) {
//     result *= x;
// }
// console.log(result);

// ---------  solution 2 ----------

// var x = Number(prompt("please enter  number"));
// var y = Number(prompt("please enter  power"));
// console.log(x ** y);

//  ---------  solution 3 ----------

// var x = Number(prompt("please enter  number"));
// var y = Number(prompt("please enter  power"));
// console.log(Math.pow(x, y));


//12- Write a program to enter marks of five subjects and calculate total, average and percentage


// var a = Number(prompt("please enter marks of subject 1"));
// var b = Number(prompt("please enter marks of subject 2"));
// var c = Number(prompt("please enter marks of subject 3"));
// var d = Number(prompt("please enter marks of subject 4"));
// var e = Number(prompt("please enter marks of subject 5"));
// var total = a + b + c + d + e;
// var average = total / 5;
// var percentage = (total / 500) * 100;
// console.log("the total is " + "".repeat(3) + total + "\n" + "the average is " + "".repeat(3) + average + "\n" + "the percentage is " + "".repeat(3) + percentage + " % ");


//13-Write a program to input month number and print number of days in that month


// var x = Number(prompt("please enter month number"))
// if (12 >= x >= 1) {
//     if (x == 1 || x == 3 || x == 5 || x == 7 || x == 8 || x == 10 || x == 12) {
//         console.log(31);
//     } else if (x == 4 || x == 6 || x == 9 || x == 11) {
//         console.log(30);

//     } else {
//         console.log(28)
//     }
// } else { console.log("not found") }



//14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

// problem

// var a = Number(prompt("please enter marks of Physics"));
// var b = Number(prompt("please enter marks of Chemistry"));
// var c = Number(prompt("please enter marks of Biology"));
// var d = Number(prompt("please enter marks of Mathematics"));
// var e = Number(prompt("please enter marks of Computer"));
// var apercentage = (a / 100) * 100;
// var bpercentage = (b / 100) * 100;
// var cpercentage = (c / 100) * 100;
// var dpercentage = (d / 100) * 100;
// var epercentage = (e / 100) * 100;
// console.log(apercentage + '%' + '\n' + bpercentage + '%' + '\n' + cpercentage + '%' + '\n' + dpercentage + '%' + '\n' + epercentage + '%');


// ******************************** Using switch case*******************************

//15- Write a program to print total number of days in month



// var x = Number(prompt("please enter month number"));
// if (12 >= x >= 1) {
//     switch (x) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             console.log('31 days');
//             break;
//         case 2:
//             console.log('28 days');
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             console.log('28 days');
//             break;

//     }
// } else { alert("please enter suitable month`s number") }





//16- Write a program to check whether an alphabet is vowel or consonant



// var char = prompt("please enter any character ");
// if (typeof(char) == String) {
//     switch (char) {
//         case 'A':
//         case 'E':
//         case 'I':
//         case 'O':
//         case 'U':
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             console.log("this is a vole char ");
//             break;
//         default:
//             console.log("this is a consonants char ");
//             break;
//     }
// } else { alert('this is not character') }



//17- Write a program to find maximum between two numbers

// var x = Number(prompt('please enter first number'));
// var y = Number(prompt(' please enter second number'));
// switch (true) {
//     case (x > y):
//         console.log("the maximum number is " + ' '.repeat(3) + x);
//         break;
//     case (x < y):
//         console.log("the maximum number is " + ' '.repeat(3) + y);
//         break;
//     default:
//         alert('try again');
//         break;
// }



//18- Write a program to check whether a number is even or odd




// var x = Number(prompt('please enter number'));
// switch (true) {
//     case (x % 2 == 0):
//         console.log("the number is " + ' '.repeat(3) + "even");
//         break;
//     case (x % 2 !== 0):
//         console.log("the  number is " + ' '.repeat(3) + "odd");
//         break;
//     default:
//         alert('try again');
//         break;
// }





//19- Write a program to check whether a number is positive or negative or zero


// var x = Number(prompt('please enter number'));
// switch (true) {
//     case (x >= 0):
//         console.log("the number is " + ' '.repeat(3) + "positive");
//         break;
//     case (x < 0):
//         console.log("the  number is " + ' '.repeat(3) + "negative");
//         break;
//     default:
//         alert('try again');
//         break;
// }





// 20- Write a program to create Simple Calculator


// --------------- solution 1------------------------

// // take the operator input
// var operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// var number1 = Number(prompt('Enter first number: '));
// var number2 = Number(prompt('Enter second number: '));

// var result;

// // using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
// } else if (operator == '-') {
//     result = number1 - number2;
// } else if (operator == '*') {
//     result = number1 * number2;
// } else {
//     result = number1 / number2;
// }

// // display the result
// // String Interpolation in JavaScript   https://dmitripavlutin.com/string-interpolation-in-javascript/
// console.log(`${number1} ${operator} ${number2} = ${result}`);



// --------------- solution 2------------------------


var num1 = Number(prompt("please enter first number"));
var operatin = prompt("please enter arithmetic operator");
var num2 = Number(prompt("please enter second number"));
if (typeof(num1) == "number" && typeof(num2) == "number") {

    if (operatin == ('+' || '-' || '*' || '/' || '%')) {


        switch (operatin) {
            case '+':
                console.log(num1 + num2);

                break;
            case '-':
                console.log(num1 - num2);

                break;
            case '*':
                console.log(num1 * num2);

                break;
            case '/':
                console.log(num1 / num2);

                break;
            case '%':
                console.log(num1 % num2);

                break;


            default:
                break;
        }
    } else { alert("please enter only arithmetic operator  - + * / %") }
} else { alert("please enter only numbers") }