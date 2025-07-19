import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaRegStar, FaStar } from "react-icons/fa";
import { AppContext } from '../context/AppContext';

export default function EmployeeCard({ item, index, company, showMoreInfoButton = true }) {
  const { toggleFavorite, isFavorite } = useContext(AppContext);
  const isFav = isFavorite(item.login.uuid);

  return (
    <div key={item.login.uuid} className='col-lg-4 col-md-6 col-12 p-2'>
      <div className='border p-3 h-100 d-flex flex-column align-items-center text-center position-relative'>
        <div 
          className='position-absolute' 
          style={{top: '10px', right: '10px', fontSize: '2rem', cursor: 'pointer'}}
          onClick={() => toggleFavorite(item)}
        >
          {isFav ? <FaStar color="gold" /> : <FaRegStar />}
        </div>
        
        <img
          src={item.picture.large}
          alt={`${item.name.first} avatar`}
          className='img-thumbnail rounded-circle mb-3'
          style={{ width: '120px', height: '120px' }}
        />
        <h4>{item.name.first} {item.name.last}</h4>
        <div className='text-muted'>Age: {item.dob.age}</div>
        <div>Country: {item.location.country}</div>
        {showMoreInfoButton && (
          <Link 
            to={`/employee?company=${company}&index=${index}`}
            className='btn btn-outline-info mt-auto'
          >
            More Info
          </Link>
        )}

      </div>
    </div>
  );
}