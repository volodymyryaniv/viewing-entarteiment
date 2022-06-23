import React from 'react';
import styles from './MainPage.module.scss';
import { Outlet } from 'react-router-dom';

const MainPage = () => (
  <section className={styles.mainBackground}>
    <Outlet/>
  </section>
);

export default MainPage;
