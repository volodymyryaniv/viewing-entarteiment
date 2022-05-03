import React from 'react';
import PropTypes from 'prop-types';
import styles from './TopPlaces.module.scss';

const TopPlaces = () => (
  <div className={styles.TopPlaces} data-testid="TopPlaces">
    TopPlaces Component
  </div>
);

TopPlaces.propTypes = {};

TopPlaces.defaultProps = {};

export default TopPlaces;
