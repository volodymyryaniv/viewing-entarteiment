import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterComponent.module.scss';

const FilterComponent = () => (
  <div className={styles.filter} data-testid="FilterComponent">
    <div>
      FilterComponent Component
    </div>
  </div>
);

FilterComponent.propTypes = {};

FilterComponent.defaultProps = {};

export default FilterComponent;
