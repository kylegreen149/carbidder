import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function Filter({handleChange}) {
    const {cars} = useOutletContext()
    const [selectedColor, setSelectedColor] = useState("")


    return (
        <div className="dropdown">
            <button className="dropbtn">Years</button>
            <div className="dropdown-content">
                <label><input type="checkbox" onChange={handleChange} value="2023"/> 2023</label>
                <label><input type="checkbox" onChange={handleChange} value="2022"/> 2022</label>
                <label><input type="checkbox" onChange={handleChange} value="2021"/> 2021</label>
                <label><input type="checkbox" onChange={handleChange} value="2020"/> 2020</label>
            </div>
        </div>
    )
}

export default Filter