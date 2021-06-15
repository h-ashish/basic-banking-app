import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar () {
  const [click, setClick] = useState (false);

  const handleClick = () => setClick (! click);
  const closeMobileMenu = () => setClick (false);



  return (
    <>
      <nav className = 'navbar'>
        <div className = 'navbar-container'>
          <Link to = '/' className = 'navbar-logo' onClick = {closeMobileMenu} >
            
            <i className="fas fa-piggy-bank"></i> <p> GRIP BANK </p>
          </Link>
          <div className = 'menu-icon' onClick = {handleClick}>
            <i className = {click? 'fas fa-times': 'fas fa-bars'} />
          </div>
          <ul className = {click? 'nav-menu active': 'nav-menu'}>

            <li className = 'nav-item'>
              <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>
                HOME
              </Link>
            </li>

            <li className = 'nav-item'>
              <Link to = '/createuser' className = 'nav-links' onClick = {closeMobileMenu}>
                CREATE USER
              </Link>
            </li>

            <li className = 'nav-item'>
              <Link 
              to = '/users' 
              className = 'nav-links' 
              onClick = {closeMobileMenu} 
              >
                USERS
              </Link>
            </li>

            <li className = 'nav-item'>
              <Link 
              to = '/transaction' 
              className = 'nav-links' 
              onClick = {closeMobileMenu} 
              >
                TRANSFER
              </Link>
            </li>

            <li className = 'nav-item'>
              <Link
                to = '/history'
                className = 'nav-links'
                onClick = {closeMobileMenu}
                
              >
                TRANSACTION HISTORY
              </Link>
            </li>
           
          </ul>
        </div>
        </nav>
    </>
  );
}

export default Navbar;