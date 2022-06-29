import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterQuantityOnPage.module.scss';

const FilterQuantityOnPage = ({onSetFilter}) => {
  return(
    <>
      <label className={styles.labelRadio}>
        <input
          type="radio"
          value="4"
          name="quantity"
          className={styles.inputRadio}
          onClick={(e) => onSetFilter(e)}
        />
        4
      </label>
      <label className={styles.labelRadio}>
        <input
          type="radio"
          value="8"
          name="quantity"
          className={styles.inputRadio}
          onClick={(e) => onSetFilter(e)}
        />
        8
      </label>
      <label className={styles.labelRadio}>
        <input
          type="radio"
          value="12"
          name="quantity"
          className={styles.inputRadio}
          onClick={(e) => onSetFilter(e)}
        />
        12
      </label>
      <label className={styles.labelRadio}>
        <input
          type="radio"
          value="16"
          name="quantity"
          className={styles.inputRadio}
          onClick={(e) => onSetFilter(e)}
        />
        16
      </label>
    </>
  )
};

FilterQuantityOnPage.propTypes = {};

FilterQuantityOnPage.defaultProps = {};

export default FilterQuantityOnPage;
