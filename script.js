//a variable myAge
let myAge = 21;
//early dog years

let earlyYears = 2;
//multiplying dog years by 10.5
 earlyYears *= 10.5;

//getting later years
let laterYears = myAge - 2;
//calculating number of dog years  accounted by the laterYears
laterYears *= 4;

//logging early and later years to the console
console.log(earlyYears);
console.log(laterYears);
//getting  my age in dog years

let myAgeInDogYears = earlyYears + laterYears;

//my name in lowercase
let myName = 'WANGARI'.toLowerCase();
//printing my name, my age and my age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);