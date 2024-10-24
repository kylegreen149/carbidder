import { useOutletContext, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Car() {
    const [car, setCar] = useState(null)
    const [displayForm, setDisplayForm] = useState(false)
    const [customBidValue, setCustomBidValue] = useState("")
    const {id} = useParams()
    const navigate = useNavigate()
    const {updateCar} = useOutletContext()
    
    useEffect(() => {
        fetch(`http://localhost:5555/cars/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Car not found');
                }
                return response.json();
            })
            .then(carData => setCar(carData))
            .catch(error => {
                console.error(error);
                navigate('/error');
            });
    }, [id, navigate]);

    function postBids() {
        fetch("http://localhost:5555/my_bids", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({car_id: car.id})
        })
        .then(response => response.json())
        .then(newBid => console.log(newBid))
    }

    function handleBid(bidAmount) {
        const updatedCar = {bids: car.bids + 1, current_bid_price: car.current_bid_price + bidAmount}
        updateCar(updatedCar, car.id)
        setCar({...car, ...updatedCar})
        postBids()
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
        <div style={{padding: "16px"}} className="car-page"> 
            <img src={car.display_image} alt={`${car.year} ${car.brand} ${car.model}`} style={{height: "100%", width: "100%" }} className="car-image"/>
            <div className="car-details" style={{height: "50%", width: "50%"}}>
                <h2 id="carName" style={{marginTop: "0px", marginBottom: "0px"}}>{car.year} {car.brand} {car.model}</h2>
                <div className="car-description" style={{margin: "8px"}}>
                    <div style={{float: "left"}}>
                        <p><b>Color: </b>{car.color}</p>
                        <p><b>Body Style: </b>{car.body_style}</p>
                        <p><b>Type: </b>{car.type}</p>
                        <p><b>Transmission: </b>{car.transmission}</p>
                        <p><b>Mileage: </b> {car.mileage} mi.</p>
                        <p><b>Top Speed (mph): </b> {car.top_speed}</p>
                        <p><b>Accident History: </b>{car.accident_history}</p>
                        <p><b>Current Condition: </b>{car.current_condition}</p>
                        <p><b>Modifications: </b>{car.modifications}</p>
                        <p><b>Bids: </b>{car.bids}</p>
                        <p><b>Starting Bid Price: </b>${car.starting_bid_price}</p>
                        <p><b>Current Bid Price: </b>${car.current_bid_price}</p>
                    </div>
                </div>
            </div>
            <div className="car_report" style={{ width: "100%" }}>
                <p><b>Owner's Car Report</b></p>
                <p id="userCarReport">{car.car_report}</p>
            </div>
            <div className="placeBid">
                <button onClick={() => handleBid(500)}>Place +$500 Bid</button>
                {displayForm ? 
                <form onSubmit={handleSubmit}>
                    <input className="customBid" type="number" placeholder="Enter a Bid Greater than $500 Here" style={{width: "59%"}} onChange={handleChange} value={customBidValue} required/>
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