import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cinemas from './Cinemas';

describe('<Cinemas />', () => {
  test('it should mount', () => {
    render(<Cinemas />);
    
    const cinemas = screen.getByTestId('Cinemas');

    expect(cinemas).toBeInTheDocument();
  });
});