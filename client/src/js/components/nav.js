import React from 'react';
import { Link } from 'react-router-dom';
import { COLOR1, COLOR2, COLOR3, COLOR4, COLOR5 } from '../colors';

const linkStyle = {
  display: 'block',
  textAlign: 'center',
  padding: '14px 16px',
  textDecoration: 'none',
  color: COLOR4
};

const Nav = () => {
  return (
    <nav
      class="navbar navbar-default navbar-fixed-top"
      style={{
        fontWeight: 'bold', fontSize: '14px', borderBottomWidth: '0px',
        backgroundColor: 'white',
      }}
    >
      <div class="navbar-header" style={{display: 'flex', justifyContent: 'flexStart'}}>
        <Link style={linkStyle} to="/">Event</Link>
        <Link style={linkStyle} to="/user">User</Link>
        <Link style={linkStyle} to="/home">Home</Link>
      </div>
    </nav>
  );
};

export default Nav;
