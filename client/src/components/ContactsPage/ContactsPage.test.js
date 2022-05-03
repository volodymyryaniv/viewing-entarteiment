import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactsPage from './ContactsPage';

describe('<ContactsPage />', () => {
  test('it should mount', () => {
    render(<ContactsPage />);
    
    const contactsPage = screen.getByTestId('ContactsPage');

    expect(contactsPage).toBeInTheDocument();
  });
});