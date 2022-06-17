import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cinemas.module.scss';
import ItemComponent from '../ItemComponent';
import withFethList from '../../withHoc/withFetchAll';

const Cinemas = ({list}) => {
  return (
    <div className={styles.background}>
      <article className={styles.cardContainer}>
        {list.map((shop) => {
          return <ItemComponent key={shop._id} {...shop} />;
        })}
      </article>
    </div>
  )
};

Cinemas.propTypes = {};

Cinemas.defaultProps = {};

export default withFethList(Cinemas);
