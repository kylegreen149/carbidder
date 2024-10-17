import { useOutletContext, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function Car() {
    const [car, setCar] = useState(null)
    const {id} = useParams()
    const {updateCar} = useOutletContext()
    
    useEffect(() => {
        fetch(`http://localhost:5555/cars/${id}`)
        .then(response => response.json())
        .then(carData => setCar(carData))
    },[])

    function handleClick() {
        const updatedCar = {bids: car.bids + 1, current_bid_price: car.current_bid_price + 500}
        updateCar(updatedCar, car.id)
        setCar({...car, ...updatedCar})
    }

    if (car === null) {
        return null
    }

    return (
        <div style={{padding: "16px"}}>
            <img src={car.image} alt={`${car.year} ${car.brand} ${car.model}`} style={{height: "50%", width: "50%" }}/>
            <h2>{car.year} {car.brand} {car.model}</h2>
            <p><b>Color: </b>{car.color}</p>
            <p><b>Body Style: </b>{car.body_style}</p>
            <p><b>Type: </b>{car.type}</p>
            <p><b>Mileage: </b> {car.mileage} mi.</p>
            <p><b>Top Speed (mph): </b> {car.top_speed}</p>
            <p><b>Accident History: </b>{car.accident_history}</p>
            <p><b>Modifications: </b>{car.modifications}</p>
            <p><b>Bids: </b>{car.bids}</p>
            <p><b>Starting Bid Price: </b>${car.starting_bid_price}</p>
            <p><b>Current Bid Price: </b>${car.current_bid_price}</p>
            <button onClick={handleClick}>Place Bid</button>
        </div>
    )
}

export default Car