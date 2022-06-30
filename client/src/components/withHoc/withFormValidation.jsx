import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import routes from '../../consts/routes';

const withFormValidation = (WrappedComponent, authAction, validator) => {
  function WithFormValidation(props) {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: 'all',
      resolver: yupResolver(validator),
    });

    const onSubmitData = (data) => {
        props.authAction(data);
    };

    return (
      <WrappedComponent
        {...props}
        onSubmitData={onSubmitData}
        handleSubmit={handleSubmit}
        errors={errors}
        register={register}
        {...routes}
      />
    );
  }

  const mapStateToProps = (state) => ({
    isLoading: state.authReducer.loading,
  });

  return connect(mapStateToProps, { authAction })(WithFormValidation);
};

export default withFormValidation;