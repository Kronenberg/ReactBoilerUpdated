/**
 * Created by Kronenberg on 6/24/17.
 */
// @CORE
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @ ACTIONS
import { getAllUsers } from './UserManagementActions';
// @assets
import loaderGIF from '../../../static/gif/loader.gif';

class UserManagement extends Component {
  static propTypes = {
    localUsers: PropTypes.object.isRequired,
    pending: PropTypes.bool,
    success: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
  }

  static defaultProps = {
    users: null,
    success: false,
    rejected: false,
    pending: false
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() { this.props.dispatch(getAllUsers()); }

  render() {
    const { response, success, pending } = this.props.localUsers;
    /* eslint-disable  arrow-body-style */
    const users = success ? response.data.map((user) => {
      return (
        <tr key={user._id}>
          <td>{ user._id }</td>
          <td>{ user.email }</td>
          <td>{ user.password }</td>
        </tr>
      );
    }) : [];
    return (
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>password</th>
            </tr>
          </thead>
          <tbody>
            { pending ? <img src={loaderGIF} alt="spinner-gif" /> : users }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    localUsers: state.getAllUsers
  };
}

export default connect(mapStateToProps)(UserManagement);
