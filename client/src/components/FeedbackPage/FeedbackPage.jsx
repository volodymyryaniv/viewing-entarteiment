import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackPage.module.scss';

const FeedbackPage = ({ feedbacks, addFeedback, deleteFeedback}) => {
  const [value, setValue] = React.useState('');

  const onAddFeedback = (e) => {
    e.preventDefault();
    addFeedback(value)
    setValue('');
  }
  
  const onDeleteFeedback = (id) => {
    deleteFeedback(id);
  }

  return (
    <div className={styles.feedbackPage} data-testid="FeedbackPage">
      {feedbacks.length ?
        (feedbacks.map((el) => {
          const date = el.date.split('T')[0];
          return (
            <div key={el.date}>
              <div className={styles.content}>
                {el.content}
                <img src='/public-img/icons/removecross.svg' onClick={() => onDeleteFeedback(el.id)}/>
              </div>
              <p className={styles.date}>{date}</p>
            </div>
          );
        })
        ) : (
          <p>You can be first!</p>
        )}
        <form className={styles.form} onSubmit={onAddFeedback}>
          <label> Your feedback makes us better
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
