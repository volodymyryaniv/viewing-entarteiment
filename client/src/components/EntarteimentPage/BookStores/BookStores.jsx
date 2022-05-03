import React,{useEffect} from 'react';
import {useLocation,Outlet} from 'react-router-dom';
import {connect} from 'react-redux';
import routes from '../../../consts/routes.js';
import PropTypes from 'prop-types';
import styles from './BookStores.module.scss';
import BookStore from './BookStore'
import {fetchAllBookStores} from '../../../redux/actions/bookStoreActions.js';


const BookStores = ({list,getAll}) => {
  const pathname = useLocation().pathname;

  useEffect(() => {
    getAll();
  }, []);
  
  return (
    <section className={styles.BookStores} data-testid="BookStores">
      <div className={styles.background}>
        {pathname === `/${routes.attractionsPage}/${routes.bookStoresPage}` ? (
          <article className={styles.cardContainer}>
            {list.map((shop) => {
              return <BookStore key={shop._id} shop={shop} />;
            })}
          </article>
        ) : (
          <Outlet />
        )}
      </div>
    </section>
  );
};



BookStores.propTypes = {};

BookStores.defaultProps = {};

const mapStateToProps = state => {
  return {
    list: state.bookStoresAllReducer.list
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAll: () => dispatch(fetchAllBookStores())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookStores);
