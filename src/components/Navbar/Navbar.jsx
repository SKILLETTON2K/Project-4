import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import * as UserService from '../../utilities/users-service';

function Navbar({ user, setUser }) {

  function handleLogOut() {
    UserService.logOut();
    setUser(null);
  }

  const [click, setClick] = useState(false);
  const [link, setLink] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showLink = () => {
    if (window.innerWidth <= 960) {
      setLink(false);
    } else {
      setLink(true);
    }
  };

  useEffect(() => {
    showLink();
  }, []);

  window.addEventListener('resize', showLink);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            SCHEM STATIC &nbsp;
            <i class="fa-solid fa-cloud-bolt fa-flip-horizontal"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/schematics'
                className='nav-links'
                onClick={closeMobileMenu}>
                Schematics
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/postschematic'
                className='nav-links'
                onClick={closeMobileMenu}>
                Post Schem
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/faqs'
                className='nav-links'
                onClick={closeMobileMenu}>
                FAQ's
              </Link>
            </li>

            <li className='nav-item'>
              <Link to="" className="nav-links-mobile" onClick={handleLogOut}>Log Out
              </Link>
            </li>

          </ul>

          {link && <Link to="" className="logout-btn" onClick={handleLogOut}>Log Out
              </Link>}
              
        </div>
      </nav>
    </>
  );
}

export default Navbar;