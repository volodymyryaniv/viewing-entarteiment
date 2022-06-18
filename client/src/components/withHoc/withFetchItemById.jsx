import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchOneItemStores } from '../../redux/actions/bookStoreActions';
import { useLocation } from 'react-router-dom';

const withFetchById = WrappedComponent => {
  return (props) => {
    const pathWithId = useLocation().pathname;

    React.useEffect(() => {
      props.fetchOneItemStores(pathWithId);
    }, []);

    return <WrappedComponent shop={props.shop} path={pathWithId}/>
  }
}

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