import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import routes from '../../consts/routes.js';
import navLinks from '../../consts/navigationData.js';
import PropTypes from 'prop-types';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const name = ({ isActive }) => (isActive ? styles.active : styles.links);
  return (
    <nav className={styles.Navigation}>
      <Link to={routes.homePage}>
        <img src='/public-img/icons/lviv.jpg' className={styles.logo} alt="Lviv logo" />
      </Link>
      <div>
        {navLinks.map(({ id, linkName, route }) => {
          return (
            <NavLink to={route} key={id} className={name}>
              {linkName}
            </NavLink>
          );
        })}
        <NavLink to={routes.authPage} className={name}>
          Sing in
        </NavLink>
      </div>
    </nav>
  );
};

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
