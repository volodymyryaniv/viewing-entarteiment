import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SingIn from './SingIn';

describe('<SingIn />', () => {
  test('it should mount', () => {
    render(<SingIn />);
    
    const singIn = screen.getByTestId('SingIn');

    expect(singIn).toBeInTheDocument();
  });
});