function register() {
    setTimeout(()=>{
        console.log("register data")
    },10000)
}
function login() {

setTimeout(() => {
    console.log("login here")
}, 5000);    
}

function getdata() {
    setTimeout(() => {
        console.log("felch data form data base")

    },4000)
}

function displaydata() {
    setTimeout(()=>{
        console.log("view user data")

    },6000)
}


register()
login()
getdata()
displaydata()
console.log("call another applivation")