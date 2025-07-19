import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='container-fluid' style={{background:"silver"}}>
      <div className="container">
        <div className="row ">
          <div className="logo col-auto">
            <h3>My logo</h3>
          </div>
          <nav className='col-auto'>
            <ul className='list-inline d-flex h-100 align-items-center'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
