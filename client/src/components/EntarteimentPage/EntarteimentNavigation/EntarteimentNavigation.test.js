import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EntarteimentNavigation from './EntarteimentNavigation';

describe('<EntarteimentNavigation />', () => {
  test('it should mount', () => {
    render(<EntarteimentNavigation />);
    
    const entarteimentNavigation = screen.getByTestId('EntarteimentNavigation');

    expect(entarteimentNavigation).toBeInTheDocument();
  });
});