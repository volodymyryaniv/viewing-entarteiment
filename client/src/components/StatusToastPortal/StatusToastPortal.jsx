import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './StatusToastPortal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removeToast } from '../../redux/actions/toastActions';
import { v4 } from 'uuid';

const StatusToastPortal = () => {
  const toast = useSelector((state) => state.toastReducer);
  const dispatch = useDispatch();
  const [removeId, setRemoveId] = React.useState('');
  const [loaded, setLoaded] = React.useState(false);
  const [portalId] = React.useState(`toast-portal-${v4()}`);

  React.useEffect(() => {
    const element = document.createElement('div');
    element.id = portalId;
    document.body.appendChild(element);
    setLoaded(true);
    return () => document.body.removeChild(element);
  }, [portalId]);

  React.useEffect(() => {
    if (removeId) {
      dispatch(removeToast(removeId));
    }
  }, [removeId]);

  React.useEffect(() => {
    if (toast.length > 0) {
      setTimeout(() => setRemoveId(toast[toast.length - 1].id), 3000);
    }
  }, [toast]);

  const onRemoveToast = (id) => {
    dispatch(removeToast(id));
  };

  return (
    loaded &&
    ReactDOM.createPortal(
      <div className={styles.wrapper}>
        {toast.map(({ status, id, message }) => {
          return (
            <div key={id} className={styles.toastContainer}>
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
          );
        })}
      </div>,
      document.getElementById(portalId)
    )
  );
};

StatusToastPortal.propTypes = {};

StatusToastPortal.defaultProps = {};

export default StatusToastPortal;
