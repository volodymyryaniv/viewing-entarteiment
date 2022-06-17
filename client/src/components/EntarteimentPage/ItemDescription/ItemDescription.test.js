import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemDescription from './ItemDescription';

describe('<ItemDescription />', () => {
  test('it should mount', () => {
    render(<ItemDescription />);
    
    const ItemDescription = screen.getByTestId('ItemDescription');

    expect(ItemDescription).toBeInTheDocument();
  });
});