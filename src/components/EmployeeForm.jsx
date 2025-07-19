import React, { useRef, useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function EmployeeForm() {
    const { onSearch } = useContext(AppContext);
    const inputRef = useRef();

    const handleSearchClick = () => {
        onSearch(inputRef.current.value);
    };

    return (
        <div className="d-flex justify-content-center align-items-center my-4 gap-2">
            <h2 className="mb-0">Search for employees:</h2>
            <input
                ref={inputRef}
                type="search"
                placeholder="Enter company name..."
                className="form-control"
                style={{ width: '300px' }}
            />
            <button onClick={handleSearchClick} className="btn btn-primary">
                Search
            </button>
        </div>
    );
}