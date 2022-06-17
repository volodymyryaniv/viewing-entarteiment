import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchAllItems } from '../../redux/actions/bookStoreActions';
import { useLocation } from 'react-router-dom';

const withFetchAll = (WrappedComponent) => {
  return (props) => {
    const path = useLocation().pathname;

    React.useEffect(() => {
      props.fetchAllItems(path);
    }, []);

    return <WrappedComponent list={props.list} />;
  };
};

const mapStateToProps = (state) => {
  return {
    list: state.bookStoresAllReducer.list,
  };
};

const mapDispatchToProps = {
  fetchAllItems,
};

const withFethList = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFetchAll
);
export default withFethList;
