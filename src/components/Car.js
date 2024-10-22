import { useOutletContext, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function Car() {
    const [car, setCar] = useState(null)
    const [displayForm, setDisplayForm] = useState(false)
    const [customBidValue, setCustomBidValue] = useState("")
    const {id} = useParams()
    const {updateCar} = useOutletContext()
    
    useEffect(() => {
        fetch(`http://localhost:5555/cars/${id}`)
        .then(response => response.json())
        .then(carData => setCar(carData))
    },[])

    function handleBid(bidAmount) {
        const updatedCar = {bids: car.bids + 1, current_bid_price: car.current_bid_price + bidAmount}
        updateCar(updatedCar, car.id)
        setCar({...car, ...updatedCar})
    }

    function toggleDisplayForm() {
        setDisplayForm(!displayForm)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (customBidValue > 500) {
            handleBid(Number(customBidValue))
            toggleDisplayForm()
        }
        else {
            window.alert("Please place a bid higher than $500!")
        }

    }

    function handleChange(event) {
        setCustomBidValue(event.target.value)
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
            <div className="placeBid">
                <button onClick={() => handleBid(500)}>Place $500 Bid</button>
                {displayForm ? 
                <form onSubmit={handleSubmit}>
                    <input type="number" placeholder="Enter Bid Here" onChange={handleChange} value={customBidValue} required/>
                    <button type="submit">Submit Bid</button>
                    <button onClick={toggleDisplayForm}>Discard Bid</button>
                </form>
                :
                <button onClick={toggleDisplayForm}>Place Custom Bid</button>}
            </div>
        </div>
    )
}

export default Car