import React from "react";
import { COLOR1, COLOR2, COLOR3, COLOR4, COLOR5 } from '../colors';
import Nav from './nav';

class Layout extends React.Component {
  render() {
    return (
      <div >
        <Nav />
        <div style={{
          paddingTop: '35px', paddingBottom: '35px',
          backgroundColor: COLOR5
        }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
