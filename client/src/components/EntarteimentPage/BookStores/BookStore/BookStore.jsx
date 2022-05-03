import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate,useLocation} from 'react-router-dom';
import styles from './BookStore.module.scss';



const BookStore = ({shop}) => {
  const {_id:id,name,photo,address,phone,openFrom,openUntil,rating} = shop;
  const navigate = useNavigate()
  const pathname = useLocation().pathname;
  const openDetails = () => navigate(`${pathname}/${id}`, { state: pathname})
  return (
    <article className={styles.shopCard} onClick={openDetails}>
      <img src={photo} alt='shop' className={styles.image}/>
      <div className={styles.textContent}>
        <h3>Shop name: {name}</h3>
        <p>Address: {address}</p>
        <p>Telephone: {phone}</p>
        <p>Working hours: {openFrom}-{openUntil}</p>
        <p>Raiting: {rating}</p>
      </div>
    </article>
  ) 
}

BookStore.propTypes = {};

BookStore.defaultProps = {};

export default BookStore;
