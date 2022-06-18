import React from 'react';
import PropTypes from 'prop-types';
import styles from './RatingsButtons.module.scss';
import { updateRating } from '../../../client-api/updateData-api';

const RatingsButtons = ({ addEstimate }) => {
  const scale = [1,2,3,4,5];
  return (
    <div className={styles.RatingsButtons} data-testid="RatingsButtons">
      {scale.map(el => {
        return (
            <label key={el} className={styles.scale}>
              <input
                type='number'
                defaultValue={el}
                className={styles.rating}
                onClick={(e) => addEstimate(e)}
              />
            </label>
          )
      })}
    </div>
  );
}

RatingsButtons.propTypes = {};

RatingsButtons.defaultProps = {};

export default RatingsButtons;
