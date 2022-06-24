import React from 'react';
import { connect } from 'react-redux';
import routes from '../../../consts/routes';
import { NavLink } from 'react-router-dom';
import { addNewUser } from '../../../redux/actions/authActions';
import PropTypes from 'prop-types';
import styles from './SingUpComponent.module.scss';

const SingUpComponent = ({ addNewUser }) => {
  const { authPage, singInPage } = routes;
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const onSetForm = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitData = (e) => {
    e.preventDefault();
    addNewUser(user);
    setUser({
      name: '',
      email: '',
      password: '',
      phone: '',
    })
  }

  return (
    <>
      <form onSubmit={onSubmitData}>
        <h2>Sing up</h2>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter name"
          name='name'
          value={user.name}
          onChange={onSetForm}
        />
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
        <input
          className={styles.input}
          type="password"
          placeholder="Repeat password"
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Enter phone"
          name='phone'
          value={user.phone}
          onChange={onSetForm}
        />
        <button type='submit' className={styles.button}>Sing up</button>
        <div  className={styles.checkboxContainer}>
          <label>
            <input type="checkbox" />
            Remember me?
          </label>
          <span>Need help?</span>
        </div>
        <div className={styles.linkText}>But if you already have an account
        <NavLink to={`/${authPage}/${singInPage}`} className={styles.link}>sing in</NavLink>
        </div>
      </form>
    </>
  )
};

SingUpComponent.propTypes = {};

SingUpComponent.defaultProps = {};

export default connect(null, {addNewUser})(SingUpComponent);
