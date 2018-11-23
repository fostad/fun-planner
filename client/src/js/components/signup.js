import React from "react";
import { connect } from 'react-redux';
import LocalizedStrings from 'react-localization';
import { getUserByEmail } from '../apis';
import { setUser } from '../actions';

const strings = new LocalizedStrings({
  en: {
    email: 'Email',
    signup: 'Signup',
    login: 'Login',
  }
});

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: ''
    };
    this.signupUser = this.signupUser.bind(this);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  signupUser() {
    this.props.history.push('/auth/google');
  }

  login() {
    const { email } = this.state;
    getUserByEmail(email)
      .then(r => {
        this.props.setUser(r[0]);
      });
  }

  render() {
    const { email } = this.state;
    return (
      <div
        style={{
          padding: '35px', margin: '7.5%',
          backgroundColor: 'white'
        }}
      >
        <div
          style={{
            display: 'flex', flexDirection: 'column', margin: '5px'
          }}
        >
          <input placeholder={strings.email}
            style={{
              width: '100%', height: '20px', border: 'none',
              borderBottom: '2px solid #d0d0d0'
            }}
            onChange={this.handleChange}
            value={email}
          />
          <div style={{display: 'flex', justifyContent: 'flexStart', marginTop: '5px'}} >
            <div styel={{marginRight: '5px'}}>
              <button onClick={this.login}>{strings.login}</button>
            </div>
            <div>
              <button onClick={this.signupUser}>{strings.signup}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, dispatch => {
  return {
    setUser: user => {
      dispatch(setUser({user}));
    }
  };
})(Signup);
