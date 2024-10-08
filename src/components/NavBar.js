import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navBar">
            <ul>
                <li><NavLink to="/">All Cars</NavLink></li>
                <li><NavLink to="/add_car">Add Car to Auction</NavLink></li>
                <li><NavLink to="/mission">Mission</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar