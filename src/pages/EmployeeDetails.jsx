import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { useSearchParams, Link } from 'react-router-dom';
import { FaRegStar, FaStar } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function EmployeeDetails() {
  const { list, doApi, toggleFavorite, isFavorite } = useContext(AppContext);
  const [query] = useSearchParams();
  const index = Number(query.get("index"));
  const company = query.get("company");
  const employee = list[index];

  useEffect(() => {
    if (!employee && company) {
      console.log(company);
      doApi(company);
    }
  }, [company, employee, doApi]);
  
  const isFav = isFavorite(employee.login.uuid);
  const position = [
    employee.location.coordinates.latitude, 
    employee.location.coordinates.longitude
  ];

  return (
    <div className='container text-center'>
      <div className="col-md-8 mx-auto border p-3 position-relative">
        <div 
          className='position-absolute' 
          style={{top: '10px', right: '10px', fontSize: '2.5rem', cursor: 'pointer'}}
          onClick={() => toggleFavorite(employee)}>
          {isFav ? <FaStar color="gold" /> : <FaRegStar />}
        </div>
        <h2 className='my-3'>Info about: {employee.name.first} {employee.name.last}</h2>
        <img 
          src={employee.picture.large} 
          alt="Employee"
          className="img-thumbnail rounded-circle mb-3"
          style={{width: '150px', height: '150px'}}
        />
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
        <p>
          <strong>Address:</strong> {`${employee.location.street.number} ${employee.location.street.name}, ${employee.location.city}, ${employee.location.state}, ${employee.location.country}`}
        </p>
        
        <div className='my-4'>
          <h4>Location on Map:</h4>
          <MapContainer 
            center={position} 
            zoom={13} 
            scrollWheelZoom={false} 
            style={{ height: '300px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                {employee.name.first} {employee.name.last}'s location.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
      </div>
    </div>
  );
}