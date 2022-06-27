import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsPage.module.scss';

const ContactsPage = () => (
  <div className={styles.contactsPage} data-testid="ContactsPage">
    ContactsPage Component
  </div>
);

ContactsPage.propTypes = {};

ContactsPage.defaultProps = {};

export default ContactsPage;
