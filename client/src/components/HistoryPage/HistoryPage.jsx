import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryPage.module.scss';

const HistoryPage = () => {
  return (
    <article className={styles.historyBg} data-testid="HistoryPage">
      HistoryPage Component
    </article>
  );
}


HistoryPage.propTypes = {};

HistoryPage.defaultProps = {};

export default HistoryPage;
