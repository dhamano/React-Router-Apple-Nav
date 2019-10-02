import React from 'react';
import image_large_apple_logo from '../imgs/image_large_apple_logo.svg';
import NavItem from './NavItem';

import { Link } from 'react-router-dom';

const MainNav = props => {
  const styles= {
    logo: {
      background: `url(${image_large_apple_logo}) no-repeat center center`,
      width: '36px',
      height: '44px',
      color: '#fff',
      display: 'block'
    }
  }

  return (
    <div className="main-nav">
      <ul>
        <li><Link to="/" style={styles.logo}></Link></li>
        {props.navList.map( (navName, i) => <NavItem key={i} navName={navName} />)}
      </ul>
    </div>
  );
}

export default MainNav;