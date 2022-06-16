import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ShopDescription.module.scss';
import DescriptionButtons from '../../../DescriptionButtons';
import FeedbackPage from '../../../FeedbackPage';
import {fetchOneBookStores} from '../../../../redux/actions/bookStoreActions.js'

const ShopDescription = ({shop,getOne}) => {
  const [showFeedbacks, setShowFeedbacks] = useState(false);
  const id = useParams().id;

  useEffect(() => {
    getOne(id);
  }, []);

  const showFeedbackHandler = () => setShowFeedbacks(!showFeedbacks)
  
  return (
    <div className={styles.ShopDescription} data-testid="ShopDescription">
      {shop && (
        <article className={styles.container}>
          <div className={styles.content}>
            <img
              src={'/public-img/icons/lviv.jpg'}
              alt={shop.name}
              className={styles.image}
            />
            <div className={styles.textContent}>
              <h1>Shop name: {shop.name}</h1>
              <p>Address: {shop.address}</p>
              <p>Phone: {shop.phone}</p>
              <p>
                Working hours: {shop.openFrom}-{shop.openUntil}
              </p>
              <p>{shop.description}</p>
              <p>Rating: {shop.rating}</p>
            </div>
          </div>
          <DescriptionButtons showFeedback={showFeedbackHandler}/>
          {showFeedbacks && <FeedbackPage feedbacks={shop.feedback}/>}
        </article>
      )}
    </div>
  );
};


ShopDescription.propTypes = {};

ShopDescription.defaultProps = {};

const mapStateToProps = state => {
  return {
    shop: state.bookStoresOneReducer.element
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOne: (id) => dispatch(fetchOneBookStores(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopDescription);
