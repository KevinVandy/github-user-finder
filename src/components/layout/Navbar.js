import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Navbar = ({ icon, title }) => {

  return (
    <Fragment>
      <nav className='navbar nav-fixed bg-primary'>
        <h1>
          <Link to='/'><i className={icon} /> {title}</Link>
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <div className="navbar-spacer"></div>
    </Fragment>
  );
}

Navbar.defaultProps = {
  title: 'Github User Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar
