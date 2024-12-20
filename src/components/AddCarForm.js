import { useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";

function AddCarForm() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        display_image: "",
        color: "",
        year: "",
        brand: "",
        model: "",
        body_style: "Sedan",
        type: "Gas",
        transmission: "Semi-automatic Transmission",
        mileage: "",
        top_speed: "",
        accident_history: "No",
        current_condition: "Excellent",
        modifications: "",
        car_report: "",
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
            display_image: "",
            color: "",
            year: "",
            brand: "",
            model: "",
            body_style: "Sedan",
            type: "Gas",
            transmission: "Semi-automatic Transmission",
            mileage: "",
            top_speed: "",
            accident_history: "No",
            current_condition: "Excellent",
            modifications: "",
            car_report: "",
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
                <label htmlFor="display-image-input">Car Image: </label>
                <input onChange={updateFormData} id="display_image" name="display_image" placeholder="Ex: https://mycar.png" value={formData.display_image} required />

                <label htmlFor="color-input">Color: </label>
                <input onChange={updateFormData} id="color" name="color" placeholder="Ex: Red" value={formData.color} required />

                <label htmlFor="year-input">Year: </label>
                <input onChange={updateFormData} type="number" id="year" name="year" placeholder="Ex: 2012" value={formData.year} required />

                <label htmlFor="brand-input">Car Brand: </label>
                <input onChange={updateFormData} id="brand" name="brand" placeholder="Ex: Ford" value={formData.brand} required />

                <label htmlFor="model-input">Model: </label>
                <input onChange={updateFormData} id="model" name="model" placeholder="Ex: Explorer" value={formData.model} required />

                <label htmlFor="body-style-input">Body Style: </label>
                <select onChange={updateFormData} name="body_style" id="body_style" value={formData.body_style}>
                    <option value="Sedan">Sedan</option>
                    <option value="Crossover">Crossover</option>
                    <option value="SUV">SUV</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Station Wagon">Station Wagon</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Convertible">Convertible</option>
                    <option value="Pick Up Truck">Pick Up Truck</option>
                </select>

                <label htmlFor="type-input">Type: </label>
                <select onChange={updateFormData} name="type" id="type" value={formData.type}>
                    <option value="Gas">Gas</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Electric">Electric</option>
                </select>

                <label htmlFor="transmission-input">Transmission: </label>
                <select onChange={updateFormData} name="transmission" id="transmission" value={formData.transmission}>
                    <option value="Semi-automatic Transmission">Semi-automatic Transmission</option>
                    <option value="Dual-clutch Transmission (DCT)">Dual-clutch Transmission (DCT)</option>
                    <option value="Auto-manual Transmission">Auto-manual transmission</option>
                </select>

                <label htmlFor="mileage-input">Mileage: (in mph): </label>
                <input onChange={updateFormData} type="number" id="mileage" name="mileage" placeholder="Ex: 10503" value={formData.mileage} required />

                <label htmlFor="top-speed-input">Top Speed (in mph): </label>
                <input onChange={updateFormData} type="number" id="top_speed" name="top_speed" placeholder="Ex: 210" value={formData.top_speed} required />

                <label htmlFor="accident-history-input">Accident History: </label>
                <select onChange={updateFormData} name="accident_history" id="accident_history" value={formData.accident_history}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>

                <label htmlFor="current-condition-input">Car's Current Condition: </label>
                <select onChange={updateFormData} name="current_condition" id="current_condition" value={formData.current_condition}>
                    <option value="Excellent">Excellent - This car doesn't have a scratch and can be used for years to come!</option>
                    <option value="Good">Good - Minimal flaws, functions with little to no problems.</option>
                    <option value="Fair">Fair - A few flaws, but will still take you to where you need to go.</option>
                    <option value="Poor">Poor - This car needs a lot of repairs.</option>
                </select>

                <label htmlFor="modifications-input">Modifications: </label>
                <textarea onChange={updateFormData} id="modifications" name="modifications" placeholder="Ex: Window Tints, Spoilers, Downpipes (If none, type None)" value={formData.modifications} required></textarea>

                <label htmlFor="car-report-input">Car Report: </label>
                <textarea onChange={updateFormData} id="car_report" name="car_report" placeholder="Summarize your car; talk about special features, describe its accident history (if any), and describe recent upgrades or flaws." value={formData.car_report} required></textarea>

                <label htmlFor="starting-bid-input">Starting Bid Price: $</label>
                <input onChange={updateFormData} type="number" id="starting_bid_price" name="starting_bid_price" placeholder="Ex: 50000" value={formData.starting_bid_price} required />

                <input type="submit" value="Auction Car"/>
            </fieldset>
        </form>
    )
}

export default AddCarForm