import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SingUpComponent from './SingUpComponent';

describe('<SingUpComponent />', () => {
  test('it should mount', () => {
    render(<SingUpComponent />);
    
    const singUpComponent = screen.getByTestId('SingUpComponent');

    expect(singUpComponent).toBeInTheDocument();
  });
});