import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { updateRating, updateFeedbacks } from '../../client-api/updateData-api';
import { removeFeedback } from '../../client-api/deleteData-api';
import { getItemById } from '../../client-api/getData-api';
import { fetchOneItemStores } from '../../redux/actions/productsActions';
import { useLocation } from 'react-router-dom';

const withFetchById = (WrappedComponent) => {
  return ({ fetchOneItemStores, successOneItemAction, shop }) => {
    const pathWithId = useLocation().pathname;

    React.useEffect(() => {
      fetchOneItemStores(getItemById,pathWithId);
    }, []);

    const addEstimate = (e) => {
      fetchOneItemStores(updateRating,pathWithId, e.target.value);
    };

    const addFeedback = (value) => {
      fetchOneItemStores(updateFeedbacks, pathWithId, {
        date: new Date(),
        content: value,
      });
    };

    const deleteFeedback = async (id) => {
      fetchOneItemStores(removeFeedback,pathWithId, id);
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
}

const withFethItemById = compose(
  connect(mapStateToProps, mapDispatchToProps), 
  withFetchById
);
export default withFethItemById;
