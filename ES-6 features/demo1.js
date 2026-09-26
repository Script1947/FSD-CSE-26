function sum(a=0,b=0){
    return (a+b) ;
}
const add = (...num)=>{     // tripel dot operator works with array 
// const sum=num.reduce( (i,s)=>(i+s))
let sum =0 ;
for(let i of num){
    sum =sum+i
}
return sum ;
}
// export default sum;
export {sum , add };