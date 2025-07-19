import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
import { useSearchParams } from 'react-router-dom';
import EmployeeCard from './EmployeeCard'; 

export default function EmployeeList() {
  const { list } = useContext(AppContext);
  const [query] = useSearchParams();
  const currentCompany = query.get("search") || "";

  if (list.length === 0) {
    return <h3 className='text-center text-muted my-5'>Enter a company name to start searching</h3>;
  }

  return (
    <div className="row">
      {list.map((item, index) => (
        <EmployeeCard 
          key={item.login.uuid}
          item={item}
          index={index}
          company={currentCompany}
        />
      ))}
    </div>
  );
}