import React from 'react';
import {Link,NavLink,Outlet} from 'react-router-dom';
import routes from '../../consts/routes.js';
import navLinks from '../../consts/navigationData.js';
import PropTypes from 'prop-types';
import styles from './Navigation.module.scss';
import logo from '../../img/icons/lviv.jpg'

const Navigation = () => {
  const name = ({ isActive }) => (isActive ? styles.active : styles.links);
  return (
    <>
      <nav className={styles.Navigation}>
        <Link to={routes.homePage}>
          <img src={logo} className={styles.logo} alt="Lviv logo" />
        </Link>
        <div>
          {navLinks.map(({ id, linkName, route }) => {
            return (
              <NavLink to={route} key={id} className={name}>
                {linkName}
              </NavLink>
            );
          })}
        </div>
      </nav>
      <Outlet />
    </>
  );
};


Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
