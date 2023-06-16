import React from 'react';
import { useParams } from 'react-router-dom';

function CarDetails() {
  const { id } = useParams();
  const cars = [
    { id: 1, name: 'Car 1', description: 'This is car 1.', quantity: 5 },
    { id: 2, name: 'Car 2', description: 'This is car 2.', quantity: 3 },
    { id: 3, name: 'Car 3', description: 'This is car 3.', quantity: 2 },
  ];

  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <h2>Car not found</h2>;
  }

  return (
    <div>
      <h2>Car Details</h2>
      <p>ID: {car.id}</p>
      <p>Name: {car.name}</p>
      <p>Description: {car.description}</p>
      <p>Available Quantity: {car.quantity}</p>
     
    </div>
  );
}

export default CarDetails;
