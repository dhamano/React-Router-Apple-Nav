import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = props => {
  return(
    <li className={props.navName}><NavLink to={props.navName} name={props.navName} activeClassName="selected">{props.navName}</NavLink></li>
  )
}

export default NavItem;