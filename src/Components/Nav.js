import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">FormSite</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        
          <Link to="/" className='route-link mx-4'>Home</Link>
        </li>
        <li className="nav-item">
          
          <Link to="/form" className='route-link mx-4'>Form</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Nav
