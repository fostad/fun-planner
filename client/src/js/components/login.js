import React from "react";
import fetch from 'fetch';

class Login extends React.Component {
  componentDidMount() {
    return fetch('./user')
      .then(r => console.log(r));
  }
  render() {
    return (
      <div >
      </div>
    );
  }
}

export default Login;
