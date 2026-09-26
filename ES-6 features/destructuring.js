const num =[1,2,3,4,5];
// const a =num[0];
// const b = num[1];
// const c = num[2];
// const d = num[3];
// const e = num[4]; 


// array destructuring
const [a,b,c,d,e] = num ;
console.log("a=", a);
console.log("b= ",b);
console.log("c= ",c);
console.log("d= ",d);
console.log("e= ",e);




//                        obect destructring
const student = {
    name: "sachin",
    branch: "CSE",
    age: 41
}

// const name=student.name; 
// const age =student.age;
// const branch = student.branch;


const { name, age , branch} = student ;

// console.log("name= " ,name);
console.log(`my name is ${name} this is my name`)
console.log("age= ",age);
console.log("branch= ",branch);