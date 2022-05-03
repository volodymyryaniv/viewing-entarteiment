import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonToGo from './ButtonToGo';

describe('<ButtonToGo />', () => {
  test('it should mount', () => {
    render(<ButtonToGo />);
    
    const buttonToGo = screen.getByTestId('ButtonToGo');

    expect(buttonToGo).toBeInTheDocument();
  });
});