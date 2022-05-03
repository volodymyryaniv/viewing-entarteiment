import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShopDescription from './ShopDescription';

describe('<ShopDescription />', () => {
  test('it should mount', () => {
    render(<ShopDescription />);
    
    const shopDescription = screen.getByTestId('ShopDescription');

    expect(shopDescription).toBeInTheDocument();
  });
});