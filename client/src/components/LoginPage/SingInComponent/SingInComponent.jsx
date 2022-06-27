import React from 'react';
import { connect } from 'react-redux';
import routes from '../../../consts/routes';
import { NavLink } from 'react-router-dom';
import { authUser } from '../../../redux/actions/authActions';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { singInValidator } from '../../../validatorsSchema/singInValidator';
import PropTypes from 'prop-types';
import styles from './SingInComponent.module.scss';

const SingInComponent = ({ authUser }) => {
  const [showPs, setShowPs] = React.useState(false);
  const { authPage, singUpPage } = routes;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(singInValidator),
  });

  const onSubmitData = async (data) => {
    authUser(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <h2>Sing in</h2>
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
        <button type="submit" className={styles.button}>
          Sing in
        </button>
        <div className={styles.checkboxContainer}>
          <label>
            <input type="checkbox" />
            Remember me?
          </label>
          <span>Forgot password?</span>
        </div>
        <div className={styles.linkText}>
          But if you still don`t have an account
          <NavLink to={`/${authPage}/${singUpPage}`} className={styles.link}>
            sing up
          </NavLink>
        </div>
      </form>
    </>
  );
};


SingInComponent.propTypes = {};

SingInComponent.defaultProps = {};

export default connect(null, {authUser})(SingInComponent);
