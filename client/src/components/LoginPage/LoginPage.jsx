import React from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './LoginPage.module.scss';

const LoginPage = () => (
  <div className={styles.background} data-testid="LoginPage">
    <article className={styles.container}>
      <Outlet/>
    </article>
  </div>
);

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default LoginPage;
