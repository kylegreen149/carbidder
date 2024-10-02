import '../App.css';

import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from "./Header"
import NavBar from './NavBar';

function App() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch("http://localhost:5555/cars")
    .then(response => response.json())
    .then(carData => setCars(carData))
  },[])

  function addCar(newCar){
    fetch("http://localhost:5555/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar)
    })
    .then(response => response.json())
    .then(newCarData => setCars([...cars, newCarData]))
  }

  function updateCar(updatedCarData, id) {
    fetch(`http://localhost:5555/cars/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(updatedCarData)
    })
    .then(response => response.json())
    .then(updatedCar => {
      const updatedCarsArray = cars.map(car => {
          if (updatedCar.id === car.id) {
            return updatedCar
          } else {
            return car
          }
      })
      setCars(updatedCarsArray)
    })
  }

  return (
    <div className='App'>
      <Header />
      <NavBar />
      <Outlet context={{cars: cars, addCar: addCar, updateCar: updateCar}}/>
    </div>
  )
}

export default App;
