import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
  return (
    <div className={styles.background} data-testid="ContactsPage">
      <article className={styles.container}>
        ContactsPage Component
      </article>
    </div>
  )
};

ContactsPage.propTypes = {};

ContactsPage.defaultProps = {};

export default ContactsPage;
