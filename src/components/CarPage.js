import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import Search from "./Search"
import CarList from "./CarList"

function CarPage() {
    const {cars} = useOutletContext()
    const [searchText, setSearchText] = useState("")

    const filteredCars = cars.filter(car => {
        const searchWords = searchText.toUpperCase().split(" ") // Split search text into words to include spaces in search

        return (
            // Uses .some() to map over the data to see if anything matches with anything in the search bar
            searchWords.some(word =>
                car.color.toUpperCase().includes(word) || // Searches car color OR
                car.year.toString().includes(word) || // Searches car year OR
                car.brand.toUpperCase().includes(word) || // Searches car brand OR
                car.model.toUpperCase().includes(word) || // Searches car model OR
                car.body_style.toUpperCase().includes(word) || // Searches car body style OR
                car.type.toUpperCase().includes(word) // Searches car type
            )
        )
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
            <div id="carList">
                {carComponents}
            </div>
        </>
    )
}

export default CarPage