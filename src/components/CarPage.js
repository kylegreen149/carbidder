import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import Search from "./Search"
import CarList from "./CarList"

function CarPage() {
    const {cars} = useOutletContext()
    const [searchText, setSearchText] = useState("")

    const filteredCars = cars.filter(car => {
        return car.name.toUpperCase().includes(searchText.toUpperCase())
    })

    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    const carComponents = filteredCars.map(car => {
        return <CarList key={car.id} car={car} />
    })
    return (
        <>
            <Search updateSearchText={updateSearchText} searchText={searchText}/>
            <div>
                {carComponents}
            </div>
        </>
    )
}

export default CarPage