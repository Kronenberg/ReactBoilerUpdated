import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import LoginForm from './Components/LoginForm';

// @ACTIONS
import { localLogin } from './LoginActions';

class Login extends Component {
  static propTypes = {}

  static defaultProps = {
    user: null
  }

  static contextTypes = {
    router: PropTypes.object
  }

  login = data => this.props.dispatch(localLogin(data));


  render() {
    console.log(this.props.userLoggedIn);
    const styles = require('./Login.scss');
    return (
      <div className="container">
        <Helmet title="Login" />
        <div className="col-md-4">
          <h1 className={styles.loginLogo}>Регистрация</h1>
          <LoginForm onSubmit={this.login} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userLoggedIn: state.loginUser
  };
}

const LoginPage = connect(mapStateToProps)(Login);

export default LoginPage;
