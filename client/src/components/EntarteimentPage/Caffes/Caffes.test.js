import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Caffes from './Caffes';

describe('<Caffes />', () => {
  test('it should mount', () => {
    render(<Caffes />);
    
    const caffes = screen.getByTestId('Caffes');

    expect(caffes).toBeInTheDocument();
  });
});