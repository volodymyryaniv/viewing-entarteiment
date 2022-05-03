import React from 'react';
import {Outlet,useMatch,useLocation} from 'react-router-dom';
import routes from '../../consts/routes.js';
import PropTypes from 'prop-types';
import ButtonToGo from './ButtonToGo';
import styles from './EntarteimentPage.module.scss';

const EntarteimentPage = () => {
  const {bookStoresPage,caffesPage,cinemasPage} = routes;
  const categories = [bookStoresPage,caffesPage,cinemasPage];

  const pathname = useLocation().pathname;
  
  return pathname === `/${routes.attractionsPage}` ? (
    <div className={styles.EntarteimentPage}>
      <h1>I want to...</h1>
      <article className={styles.container}>
        {categories.map((el) => {
          return <ButtonToGo key={el} category={el} />;
        })}
      </article>
    </div>
  ) : (
    <Outlet />
  );
};


EntarteimentPage.propTypes = {};

EntarteimentPage.defaultProps = {};

export default EntarteimentPage;
