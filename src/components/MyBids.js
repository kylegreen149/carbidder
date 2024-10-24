import { useOutletContext } from "react-router-dom"
import CarList from "./CarList"

function MyBids() {
    const {bids} = useOutletContext()
    const carComponents = bids.map(bid => {
        return <CarList key={bid.id} car={bid}/>
    })
    return (
        <div id="carList">
            {carComponents}
        </div>
    )
}


export default MyBids