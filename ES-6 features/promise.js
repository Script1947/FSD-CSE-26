function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("register data")
            resolve();
        }, 10000)
    })
}
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login here")
            reject("Login failed");
        }, 5000);
    });
}

function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("fetch data from database")
            resolve();
        }, 4000);
    });
}

function displaydata() {

    setTimeout(() => {
        console.log("view user data")

    }, 6000);
}



// register()
//     .then(login)
//     .then(getdata)
//     .then(displaydata)
//     .catch((err) => {
//         console.error("An error:", error);
//     });




// old style of writing code using callback function
 async function test (){
    try{
 await register();
 await login();
 await getdata();
 await displaydata();
    }
 catch(err){
    console.error("An error:", err);
 }
}



console.log("call another applivation")