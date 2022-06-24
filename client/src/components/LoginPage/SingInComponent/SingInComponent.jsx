import React from 'react';
import { connect } from 'react-redux';
import routes from '../../../consts/routes';
import { NavLink } from 'react-router-dom';
import { authUser } from '../../../redux/actions/authActions';
import PropTypes from 'prop-types';
import styles from './SingInComponent.module.scss';

const SingInComponent = ({ authUser }) => {
  const { authPage, singUpPage } = routes;
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const onSetForm = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitData = (e) => {
    e.preventDefault();
    authUser(user);
    setUser({
      email: '',
      password: '',
    })
  }

  return (
    <>
      <form onSubmit={onSubmitData}>
        <h2>Sing in</h2>
        <input
          className={styles.input}
          type="email"
          placeholder="Enter email"
          name='email'
          value={user.email}
          onChange={onSetForm}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Enter password"
          name='password'
          value={user.password}
          onChange={onSetForm}
        />
        <button type="submit" className={styles.button}>Sing in</button>
        <div className={styles.checkboxContainer}>
          <label>
            <input type="checkbox" />
            Remember me?
          </label>
          <span>Forgot password?</span>
        </div>
        <div className={styles.linkText}>
          But if you still don`t have an account
          <NavLink to={`/${authPage}/${singUpPage}`} className={styles.link}>
            sing up
          </NavLink>
        </div>
      </form>
    </>
  );
};

SingInComponent.propTypes = {};

SingInComponent.defaultProps = {};

export default connect(null, {authUser})(SingInComponent);
