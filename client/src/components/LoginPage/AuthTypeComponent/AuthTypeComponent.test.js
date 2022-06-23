import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthTypeComponent from './AuthTypeComponent';

describe('<AuthTypeComponent />', () => {
  test('it should mount', () => {
    render(<AuthTypeComponent />);
    
    const authTypeComponent = screen.getByTestId('AuthTypeComponent');

    expect(authTypeComponent).toBeInTheDocument();
  });
});