import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './AuthTypeComponent.module.scss';

const AuthTypeComponent = () => (
  <div className={styles.container} data-testid="AuthTypeComponent">
    <p className={styles.title}>Choose your way!</p>
    <NavLink to='singup' className={styles.link}>Sing up</NavLink>
    <NavLink to='singin' className={styles.link}>Sing in</NavLink>
  </div>
);

AuthTypeComponent.propTypes = {};

AuthTypeComponent.defaultProps = {};

export default AuthTypeComponent;
