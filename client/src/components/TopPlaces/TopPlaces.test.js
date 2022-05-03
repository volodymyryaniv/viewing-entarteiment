import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TopPlaces from './TopPlaces';

describe('<TopPlaces />', () => {
  test('it should mount', () => {
    render(<TopPlaces />);
    
    const topPlaces = screen.getByTestId('TopPlaces');

    expect(topPlaces).toBeInTheDocument();
  });
});