import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './AuthTypeComponent.module.scss';

const AuthTypeComponent = () => (
  <div className={styles.container} data-testid="AuthTypeComponent">
    <p className={styles.title}>Choose your way!</p>
    <NavLink to='singin' className={styles.link}>Sing in</NavLink>
    <div className={styles.lineContainer}>
      <p className={styles.line}/>
      <span>or</span>
      <p className={styles.line}/>
    </div>
    <NavLink to='singup' className={styles.link}>Sing up</NavLink>
  </div>
);

AuthTypeComponent.propTypes = {};

AuthTypeComponent.defaultProps = {};

export default AuthTypeComponent;
