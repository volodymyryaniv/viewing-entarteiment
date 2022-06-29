import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterComponent.module.scss';
import FilterRadius from './FilterRadius';
import FilterQuantityOnPage from './FilterQuantityOnPage/FilterQuantityOnPage';

const FilterComponent = () => {
  const filter = React.useRef({
    sortBy: '',
    radius: null,
    quantity: 8,
  });

  const onSetFilter = ({ target: { name, value } }) => {
    filter.current = {
      ...filter.current,
      [name]: value,
    };
  };
  
  const onSubmit = (e) => {
    console.log(filter);
    e.preventDefault();
  };

  return (
    <div className={styles.filterContainer} data-testid="FilterComponent">
      <div className={styles.filter}>
        <label className={styles.label}>
          Quick search
          <input
            type="text"
            className={styles.input}
            placeholder="Enter title"
          />
        </label>
        <form className={styles.form} onSubmit={onSubmit}>
          <label className={styles.label}>
            Sort by:
            <select
              className={styles.inputSelect}
              name="sortBy"
              onClick={onSetFilter}
            >
              <option className={styles.option} value="price">
                Price ⇓
              </option>
              <option value="price">Price ⇑</option>
              <option value="rating">Rating ⇓</option>
              <option value="rating">Rating ⇑</option>
              <option value="title">Title</option>
            </select>
          </label>
          <div className={styles.label}>
            Quantity on page
            <FilterQuantityOnPage onSetFilter={onSetFilter} />
          </div>
          <FilterRadius onSetFilter={onSetFilter} />
          <button type="submit" className={styles.acceptButton}>
            Accept
          </button>
        </form>
      </div>
    </div>
  );
};

FilterComponent.propTypes = {};

FilterComponent.defaultProps = {};

export default FilterComponent;
