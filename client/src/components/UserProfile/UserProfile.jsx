import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetToken } from '../../redux/actions/authActions';
import styles from './UserProfile.module.scss';

const UserProfile = ({ userName,resetToken }) => {
  const [show, setShow] = React.useState(false);

  const onShowMenu = () => {
    setShow(!show);
  };

  const onLogOut = () => {
    localStorage.removeItem('accessToken');
    resetToken();
  }

  const getLetters = (name) => {
    return name ? name.split(' ').map(word => word[0].toUpperCase()).slice(0,2).join('') : '';
  };

  const letters = React.useMemo(() => getLetters(userName), [userName]);
  return (
    <div className={styles.container} data-testid="UserProfile">
      <div className={styles.label} onClick={onShowMenu}>
        {letters}
      </div>
      {show && <div className={styles.menu}>
        <p className={styles.item} onClick={onLogOut}>Log out</p>
        <p className={styles.item}>My profile</p>
      </div>}
    </div>
  );
};

UserProfile.propTypes = {};

UserProfile.defaultProps = {};

const mapStateToProps = state => ({
  userName: state.authReducer.user.name
});

export default connect(mapStateToProps, { resetToken })(UserProfile);
