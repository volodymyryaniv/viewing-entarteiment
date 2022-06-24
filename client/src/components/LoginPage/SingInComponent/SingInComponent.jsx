import React from 'react';
import routes from '../../../consts/routes';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './SingInComponent.module.scss';

const SingInComponent = () => {
  const { authPage, singUpPage } = routes;
  return (
    <>
      <form>
        <h2>Sing in</h2>
        <input
          className={styles.input}
          type="email"
          placeholder="Enter email"
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Enter password"
        />
        <button className={styles.button}>Sing in</button>
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

export default SingInComponent;
