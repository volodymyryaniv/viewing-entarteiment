import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cinemas.module.scss';

const Cinemas = () => (
  <div className={styles.Cinemas} data-testid="Cinemas">
    Cinemas Component
  </div>
);

Cinemas.propTypes = {};

Cinemas.defaultProps = {};

export default Cinemas;
