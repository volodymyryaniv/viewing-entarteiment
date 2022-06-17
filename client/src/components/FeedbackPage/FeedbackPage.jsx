import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackPage.module.scss';

const FeedbackPage = ({ feedbacks }) => (
  <div className={styles.FeedbackPage} data-testid="FeedbackPage">
    {feedbacks.length &&
      feedbacks.map((el) => {
        return (
          <div key={el.date}>
            <p>{el.content}</p>
            <p>{el.date}</p>
          </div>
        );
      })}
  </div>
);

FeedbackPage.propTypes = {};

FeedbackPage.defaultProps = {};

export default FeedbackPage;
