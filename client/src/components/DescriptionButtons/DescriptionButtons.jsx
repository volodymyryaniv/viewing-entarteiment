import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './DescriptionButtons.module.scss';

const DescriptionButtons = ({ showFeedback}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className={styles.descriptionButtons}>
        <button onClick={goBack}>Go back</button>
        <button onClick={showFeedback}>Feedbacks</button>
        <button>Edit</button>
      </div>
    </>
  );
};

DescriptionButtons.propTypes = {};

DescriptionButtons.defaultProps = {};

export default DescriptionButtons;
