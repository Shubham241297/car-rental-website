import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CarList() {
  const [rentedCars, setRentedCars] = useState({});

  const handleRent = (carId, quantity) => {
    const car = cars.find((c) => c.id === carId);
  
    if (quantity < 1 || quantity > car.quantity) {
      // Invalid rent quantity, do not update the rentedCars state
      return;
    }
  
    setRentedCars((prevRentedCars) => ({
      ...prevRentedCars,
      [carId]: quantity,
    }));
  };
  

  const handleRentMultiple = () => {
    const rentedCarIds = Object.keys(rentedCars);
    const rentedCarCount = rentedCarIds.length;
  
    if (rentedCarCount > 0) {
      let totalRent = 0;
      const carNames = rentedCarIds
        .map((carId) => {
          const car = cars.find((c) => c.id === parseInt(carId));
          const quantity = rentedCars[carId];
          if (car && quantity) {
            const rent = quantity * car.pricePerDay;
            totalRent += rent;
            return `${car.name} (${quantity}): $${rent}`;
          }
          return '';
        })
        .filter(Boolean)
        .join(', ');
  
      if (carNames) {
        alert(`Rented cars: ${carNames}\nTotal Rent: $${totalRent}`);
      }
    }
  };
  
  

  const cars = [
    { id: 1, name: 'Audi', description: 'This is car 1.', quantity: 5, pricePerDay: 50 },
    { id: 2, name: 'BMW', description: 'This is car 2.', quantity: 3, pricePerDay: 60 },
    { id: 3, name: 'Toyota', description: 'This is car 3.', quantity: 2, pricePerDay: 70 },
  ];
  
  return (
    <div>
    <h2>Available Cars</h2>
    <ul style={carListStyle}>
      {cars.map((car) => (
        <li key={car.id} style={carItemStyle}>
          <Link to={`/cars/${car.id}`}>
            <img src={`images/car${car.id}.jpg`} alt={car.name} style={imageStyle} />
            <p>{car.name}</p>
          </Link>
          <p>Available Quantity: {car.quantity}</p>
          <p>Rent per day: {car.pricePerDay}</p>
          <div>
            <label htmlFor={`quantity-${car.id}`}>Rent Quantity:</label>
            <input
              type="number"
              id={`quantity-${car.id}`}
              name={`quantity-${car.id}`}
              min="1"
              max={car.quantity}
              value={rentedCars[car.id] || ''}
              onChange={(e) => handleRent(car.id, parseInt(e.target.value))}
            />
          </div>
        </li>
      ))}
    </ul>
    <button onClick={handleRentMultiple} disabled={Object.keys(rentedCars).length === 0}>
      Rent Selected Cars
    </button>
  </div>
);
}

// Styling
const carListStyle = {
display: 'flex',
flexWrap: 'wrap',
justifyContent: 'flex-start',
listStyle: 'none',
padding: 0,
};

const carItemStyle = {
width: '200px',
margin: '10px',
padding: '10px',
border: '1px solid #ccc',
};

const imageStyle = {
width: '100%',
height: 'auto',
};

export default CarList;
