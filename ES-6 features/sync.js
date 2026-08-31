function register (){
    waitfordelay(10000)
 console.log("register data")
}
function login() {
    waitfordelay(5000)
    console.log("login here")
}

function getdata() {
    waitfordelay(4000)
    console.log("felch data form data base")
}

function displaydata() {
    waitfordelay(6000)
    console.log("view user data")
}

function waitfordelay(delay){
    const mt = Date.now()+delay ;
    while(Date.now()<mt){
        
    }
}
register()
login()
getdata()
displaydata()
console.log("call another applivation")