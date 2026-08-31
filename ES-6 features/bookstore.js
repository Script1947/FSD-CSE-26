 // dynamic creat

// const div = document.createElement("div") ; // yeh dynamically html tag hi bn rhe hai
// div.setAttribute("Class","book") ;
// const image =document.createElement("img") ;
// image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzrPm1JPZB1OoSXLOx-cHi0CqCnROgWuHmDVnS0nt_sw&s=10") ;
// image.setAttribute("height" , " 100px") ;
// image.setAttribute("width" , "100px") ;
// const heading = document.createElement("h2") ;
// heading.innerText ="Price : 465 /-" ;
// const bt = document.createElement("button");
// bt.innerText = "Add to cart";
// div.appendChild(image);
// div.appendChild(heading) ;
// div.appendChild(bt) ;
// const parent = document.getElementById("root");
// parent.appendChild(div) ;






// using function 


// yeh ek array hai iske ander 3 object hai
 const bookdata = [

     { image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZsBKOAMpaBX66Xo37MgiEHZpe4bYX_J4CXwA1xSkTA&s=10" , price :123 , name: "Rich dad Poor Dad"} ,
     { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZsBKOAMpaBX66Xo37MgiEHZpe4bYX_J4CXwA1xSkTA&s=10", price: 123, name: "Rich dad Poor Dad" },
     { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7H3Q5M_YqIpylrb6T3afLUDqPti4f61sxALRFyYG39A&s=10", price: 123, name:" the monkey man" },
     { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBwv7kimDPEWILK46z9rxNoiZe7NCJJAVU1g0jJJgqTQ&s=10", price: 123  , name : " The Flash"} 


 ]
function Book(data) {   
const div = document.createElement("div");
div.setAttribute("class", "book");
const image = document.createElement("img");
image.setAttribute("src", data.image);
image.setAttribute("height" , "100px") ;
image.setAttribute("width" , "100px")
const heading = document.createElement("h3");
heading.innerText = "Price : " + "₹" + data.price  ;
const name =document.createElement("h2");
name.innerText= data.name ;
const bt = document.createElement("button");
bt.innerText = "Add to cart";
const bt1 = document.createElement("button");

div.appendChild(image);
div.appendChild(heading);
div.appendChild(bt); 
div.appendChild(name) ;

return div ;
 }




  const bookstore= bookdata.map((i)=>(
                   Book(i)
 ))
const parent = document.getElementById("root");
for ( let b of bookstore) {
    parent.appendChild(b);
}

