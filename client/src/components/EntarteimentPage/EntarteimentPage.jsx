import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import routes from '../../consts/routes';
import FilterComponent from './FilterComponent';
import PropTypes from 'prop-types';
import styles from './EntarteimentPage.module.scss';

const EntarteimentPage = () => {
  const pathname = useLocation().pathname;
  const style =
    pathname === `/${routes.attractionsPage}`
      ? styles.wrapperMain
      : styles.wrapperList;
  return (
    <div className={styles.EntarteimentPage}>
      <div className={style}>
        <h1 className={styles.title}>I want to...</h1>
        <FilterComponent />
        <Outlet />
      </div>
    </div>
  );
};

EntarteimentPage.propTypes = {};

EntarteimentPage.defaultProps = {};

export default EntarteimentPage;
