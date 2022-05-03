import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DescriptionButtons from './DescriptionButtons';

describe('<DescriptionButtons />', () => {
  test('it should mount', () => {
    render(<DescriptionButtons />);
    
    const descriptionButtons = screen.getByTestId('DescriptionButtons');

    expect(descriptionButtons).toBeInTheDocument();
  });
});