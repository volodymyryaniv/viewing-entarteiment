import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cafes.module.scss';
import ItemComponent from '../ItemComponent';
import withFethList from '../../withHoc/withFetchAll';

const Caffes = ({list}) => {
  console.log(list)
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

Caffes.propTypes = {};

Caffes.defaultProps = {};

export default withFethList(Caffes);
