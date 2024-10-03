import { useOutletContext } from "react-router-dom"

function CarList({car}) {

    const {updateCar} = useOutletContext()
    

    function handleClick() {
        
        const updatedCar = {bids: car.bids + 1, current_bid_price: car.current_bid_price + 500}
        updateCar(updatedCar, car.id)
    }
    
    return (
        <>
            <div>
                <img src={car.image} alt={car.name} style={{height: "50%", width: "50%" }}/>
                <h2>{car.name}</h2>
                <p><b>Mileage: </b> {car.mileage} mi.</p>
                <p><b>Top Speed (mph): </b> {car.top_speed}</p>
                <p><b>Accident History: </b>{car.accident_history}</p>
                <p><b>Modifications: </b>{car.modifications}</p>
                <p><b>Bids: </b>{car.bids}</p>
                <p><b>Starting Bid Price: </b>${car.starting_bid_price}</p>
                <p><b>Current Bid Price: </b>${car.current_bid_price}</p>
                <button onClick={handleClick}>Place $500 Bid</button>
            </div>
            <br></br>
        </>
    )
}

export default CarList