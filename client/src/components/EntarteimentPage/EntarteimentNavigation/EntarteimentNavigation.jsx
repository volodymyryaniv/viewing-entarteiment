import React from 'react';
import PropTypes from 'prop-types';
import styles from './EntarteimentNavigation.module.scss';
import routes from '../../../consts/routes';
import ButtonToGo from '../ButtonToGo';

const EntarteimentNavigation = () => {
  const {bookStoresPage,cafesPage,cinemasPage} = routes;
  const categories = [bookStoresPage,cafesPage,cinemasPage];
  return (
    <article className={styles.container}>
      {categories.map((el) => {
        return <ButtonToGo key={el} category={el} />;
      })}
    </article>
  )
};

EntarteimentNavigation.propTypes = {};

EntarteimentNavigation.defaultProps = {};

export default EntarteimentNavigation;
