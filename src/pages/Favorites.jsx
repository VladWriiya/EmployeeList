import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import EmployeeCard from '../components/EmployeeCard';

export default function Favorites() {
  const { favorites } = useContext(AppContext);

  if (favorites.length === 0) {
    return (
      <div className="container text-center my-5">
        <h2>Your Fav list is emty</h2>
        <p>Go back and choose some dudes.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="my-4 text-center">Your Favorite Employees</h1>
      <div className="row">
        {favorites.map((item) => (
          <EmployeeCard 
            key={item.login.uuid}
            item={item}
            showMoreInfoButton={false} 
          />
        ))}
      </div>
    </div>
  );
}