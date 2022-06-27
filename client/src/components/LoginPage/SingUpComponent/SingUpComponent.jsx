import React from 'react';
import { connect } from 'react-redux';
import routes from '../../../consts/routes';
import { NavLink } from 'react-router-dom';
import { addNewUser } from '../../../redux/actions/authActions';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { singUpValidator } from '../../../validatorsSchema/singUpValidator';
import PropTypes from 'prop-types';
import styles from './SingUpComponent.module.scss';

const SingUpComponent = ({ addNewUser }) => {
  const [showPs, setShowPs] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const { authPage, singInPage } = routes;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(singUpValidator),
  });

  const onSubmitData = (data) => {
    addNewUser(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <h2>Sing up</h2>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter name"
          {...register('name')}
        />
        {errors.name && (
          <p className={styles.warning}>{errors.name?.message}</p>
        )}
        <input
          className={styles.input}
          type="email"
          placeholder="Enter email"
          {...register('email')}
        />
        {errors.email && (
          <p className={styles.warning}>{errors.email?.message}</p>
        )}
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type={`${showPs ? 'text' : 'password'}`}
            placeholder="Enter password"
            {...register('password')}
          />
          <img
            className={styles.passwordVisibility}
            src={`/public-img/icons/${showPs ? 'hide' : 'show'}-password.svg`}
            alt="pasword visibility"
            onClick={() => setShowPs(!showPs)}
          />
          ;
        </div>
        {errors.password && (
          <p className={styles.warning}>{errors.password?.message}</p>
        )}
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type={`${showConfirm ? 'text' : 'password'}`}
            placeholder="Confirm password"
            {...register('confirmPassword')}
          />
          <img
            className={styles.passwordVisibility}
            src={`/public-img/icons/${
              showConfirm ? 'hide' : 'show'
            }-password.svg`}
            alt="pasword visibility"
            onClick={() => setShowConfirm(!showConfirm)}
          />
          ;
        </div>
        {errors.confirmPassword && (
          <p className={styles.warning}>{errors.confirmPassword?.message}</p>
        )}
        <input
          className={styles.input}
          type="number"
          placeholder="Enter phone"
          {...register('phone')}
        />
        {errors.phone && (
          <p className={styles.warning}>{errors.phone?.message}</p>
        )}
        <button type="submit" className={styles.button}>
          Sing up
        </button>
        <div className={styles.checkboxContainer}>
          <label>
            <input type="checkbox" />
            Remember me?
          </label>
          <span>Need help?</span>
        </div>
        <div className={styles.linkText}>
          But if you already have an account
          <NavLink to={`/${authPage}/${singInPage}`} className={styles.link}>
            sing in
          </NavLink>
        </div>
      </form>
    </>
  );
};

SingUpComponent.propTypes = {};

SingUpComponent.defaultProps = {};

export default connect(null, {addNewUser})(SingUpComponent);
