import { useOutletContext } from "react-router-dom"
import { useState } from "react"
import Filter from "./Filter"
import CarList from "./CarList"

function CarPage() {
    const {cars, searchText} = useOutletContext()
    const [checkedYears, setCheckedYears] = useState([])

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

    console.log(checkedYears)

    function handleChange(event) {
        if (event.target.checked === true) {
            setCheckedYears([...checkedYears, Number(event.target.value)])
        }
        else {
            const filteredYears = checkedYears.filter((year) => {
                return year !== Number(event.target.value)
            })
            setCheckedYears(filteredYears)
        }
    }

    const checkedFilteredCars = cars.filter(car => {
        if (checkedYears.length === 0) {
            return true
        } 
        else {
            const yearIsFound = checkedYears.find(year => {
                return year === car.year
            })
            if (yearIsFound === undefined) {
                return false
            } 
            else {
                return true
            }
        }
    }) 

    const carComponents = checkedFilteredCars.map(car => {
        return <CarList key={car.id} car={car} />
    })
    return (
        <>
            <Filter handleChange={handleChange}/>
            {/* <Search updateSearchText={updateSearchText} searchText={searchText}/> */}
            <div id="carList">
                {carComponents}
            </div>
        </>
    )
}

export default CarPage