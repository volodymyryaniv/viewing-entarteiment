import React from 'react';
import PropTypes from 'prop-types';
import styles from './TopPlaces.module.scss';

const TopPlaces = () => {
  return (
    <div className={styles.background} data-testid="TopPlaces">
      <article className={styles.container}>
        TopPlaces Component
      </article>
    </div>
  )
};

TopPlaces.propTypes = {};

TopPlaces.defaultProps = {};

export default TopPlaces;
