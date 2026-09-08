
import Item from "./item"
const Home = () => {
  const itemData = [
    { image: " ", title: "ReactJs", price: "₹ 567" },
    { image: " ", title: "NodeJs", price: "₹ 567" },
    { image: " ", title: "ExpressJs", price: "₹ 567" },
    { image: " ", title: "ReactJs", price: "₹ 567" },
    { image: " ", title: "ExpressJs", price: "₹ 567" },
    { image: " ", title: "ReactJs", price: "₹ 567" }
  ]
  return (
    <div className="home">
   {
    itemData.map((i,index)=>{
      return<Item key= {index} props={i}/>
    })
   }
    </div>
  )
}

export default Home
