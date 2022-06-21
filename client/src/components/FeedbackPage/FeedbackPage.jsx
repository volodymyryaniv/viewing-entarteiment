import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackPage.module.scss';

const FeedbackPage = ({ feedbacks, addFeedback}) => {
  const [value, setValue] = React.useState('');

  const onAddFeedback = (e) => {
    e.preventDefault();
    addFeedback(value)
    setValue('');
  }

  return (
    <div className={styles.feedbackPage} data-testid="FeedbackPage">
      {feedbacks.length &&
        feedbacks.map((el) => {
          const date = el.date.split('T')[0];
          return (
            <div key={el.date}>
              <p>{el.content}</p>
              <p>{date}</p>
            </div>
          );
        })}
        <form className={styles.form} onSubmit={onAddFeedback}>
          <label> Leave your comment
            <textarea
              rows={5} 
              placeholder='Type here...'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            />
          </label>
          <button>Add feedback</button>
        </form>
    </div>
  )
};

FeedbackPage.propTypes = {};

FeedbackPage.defaultProps = {};

export default FeedbackPage;
