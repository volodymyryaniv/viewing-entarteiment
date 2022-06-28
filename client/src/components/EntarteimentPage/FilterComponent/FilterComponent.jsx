import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterComponent.module.scss';

const FilterComponent = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className={styles.filterContainer} data-testid="FilterComponent">
      <div className={styles.filter}>
        <label className={styles.label}>Quick search
          <input type="text" className={styles.input} placeholder="Enter title"/>
        </label>  
      <form className={styles.form}>
        <label className={styles.label}>Sort by:
          <select className={styles.inputSelect}>
            <option className={styles.option} value="price">Price</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="rating">Rating</option>
            <option value="title">Title</option>
          </select>
        </label>
        <div className={styles.label}>Quantity on page
          <label className={styles.labelRadio}>
            <input type="radio" value="4" name="quantity" className={styles.inputRadio}/>4
          </label>
          <label className={styles.labelRadio}>
            <input type="radio" value="8" name="quantity" className={styles.inputRadio}/>8
          </label>
          <label className={styles.labelRadio}>
            <input type="radio" value="12" name="quantity" className={styles.inputRadio}/>12
          </label>
          <label className={styles.labelRadio}>
            <input type="radio" value="16" name="quantity" className={styles.inputRadio}/>16
          </label>
          </div>
          <div className={styles.labelDistance}>Max distance
            <div className={styles.distanceContainer}>
              <div className={styles.large}>1k</div>
              <div className={styles.medium}>500m</div>
              <div className={styles.small}>200m</div>
            </div>
          </div>
          <button type="submit" className={styles.acceptButton}>Accept</button>
      </form>
      </div>
    </div>
  )
 };

FilterComponent.propTypes = {};

FilterComponent.defaultProps = {};

export default FilterComponent;
