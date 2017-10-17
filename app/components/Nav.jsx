import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
    <nav>
      <div className="nav-item">
        <a href="#">home</a>
      </div>
      <div className="nav-item">
        <Link to="/students" >students </Link>
      </div>
    </nav>
    </div>
  )
}
export default Nav
