import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { COLOR1, COLOR2, COLOR3, COLOR4, COLOR5 } from '../colors';
import Avatar from './avatar';

const linkStyle = {
  display: 'block',
  textAlign: 'center',
  padding: '14px 16px',
  textDecoration: 'none',
  color: COLOR4
};

const Nav = ({user}) => {
  console.log('nav user', user);
  return (
    <nav
      className="navbar navbar-default navbar-fixed-top"
      style={{
        fontWeight: 'bold', fontSize: '14px', borderBottomWidth: '0px',
        backgroundColor: 'white',
      }}
    >
      <div className="navbar-header" style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
          <Link style={linkStyle} to="/">Event</Link>
          <Link style={linkStyle} to="/signup">Login</Link>
          <Link style={linkStyle} to="/home">Home</Link>
        </div>
        <Avatar color={COLOR3} size='30px' user={user}/>
      </div>
    </nav>
  );
};

export default connect(state => {
  console.log('state', state);
  return {
    user: state.settings.user
  };
}, null)(Nav);
