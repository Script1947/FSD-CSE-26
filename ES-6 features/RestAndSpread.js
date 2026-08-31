const a = [1,2,3,4] ;
const b = [5, 6, 7, 8];
const c = [...a ,...b];
console.log("a=" ,a);
console.log("b=", b);
console.log("c=", c);

const student= {
    Name :"xyz",
    branch : "CSE",
    age : 41 
}

const newStudent ={
    ...student,branch: "IT"
}
 console.log("student=", student)
console.log(" new student=", newStudent)