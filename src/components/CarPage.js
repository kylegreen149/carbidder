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
            searchWords.some(word =>
                car.color.toUpperCase().includes(word) ||
                car.year.toString().includes(word) ||
                car.brand.toUpperCase().includes(word) ||
                car.model.toUpperCase().includes(word) ||
                car.body_style.toUpperCase().includes(word) ||
                car.type.toUpperCase().includes(word)
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
            <div>
                {carComponents}
            </div>
        </>
    )
}

export default CarPage