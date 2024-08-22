import { useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";

function AddCarForm() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        image: "",
        name: "",
        milage: "",
        top_speed: "",
        accident_history: "None",
        modifications: "",
        bids: 0,
        starting_bid_price: "",
        current_bid_price: ""
    })

    const {addCar} = useOutletContext()

    function handleSubmit(event){
        event.preventDefault()

        const newCar = {...formData, current_bid_price: formData.starting_bid_price}
        
        addCar(newCar)

        setFormData({
            image: "",
            name: "",
            milage: "",
            top_speed: "",
            accident_history: "None",
            modifications: "",
            bids: 0,
            starting_bid_price: "",
            current_bid_price: "" 
        })

        navigate('/')
    }

    function updateFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Your Car to Auction Off</h3>
            <p>Please fill out this form with all of the required information</p>
            <fieldset>
                <label htmlFor="image-input">Car Image: </label>
                <input onChange={updateFormData} id="image" name="image" placeholder="Ex: https://mycar.png" value={formData.image} required />


                <label htmlFor="name-input">Car Name: </label>
                <input onChange={updateFormData} id="name" name="name" placeholder="Ex: 2012 Jeep Grand Cherokee" value={formData.name} required />

                <label htmlFor="milage-input">Milage (in mph): </label>
                <input onChange={updateFormData} type="number" id="milage" name="milage" placeholder="Ex: 10503" value={formData.milage} required />

                <label htmlFor="topSpeed-input">Top Speed (in mph): </label>
                <input onChange={updateFormData} type="number" id="top_speed" name="top_speed" placeholder="Ex: 210" value={formData.top_speed} required />

                <label htmlFor="accident-history-input">Accident History: </label>
                <select onChange={updateFormData} name="accident_history" id="accident_history" value={formData.accident_history}>
                    <option value="None">None</option>
                    <option value="Minor">Minor</option>
                    <option value="Several">Several</option>
                </select>

                <label htmlFor="modifications-input">Modifications: </label>
                <textarea onChange={updateFormData} id="modifications" name="modifications" placeholder="Ex: Window Tints, Spoilers, Downpipes (If none, type None)" value={formData.modifications} required></textarea>

                <label htmlFor="starting-bid-input">Starting Bid Price: $</label>
                <input onChange={updateFormData} type="number" id="starting_bid_price" name="starting_bid_price" placeholder="Ex: 50000" value={formData.starting_bid_price} required />

                <input type="submit" value="Auction Car"/>
            </fieldset>
        </form>
    )
}

export default AddCarForm