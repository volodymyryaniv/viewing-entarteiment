import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './StatusToast.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const StatusToast = () => {
  const toast = useSelector((state) => state.toastReducer);
  const dispatch = useDispatch();

  const element = document.createElement('div');
  React.useEffect(() => {
    document.body.appendChild(element);
    return () => {
      return document.body.removeChild(element)
    };
  });

  const onRemoveToast = (id) => {
    dispatch({ type: 'REMOVE_TOAST', payload: id});
  };

  return (
    ReactDOM.createPortal(
      <div className={styles.wrapper}>
        {toast.map((obj) => {
          return (
            <div key={obj.id} className={styles.toastContainer}>
              <div className={styles[obj.status]}>
                <img
                  className={styles.statusIcon}
                  src={`/public-img/icons/${obj.status}.svg`}
                  alt={`${obj.status} error icon`}
                />
                <div className={styles.statusText}>
                  <p>{obj.status}</p>
                  <p>{obj.message}</p>
                </div>
                <img
                  className={styles.remove}
                  src={'/public-img/icons/removecross.svg'}
                  alt="close cross"
                  onClick={() => onRemoveToast(obj.id)}
                />
              </div>
            </div>
          );
        })}
      </div>,
      element
    )
  );
};

StatusToast.propTypes = {};

StatusToast.defaultProps = {};

export default StatusToast;
