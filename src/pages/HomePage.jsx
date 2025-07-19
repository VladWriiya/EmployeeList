import React from 'react';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeList from '../components/EmployeeList';



export default function HomePage() {
  return (
    <div className='container'>
      <img src="/stripe-image.png" alt="banner" className='img-fluid mb-3' />
      <h1>List of employeees:</h1>
      <EmployeeForm />
      
      <EmployeeList />

    </div>
  );
}