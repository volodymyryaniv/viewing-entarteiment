import React from 'react';
import PropTypes from 'prop-types';
import styles from './ItemDescription.module.scss';
import DescriptionButtons from '../../DescriptionButtons';
import FeedbackPage from '../../FeedbackPage';
import withFethItemById from '../../withHoc/withFetchItemById';
import RatingsButtons from '../../DescriptionButtons/RatingsButtons';
import { updateRating } from '../../../client-api/updateData-api';

const ItemDescription = ({shop, path }) => {
  const [rating, setRating] = React.useState(0)
  const [showFeedbacks, setShowFeedbacks] = React.useState(false);
  const showFeedbackHandler = () => setShowFeedbacks(!showFeedbacks)


  const addEstimate = async (e) => {
    const rating = await updateRating(e.target.value, path);
    setRating(rating.data.rating)
  }

  React.useEffect (() => {
      ////////////////////////////////////////////////////////////////////////// add action for redux for new rating update
    setRating(shop.rating)
  }, [shop.rating]);

  return (
    <div className={styles.ItemDescription} data-testid="ItemDescription">
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
              <p>Rating: {rating}</p>
            </div>
          </div>
          <DescriptionButtons showFeedback={showFeedbackHandler}/>
          <RatingsButtons addEstimate={addEstimate}/>
          {showFeedbacks && <FeedbackPage feedbacks={shop.feedback}/>}
        </article>
      )}
    </div>
  );
};

ItemDescription.propTypes = {};

export default withFethItemById(ItemDescription);

