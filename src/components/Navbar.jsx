import { Link, Outlet } from "react-router-dom";
import "../styles/Navbar.scss";
import Logo from "../assets/Left.png"

function Navbar(){

    return(
        <div className="navbar">

            <nav>
                <ul className="logo">
                    <img src={Logo} alt="logo" width={140} />
                </ul>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/project">Project</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
            
        </div>
    )

}
export default Navbar;