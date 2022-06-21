import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RatingsButtons from './RatingsButtons';

describe('<RatingsButtons />', () => {
  test('it should mount', () => {
    render(<RatingsButtons />);
    
    const ratingsButtons = screen.getByTestId('RatingsButtons');

    expect(ratingsButtons).toBeInTheDocument();
  });
});
