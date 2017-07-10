import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load } from 'redux/modules/info';

@connect(
  state => ({ info: state.info.data }),
  { load })
export default class InfoBar extends Component {
  static propTypes = {
    info: PropTypes.object,
    load: PropTypes.func.isRequired
  }

  static defaultProps = {
    info: null
  };

  render() {
    return (
      <div>
        <h1>...</h1>
      </div>
    );
  }
}
