/**
 * Created by Kronenberg on 6/24/17.
 */
import React, { Component } from 'react';
import { reduxForm, Field, propTypes } from 'redux-form';
import loginValidation from './LoginFormValidations';
const styles = require('./LoginForm.scss');
import cx from 'classnames';
import loader from '../../../../static/gif/loader.gif';
// eslint-disable-next-line react/prop-types
const renderInput = ({ input, label, type, customPlaceholder, meta: { touched, error } }) => (
  <div className={`form-group ${error && touched ? 'has-error' : ''}`}>
    <label htmlFor={input.name} className={cx(styles.customLabel, "col-md-2")}>{label}</label>
    <div className="col-md-11">
      <input {...input} type={type} className={styles.inputGlobalStyles} placeholder={customPlaceholder} />
      {error && touched && <span className="glyphicon glyphicon-remove form-control-feedback"></span>}
      {error && touched && <div className="text-danger"><strong>{ error }</strong></div>}
    </div>
  </div>
);

@reduxForm({
  form: 'login',
  validate: loginValidation
})

export default class LoginForm extends Component {
  static propTypes = {
    ...propTypes
  }

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <Field
          name="username"
          type="text"
          component={renderInput}
          label="Юзернейм"
         />
        <Field
          name="email"
          type="text"
          component={renderInput}
          label="Адресс"
         />
        <Field
          name="password"
          type="password"
          component={renderInput}
          label="Пароль"
         />
        {error && <p className="">{error}</p>}
        <button
          className={cx(styles.loginBtn)}
          type="submit">
          <i className={'fa fa-sign-in'} />{' '}Log In
        </button>
      </form>
    );
  }
}
