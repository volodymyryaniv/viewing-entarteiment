import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate,useLocation} from 'react-router-dom';
import styles from './ItemComponent.module.scss';

const BookStore = ({
  _id: id,
  name,
  photo,
  address,
  phone,
  openFrom,
  openUntil,
  rating,
}) => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const openDetails = () => navigate(`${pathname}/${id}`);
  return (
    <article className={styles.shopCard} onClick={openDetails}>
      <img src={photo} alt="shop" className={styles.image} />
      <div className={styles.textContent}>
        <h3>{name}</h3>
        <p>Address: <span>{address}</span></p>
        <p>Telephone: <span>{phone}</span></p>
        <p>
          Working hours: <span>{openFrom}-{openUntil}</span>
        </p>
        <p>Raiting: <span>{rating.toFixed(1)}</span></p>
      </div>
    </article>
  );
};


BookStore.propTypes = {};

BookStore.defaultProps = {};

export default BookStore;
