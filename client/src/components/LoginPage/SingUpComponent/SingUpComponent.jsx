import React from 'react';
import routes from '../../../consts/routes';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './SingUpComponent.module.scss';

const SingUpComponent = () => {
  return (
    <>
      <form>
        <h2>Sing up</h2>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter name"
        />
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
        <input
          className={styles.input}
          type="password"
          placeholder="Repeat password"
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Enter phone"
        />
        <button className={styles.button}>Sing up</button>
        <div  className={styles.checkboxContainer}>
          <label>
            <input type="checkbox" />
            Remember me?
          </label>
          <span>Need help?</span>
        </div>
        <div className={styles.linkText}>But if you already have an account
        <NavLink to={`${routes.singInPage}`} className={styles.link}>sing in</NavLink>
        </div>
      </form>
    </>
  )
};

SingUpComponent.propTypes = {};

SingUpComponent.defaultProps = {};

export default SingUpComponent;
