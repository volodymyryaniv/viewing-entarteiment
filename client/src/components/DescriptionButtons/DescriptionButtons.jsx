import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './DescriptionButtons.module.scss';
import RatingsButtons from './RatingsButtons';

const DescriptionButtons = ({ showFeedback }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className={styles.DescriptionButtons}>
        <button onClick={goBack}>Go back</button>
        <button onClick={showFeedback}>Feedbacks</button>
        <div className={styles.rating}>
          <RatingsButtons />
        </div>
        <button>Edit</button>
      </div>
    </>
  );
};

DescriptionButtons.propTypes = {};

DescriptionButtons.defaultProps = {};

export default DescriptionButtons;
