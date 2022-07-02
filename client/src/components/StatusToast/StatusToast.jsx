import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatusToast.module.scss';
import { useDispatch } from 'react-redux';
import { removeToast } from '../../redux/actions/toastActions';

const StatusToast = ({ status,id,message }) => {
  const dispatch = useDispatch();

  const onRemoveToast = (id) => {
    dispatch(removeToast(id));
  };
  return (
    <div
      className={styles.toastContainer}
    >
      <div className={styles[status]}>
        <img
          className={styles.statusIcon}
          src={`/public-img/icons/${status}.svg`}
          alt={`${status} error icon`}
        />
        <div className={styles.statusText}>
          <p>{status}</p>
          <p>{message}</p>
        </div>
        <img
          className={styles.remove}
          src={'/public-img/icons/removecross.svg'}
          alt="close cross"
          onClick={() => onRemoveToast(id)}
        />
      </div>
    </div>
  )
};

StatusToast.propTypes = {};

StatusToast.defaultProps = {};

export default StatusToast;
