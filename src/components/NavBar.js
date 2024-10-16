import { NavLink } from "react-router-dom"
import Search from "./Search.js"


function NavBar({searchText, updateSearchText}) {
    return (
        <nav className="navBar">
            <ul>
                <li className="tabs"><NavLink to="/">All Cars</NavLink></li>
                <li className="tabs"><NavLink to="/add_car">Add Car to Auction</NavLink></li>
                <li className="tabs"><NavLink to="/my_bids">My Bids</NavLink></li>
                <span><Search updateSearchText={updateSearchText} searchText={searchText}/></span>
            </ul>
        </nav>
    )
}

export default NavBar