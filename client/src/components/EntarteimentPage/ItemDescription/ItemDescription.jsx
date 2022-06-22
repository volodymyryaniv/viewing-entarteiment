import React from 'react';
import PropTypes from 'prop-types';
import styles from './ItemDescription.module.scss';
import DescriptionButtons from '../../DescriptionButtons';
import FeedbackPage from '../../FeedbackPage';
import withFethItemById from '../../withHoc/withFetchItemById';
import RatingsButtons from '../../RatingsButtons';

const ItemDescription = ({
  shop,
  addEstimate,
  addFeedback,
  deleteFeedback,
}) => {
  const [showFeedbacks, setShowFeedbacks] = React.useState(false);
  const showFeedbackHandler = () => setShowFeedbacks(!showFeedbacks);

  return (
    <div className={styles.itemDescription} data-testid="ItemDescription">
      {shop && (
        <article className={styles.container}>
          <div className={styles.content}>
            <img
              src={'/public-img/icons/lviv.jpg'}
              alt={shop.name}
              className={styles.image}
            />
            <div className={styles.textContent}>
              <h1>{shop.name}</h1>
              <p> Address: <span>{shop.address}</span></p>
              <p> Phone: <span>{shop.phone}</span></p>
              <p>
                Working hours:
                <span>
                  {shop.openFrom}-{shop.openUntil}
                </span>
              </p>
              <p>
                <span>{shop.description}</span>
              </p>
              <RatingsButtons addEstimate={addEstimate} rating={shop.rating} />
            </div>
          </div>
          <DescriptionButtons showFeedback={showFeedbackHandler} />
          {showFeedbacks && (
            <FeedbackPage
              feedbacks={shop.feedback}
              addFeedback={addFeedback}
              deleteFeedback={deleteFeedback}
            />
          )}
        </article>
      )}
    </div>
  );
};

ItemDescription.propTypes = {};

export default withFethItemById(ItemDescription);
