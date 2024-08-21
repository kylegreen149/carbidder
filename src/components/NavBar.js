import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <NavLink to="/">All Cars</NavLink>
            <NavLink to="/add_car">Add Car to Auction</NavLink>
            <NavLink to="/mission">Mission</NavLink>
        </nav>
    )
}

export default NavBar