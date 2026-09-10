
import { Outlet } from "react-router-dom" // use child api
const Home = () => {
  return (
    <div className="home">
   <Outlet></Outlet>
    </div>
  )

}
export default Home
