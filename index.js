// const a = 10;

// const b = true;

// console.log(b);
// console.log (a);

// function test() {
//     console.log(a);
//     console.log(b);
// }

function findItemIndex(arr, t) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]=== t)  {
        return i;
    }
  }
  return -1;
}
let index = findItemIndex([-5,2,10,4,6],10);
console.log (index);


// search alogrithm
// give an array of "n" elements and a target "t" find the index of 't' in the array. Return -1 if the target element is not found.

//case1 ->arr = [-5,2,10,4,6], t =10 
//case1 ->arr = [-5,2,10,4,6], t = 6
//case1 ->arr = [-5,2,10,4,6], t = 20

function indexElement(arr,t) {
for(let i =0; i<arr.length; i++) {
  if(arr[i]=== t) {
    return i;
  }   
}return -1;

}
let elementIndex =indexElement([-5,2,10,4,6],10);
console.log(elementIndex)

let case2 =indexElement([-5,2,10,4,6],6);
console.log(case2)

let case3 =indexElement([-5,2,10,4,6],20);
console.log(case3)





// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperWork(n,m){
if (n<0||m<0){
  return 0;
}else {
  return (n*m)
}
}
let paperWorked = paperWork(5,10);
console.log(paperWorked);



// Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number){
if(number>0){
  return (-number);
}else if(number<0){
  return (+number);
}else {
  return 0;
}
}
let oppositeNumber = opposite(-45);
console.log(oppositeNumber);


//or
function opposites(number){
return(-1*number)
}
let oppositeNumbers = opposites(-4557678.09364873);
console.log(oppositeNumbers);



// A palindrome is a word or phrase that reads the same backward as forward. Write a
// function that checks for this. You function should return a boolean


//ALGORITHM 
/*
*Get the strings or numbers from the user.
*Take a temporary variable that holds the numbers.
*Reverse the given number.
*Compare the original number with the reversed number
*If the temporary and original number are same, it the *number or string is a Palindrome.
*Else the given string or number is not the Palindrome.
*/

function palindrome(str){
let reverseWord = str.split("").reverse().join("");
if(reverseWord===str){
  return (true +" "+ str+" " +"is a palindrome word");
}else{
  return(false +" "+ str+" " +"is not a palindrome word")
}
}
let checkPalindrome = palindrome("madam");
console.log(checkPalindrome);


function printNumber(number) {
  for(let i =1; i <= number; i++) {
  //  console.log(i);
      if (i % 2 ==0 && i % 3 ==0) {
        console.log(i +" Fizz Buzz")
      }
        else if (i % 2 == 0) {
        console.log(i+" Fizz");
      } else if (i % 3 == 0) {
        console.log(i + " Buzz");
      } else{
        console.log (i);
      }
  }
}
let printNum = printNumber(20);
console.log(printNum);
