import React, { useState, useEffect } from 'react';
 import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isLoggedIn }) {
  console.log('isLoggedIn:', isLoggedIn);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {                                                                                                                                                                                                                                               
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  
  if (!isLoggedIn) {
  return (
    
    <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            
            mySugr<i className='fab fa-typo3' />
          </Link>
        
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            
            
             <li className='nav-item'>
              <Link
                to='/upload'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Upload
              </Link>
            </li> 

            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {button && <Button buttonStyle='btn--outline'>CHATBOT</Button>}
        </div>
      </nav>
      
    
  );
}
return null;
}

export default Navbar;
