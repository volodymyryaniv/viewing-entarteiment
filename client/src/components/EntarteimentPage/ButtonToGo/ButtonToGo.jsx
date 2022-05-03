import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ButtonToGo.module.scss';

const ButtonToGo = ({category}) => {
  return (
    <article className={styles.container}>
      <NavLink to={category} className={styles.link}>
        <div className={styles.button}>Go to {category}</div> 
      </NavLink>
    </article>
  );
}

ButtonToGo.propTypes = {};

ButtonToGo.defaultProps = {};

export default ButtonToGo;
