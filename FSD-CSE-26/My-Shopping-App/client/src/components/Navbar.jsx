import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className = "navbar">
   <Link to ="/ " > HOME </Link>
      <Link to="/mycart " > mycart </Link>
      <Link to="/myorder " > my orders </Link>
      <Link to="/settings " > Settings </Link>
      <Link to="/myprfile " > My Profile </Link>
      <Link to="/logout " > Logout </Link>


    </div>
  )
}

export default Navbar
