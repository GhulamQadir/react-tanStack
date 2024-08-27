import { NavLink } from "react-router-dom";
import './links.css'


function NavLinks() {
    return (
        <ul>
            <li><NavLink className="links" to={'/'}>Home</NavLink></li>
            <li><NavLink className="links" to={'/about'}>About</NavLink></li>
            <li><NavLink className="links" to={'/contact'}>Contact</NavLink></li>
        </ul >
    )
}
export default NavLinks;