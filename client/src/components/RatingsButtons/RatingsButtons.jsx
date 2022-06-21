import React from 'react';
import PropTypes from 'prop-types';
import styles from './RatingsButtons.module.scss';

const RatingsButtons = ({ addEstimate, rating }) => {
  const scale = [1,2,3,4,5];
  const activeRef = React.useRef();

  const setRating = (rating) => {
    const value = rating/0.05;
    activeRef.current.style.width = `${value}%`
  }

  React.useEffect(() => {
    setRating(rating)
  },[rating]);

  const onShowEstimate = (e) => {
    setRating(e.target.value);
  };

  return (
    <div className={styles.container}>
      <section className={styles.ratingsButtons} data-testid="RatingsButtons">
        <div  className={styles.ratingActive} ref={activeRef}></div>
        <div className={styles.ratingItems}>
          {scale.map(el => {
            return (
              <label key={el} className={styles.label}>★
                <input
                  key={el}
                  type='radio'
                  defaultValue={el}
                  className={styles.ratingItem}
                  name='rating'
                  onClick={(e) => addEstimate(e)}
                  onMouseEnter={onShowEstimate}
                  onMouseLeave={() => setRating(rating)}
                />
              </label>
              )
          })}
        </div>
      </section>
      <p className={styles.ratingValue}>{rating}</p>
    </div>
  );
}

RatingsButtons.propTypes = {};

RatingsButtons.defaultProps = {};

export default RatingsButtons;
