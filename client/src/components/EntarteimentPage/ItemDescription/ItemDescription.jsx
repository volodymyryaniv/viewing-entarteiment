import React from 'react';
import PropTypes from 'prop-types';
import styles from './ItemDescription.module.scss';
import DescriptionButtons from '../../DescriptionButtons';
import FeedbackPage from '../../FeedbackPage';
import withFethItemById from '../../withHoc/withFetchItemById';

const ItemDescription = ({shop}) => {
  const [showFeedbacks, setShowFeedbacks] = React.useState(false);
  const showFeedbackHandler = () => setShowFeedbacks(!showFeedbacks)
  console.log(shop)

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

ItemDescription.propTypes = {};

export default withFethItemById(ItemDescription);

