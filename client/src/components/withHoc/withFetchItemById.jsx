import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { updateRating, updateFeedbacks } from '../../client-api/updateData-api';
import { removeFeedback } from '../../client-api/deleteData';
import { fetchOneItemStores, successOneItemAction,  } from '../../redux/actions/bookStoreActions';
import { useLocation } from 'react-router-dom';

const withFetchById = (WrappedComponent) => {
  return ({ fetchOneItemStores, successOneItemAction, shop }) => {
    const pathWithId = useLocation().pathname;

    React.useEffect(() => {
      fetchOneItemStores(pathWithId);
    }, []);

    const addEstimate = async (e) => {
      const updatedItem = await updateRating(e.target.value, pathWithId);
      successOneItemAction(updatedItem.data);
    };

    const addFeedback = async (value) => {
      const updatedItem = await updateFeedbacks(
        { date: new Date(), content: value },
        pathWithId
      );
      successOneItemAction(updatedItem.data);
    };

    const deleteFeedback = async (id) => {
      const updatedItem = await removeFeedback(pathWithId, id);
      successOneItemAction(updatedItem.data);
    };

    return (
      <WrappedComponent
        shop={shop}
        addEstimate={addEstimate}
        addFeedback={addFeedback}
        deleteFeedback={deleteFeedback}
      />
    );
  };
};

const mapStateToProps = state => {
    return {
      shop: state.bookStoresOneReducer.element,
    }
  }

const mapDispatchToProps = {
  fetchOneItemStores,
  successOneItemAction,
}

const withFethItemById = compose(
  connect(mapStateToProps, mapDispatchToProps), 
  withFetchById
);
export default withFethItemById;
