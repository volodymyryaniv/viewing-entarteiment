import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookStores from './BookStores';

describe('<BookStores />', () => {
  test('it should mount', () => {
    render(<BookStores />);
    
    const bookStores = screen.getByTestId('BookStores');

    expect(bookStores).toBeInTheDocument();
  });
});