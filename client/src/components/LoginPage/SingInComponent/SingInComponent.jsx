import React from 'react';
import { NavLink } from 'react-router-dom';
import { authUser } from '../../../redux/actions/authActions';
import { singInValidator } from '../../../validatorsSchema/singInValidator';
import PropTypes from 'prop-types';
import styles from './SingInComponent.module.scss';
import withFormValidation from '../../withHoc/withFormValidation';

const SingInComponent = ({
  isLoading,
  handleSubmit,
  onSubmitData,
  errors,
  register,
  authPage,
  singUpPage
}) => {
  const [showPs, setShowPs] = React.useState(false);
  
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
        <button type="submit" className={styles.button} disabled={isLoading}>
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

export default withFormValidation(SingInComponent, authUser, singInValidator);
