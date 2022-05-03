import React from 'react';
import {NavLink} from 'react-router-dom';
import routes from '../../consts/routes.js';
import PropTypes from 'prop-types';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <article className={styles.mainBackground}>
      <h1 className={styles.title}>Lviv entertainment</h1>
      <NavLink to={routes.topPage} className={styles.link}>Show top <span>5</span></NavLink>
    </article>
  );
}


HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
