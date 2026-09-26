// function sum(a,b){
//     return (a+b);
// }
// console.log("sum =" , sum(12))



// function sum(a=0, b=0) {   // default value case
//     return (a + b);
// }
// console.log("sum =", sum(12))
// console.log("sum =", sum(12 ,34))
// console.log("sum =", sum())



// arrow function

// const sum=(a=0, b=0) => a + b;
//  console.log("sum =", sum(12))
// console.log("sum =", sum(12, 34))
// console.log("sum =", sum())



// array

const num =[1,2,3,4,5,6,7,8,9];

//filter
const even=num.filter((i)=> (i%2==0));
console.log( "num =" ,num)
console.log( "even number =" , even)


//map
const square =even.map((i)=>(i*i));
console.log("square=", square)


//reduce
const sum = square.reduce((s,i) => (s+i))
 console.log("sum =", sum)