import { useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";

function AddCarForm() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        image: "",
        color: "",
        year: "",
        brand: "",
        model: "",
        body_style: "",
        type: "Gas",
        mileage: "",
        top_speed: "",
        accident_history: "No",
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
            image: "",
            color: "",
            year: "",
            brand: "",
            model: "",
            body_style: "",
            type: "Gas",
            mileage: "",
            top_speed: "",
            accident_history: "No",
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
                <label htmlFor="image-input">Car Image: </label>
                <input onChange={updateFormData} id="image" name="image" placeholder="Ex: https://mycar.png" value={formData.image} required />

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

                <label htmlFor="mileage-input">Mileage: (in mph): </label>
                <input onChange={updateFormData} type="number" id="mileage" name="mileage" placeholder="Ex: 10503" value={formData.mileage} required />

                <label htmlFor="top-speed-input">Top Speed (in mph): </label>
                <input onChange={updateFormData} type="number" id="top_speed" name="top_speed" placeholder="Ex: 210" value={formData.top_speed} required />

                <label htmlFor="accident-history-input">Accident History: </label>
                <select onChange={updateFormData} name="accident_history" id="accident_history" value={formData.accident_history}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>

                <label htmlFor="modifications-input">Modifications: </label>
                <textarea onChange={updateFormData} id="modifications" name="modifications" placeholder="Ex: Window Tints, Spoilers, Downpipes (If none, type None)" value={formData.modifications} required></textarea>

                <label htmlFor="car-report-input">Car Report: </label>
                <textarea onChange={updateFormData} id="car-report" name="car-report" placeholder="Summarize your car; talk about special features, describe its accident history (if any), and describe recent upgrades or flaws." value={formData.car_report} required></textarea>

                <label htmlFor="starting-bid-input">Starting Bid Price: $</label>
                <input onChange={updateFormData} type="number" id="starting_bid_price" name="starting_bid_price" placeholder="Ex: 50000" value={formData.starting_bid_price} required />

                <input type="submit" value="Auction Car"/>
            </fieldset>
        </form>
    )
}

export default AddCarForm