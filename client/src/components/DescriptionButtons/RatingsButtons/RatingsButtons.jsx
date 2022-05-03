import React from 'react';
import PropTypes from 'prop-types';
import styles from './RatingsButtons.module.scss';

const RatingsButtons = () => {
  const scale = [1,2,3,4,5];
  const evaluate = (e) => {
    console.log(e.target.value)
  }
  return (
    <div className={styles.RatingsButtons} data-testid="RatingsButtons">
      {scale.map(el => {
        return (
            <label key={el} className={styles.scale}>
              <input type='number' defaultValue={el} className={styles.rating} onClick={evaluate}/>
            </label>
          )
      })}
    </div>
  );
}

RatingsButtons.propTypes = {};

RatingsButtons.defaultProps = {};

export default RatingsButtons;
