import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EntarteimentPage from './EntarteimentPage';

describe('<EntarteimentPage />', () => {
  test('it should mount', () => {
    render(<EntarteimentPage />);
    
    const entarteimentPage = screen.getByTestId('EntarteimentPage');

    expect(entarteimentPage).toBeInTheDocument();
  });
});