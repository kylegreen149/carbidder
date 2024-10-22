import { useOutletContext, useNavigate } from "react-router-dom"
import Card from 'react-bootstrap/Card';

function CarList({car}) {
    const navigate = useNavigate()

    function viewCarDetails() {
      navigate(`/cars/${car.id}`)
    }
    
    return (
      <div id="cardStyle" onClick={viewCarDetails}>
        <Card style={{ width: '28rem', padding: "8px", cursor: "pointer"}}>
          <Card.Img src={car.image} alt={`${car.year} ${car.brand} ${car.model}`} style={{height: "280px", width: "27rem", borderRadius: "10px"}} />
          <Card.Body>
            <Card.Title style={{fontWeight: "bold", fontSize: "20px"}}>{car.year} {car.brand} {car.model}</Card.Title>
            <Card.Text>
              <b>Mileage: </b> {car.mileage} mi.
            </Card.Text>
            <Card.Text>
              <b>Bids: </b>{car.bids}
            </Card.Text>
            <Card.Text>
              <b>Starting Bid Price: </b>${car.starting_bid_price}
            </Card.Text>
            <Card.Text>
              <b>Current Bid Price: </b>${car.current_bid_price}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );


    // return (
    //     <>
    //         <div>
    //             <img src={car.image} alt={`${car.year} ${car.brand} ${car.model}`} style={{height: "50%", width: "50%" }}/>
    //             <h2>{car.year} {car.brand} {car.model}</h2>
    //             <p><b>Color: </b>{car.color}</p>
    //             <p><b>Body Style: </b>{car.body_style}</p>
    //             <p><b>Type: </b>{car.type}</p>
    //             <p><b>Mileage: </b> {car.mileage} mi.</p>
    //             <p><b>Top Speed (mph): </b> {car.top_speed}</p>
    //             <p><b>Accident History: </b>{car.accident_history}</p>
    //             <p><b>Modifications: </b>{car.modifications}</p>
    //             <p><b>Bids: </b>{car.bids}</p>
    //             <p><b>Starting Bid Price: </b>${car.starting_bid_price}</p>
    //             <p><b>Current Bid Price: </b>${car.current_bid_price}</p>
    //             <button onClick={handleClick}>Place Bid</button>

    //         </div>
    //         <br></br>
    //     </>
    // )
}

export default CarList