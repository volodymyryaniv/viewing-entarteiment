import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookStores.module.scss';
import ItemComponent from '../ItemComponent'
import withFethList from '../../withHoc/withFetchAll.jsx';

const BookStores = ({ list }) => {
  return (
    <div className={styles.background}>
      <article className={styles.cardContainer}>
        {list.map((shop) => {
          return <ItemComponent key={shop._id} {...shop} />;
        })}
      </article>
    </div>
  );
};

BookStores.propTypes = {};

export default withFethList(BookStores);
