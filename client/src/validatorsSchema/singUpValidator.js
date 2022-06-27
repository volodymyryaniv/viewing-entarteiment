import * as Yup from 'yup';

export const singUpValidator = Yup.object({
  name: Yup.string()
    .required('Email is required')
    .test('name', 'Please enter full name', (value) => {
      return value.trim().split(' ').length >= 2;
    }),
  email: Yup.string().email('Must be in a valid format').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(12, 'Min length 12 symbols')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/,
      'Please valid password. One uppercase, one lowercase, one special character and no spaces'
    ),
  confirmPassword: Yup.string()
    .required('This field is required')
    .oneOf([Yup.ref('password'), null], 'You enter different passwords'),
  phone: Yup.string()
    .min(10, 'Min length 10 symbols')
    .required('Phone number is required'),
});
