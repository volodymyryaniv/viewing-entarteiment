import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { updateRating } from '../../client-api/updateData-api';
import { fetchOneItemStores, successOneItemAction  } from '../../redux/actions/bookStoreActions';
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

    return <WrappedComponent shop={shop} addEstimate={addEstimate} />;
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