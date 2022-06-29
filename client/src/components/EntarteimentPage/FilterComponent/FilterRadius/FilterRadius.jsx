import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterRadius.module.scss';

const FilterRadius = ({onSetFilter}) => {
  return(
    <div className={styles.labelDistance}>
      Max distance
      <div className={styles.distanceContainer}>
        <input
          type="radio"
          value="1000"
          name="radius"
          className={styles.inputRadioMax}
          onClick={(e) => onSetFilter(e)}
        />
        <input
            type="radio"
            value="500"
            name="radius"
            className={styles.inputRadioMed}
            onClick={(e) => onSetFilter(e)}
          />
        <input
          type="radio"
          value="200"
          name="radius"
          className={styles.inputRadioMin}
          onClick={(e) => onSetFilter(e)}
        />
      </div>
    </div>
  )
};

FilterRadius.propTypes = {};

FilterRadius.defaultProps = {};

export default FilterRadius;
