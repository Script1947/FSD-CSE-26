function register(cb) {
    setTimeout(() => {
        console.log("register data")
        cb();
    }, 10000)
}
function login(cb) {

    setTimeout(() => {
        console.log("login here")
                cb();

    }, 5000);
}

function getdata(cb) {
    setTimeout(() => {
        console.log("felch data form data base")

    }, 4000)
}

function displaydata(cb) {
    setTimeout(() => {
        console.log("view user data")

    }, 6000)
}


register(
    ()=>{
        login(
            ()=>{
                getdata(
                    ()=>{
                        displaydata();
                    }
                )
            }
        )
    }
)


console.log("call another applivation")